import dotenv from "dotenv";
import express, { Request, Response, RequestHandler } from "express";
import { OpenAI } from "openai";
import * as fs from "fs";
import * as path from "path";

dotenv.config();

const app = express();
const port = 3000;

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY as string });

app.use(express.json());

// Define interfaces for request and response
interface AskRequest {
  message: string;
}

interface AskResponse {
  reply: string;
}

interface ErrorResponse {
  error: string;
}

app.post("/api/ask", (async (
  req: Request<{}, {}, AskRequest>,
  res: Response<any>
) => {
  try {
    const { message } = req.body;

    if (!message) {
      res.status(400).json({ error: "Message is required" });
      return;
    }

    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    // Step 1: Create a thread
    const thread = await openai.beta.threads.create();

    // Step 2: Add the user message to the thread
    await openai.beta.threads.messages.create(thread.id, {
      role: "user",
      content: message,
    });

    // Step 3: Run the assistant on the thread with streaming
    const run = await openai.beta.threads.runs.create(thread.id, {
      assistant_id: "asst_t0ZMU3N0x6ut6DQ12RcXnUwq",
      stream: true,
    });

    for await (const event of run) {
      if (event.event === "thread.message.delta") {
        const content = event.data.delta.content?.[0];
        if (content && "text" in content && content.text?.value) {
          res.write(content.text.value);
        }
      }
    }

    res.end();
    return;
  } catch (error) {
    console.error(error);
    if (!res.headersSent) {
      res.status(500).json({ error: "Something went wrong." });
      return;
    } else {
      res.end(
        JSON.stringify({ error: "Something went wrong during streaming." })
      );
      return;
    }
  }
}) as RequestHandler);

// New route to serve internal order QA results
app.get("/api/internal-order-qa", (async (
  req: Request,
  res: Response<any>
) => {
  try {
    const filePath = path.join(__dirname, "internal_order_qa_results.json");
    
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      res.status(404).json({ error: "Internal order QA results file not found" });
      return;
    }

    // Read and parse the JSON file
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const qaResults = JSON.parse(fileContent);

    res.json(qaResults);
  } catch (error) {
    console.error("Error reading internal order QA results:", error);
    res.status(500).json({ error: "Failed to load internal order QA results" });
  }
}) as RequestHandler);

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
