# culinary-arts-assistant

This project is a backend application that uses the OpenAI Assistants API to provide culinary arts assistance. It exposes a streaming API endpoint `/api/ask` that allows real-time interaction with the OpenAI assistant.

## Setup

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd culinary-arts-assistant
    ```
2.  **Install dependencies:**
    ```bash
    pnpm install
    ```
3.  **Configure environment variables:**
    Create a `.env` file in the root directory and add your OpenAI API key:
    ```
    OPENAI_API_KEY=your_openai_api_key_here
    ```
4.  **Run the application:**
    ```bash
    pnpm start
    ```
    The server will start on `http://localhost:3000`.

## API Endpoint

### `POST /api/ask`

This endpoint allows you to send a message to the OpenAI assistant and receive a streaming response.

**Request Body:**
```json
{
  "message": "Your message to the assistant"
}
```

**Streaming Response (Server-Sent Events):**
The response will be a stream of text chunks. You can consume this endpoint using an `EventSource` in a web browser or a similar SSE client.

**Example Client-side Usage (JavaScript):**

```javascript
const message = "How do I make a classic French omelette?";

fetch('/api/ask', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message: message }),
})
.then(response => {
    const reader = response.body.getReader();
    const decoder = new TextDecoder('utf-8');
    
    reader.read().then(function processText({ done, value }) {
        if (done) {
            console.log('Stream complete');
            return;
        }
        console.log(decoder.decode(value)); // Each chunk of the response
        return reader.read().then(processText);
    });
})
.catch(error => {
    console.error('Error:', error);
});
```

The streaming response will directly send the text content from the assistant without wrapping it in a JSON object for each chunk, making it a raw text stream. If you need JSON objects per chunk, you would need to adjust the server-side `res.write` to `res.write(JSON.stringify({ reply: content.text.value }));` and then parse each chunk on the client.

---
