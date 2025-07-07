// Types for the internal order QA results
export interface Media {
  type: string;
  alt_text: string;
  url: string;
}

export interface QAResponse {
  question: string;
  answer: string;
  steps: string[];
  url: string;
  media: Media;
}

export interface QAResult {
  question_number: number;
  question: string;
  timestamp: string;
  success: boolean;
  response: QAResponse;
  error: string | null;
}

export interface QAMetadata {
  created_at: string;
  total_questions: number;
  endpoint: string;
  completed_at: string;
  completed_questions: number;
}

export interface InternalOrderQAResults {
  metadata: QAMetadata;
  results: QAResult[];
}

// The actual QA results data
export const internalOrderQAResults: InternalOrderQAResults = {
  "metadata": {
    "created_at": "2025-07-07T20:08:00.122Z",
    "total_questions": 10,
    "endpoint": "https://culinary-arts-assistant.onrender.com/api/ask",
    "completed_at": "2025-07-07T20:12:40.558Z",
    "completed_questions": 10
  },
  "results": [
    {
      "question_number": 1,
      "question": "How do I create a new internal order?",
      "timestamp": "2025-07-07T20:08:22.898Z",
      "success": true,
      "response": {
        "question": "How do I create a new internal order?",
        "answer": "You can create a new internal order on the \"Internal Orders\" page. This page allows you to name the order, set delivery details, add items by barcode or name, specify quantities and units, and submit the order.",
        "steps": [
          "Navigate to the \"Internal Orders\" page from the Dashboard or sidebar menu.",
          "In the \"Order Name\" field, enter a name for your internal order.",
          "Optionally, adjust the \"Class\" of the order if needed.",
          "Set the desired \"Delivery Date\" using the calendar picker.",
          "Set the desired \"Delivery Time\" using the clock picker.",
          "To add items to your order, enter the item's \"Barcode/Item Code\" or type the \"Item Name\" to search for it.",
          "Select the appropriate \"Item unit\" from the dropdown.",
          "Enter the \"Quantity\" for the item.",
          "Click the \"Add\" button to add the item to the order list below.",
          "Repeat the item addition steps for all items you want in the order.",
          "Review the items in the order table. You can edit quantities or delete items as needed.",
          "Once your order is complete and accurate, click the \"SUBMIT\" button to finalize and send the internal order.",
          "After submission, your new order will appear on the Dashboard with its status.",
          "Optionally, you can export the order as a PDF or Excel file from the Dashboard."
        ],
        "url": "https://culinaryart.online/admin/inventory-internal-grn",
        "media": {
          "type": "",
          "alt_text": "",
          "url": ""
        }
      },
      "error": null
    },
    {
      "question_number": 2,
      "question": "How can I add items to an existing internal order?",
      "timestamp": "2025-07-07T20:08:54.937Z",
      "success": true,
      "response": {
        "question": "How can I add items to an existing internal order?",
        "answer": "You can add items to an existing internal order using the Internal Order Add-on page. This allows you to search for the existing order, add additional items or menu sets, and submit the updated order to notify the distribution team.",
        "steps": [
          "Navigate to the Internal Order Add-on page.",
          "In the 'Search Order No/Name' field, enter the order number or name of the existing internal order and click the search button or select the order from suggestions.",
          "Once the order details populate (including Chef Instructor, Order Date, Order Name, Class, Delivery Date/Time), go to the 'Barcode/Item Code/Name' search field to find the items you want to add.",
          "Type the barcode, item code, or item name to search for the item, then select it from the suggestions.",
          "Choose the appropriate 'Item unit' from the dropdown menu.",
          "Enter the quantity for the new item in the 'Quantity' field.",
          "Click the 'Add' button to add the item to the order table below.",
          "Repeat the item search and add process for each additional item you wish to add.",
          "Review the order table to ensure all items and quantities are correct. You can edit quantities or delete items using the action buttons if needed.",
          "After finalizing the items, click the 'SUBMIT' button to submit the updated order and notify distribution of the additions."
        ],
        "url": "https://culinaryart.online/admin/request-grn",
        "media": {
          "type": "image",
          "alt_text": "Internal Order Add-on Page Screenshot",
          "url": "https://culinaryart.online/public/assets/back-end/img/inhouse-product-list.png"
        }
      },
      "error": null
    },
    {
      "question_number": 3,
      "question": "Where can I check the status of my internal orders?",
      "timestamp": "2025-07-07T20:09:17.767Z",
      "success": true,
      "response": {
        "question": "Where can I check the status of my internal orders?",
        "answer": "You can check the status of your internal orders in the order table at the following link: https://culinaryart.online/admin/dashboard. The order status will be displayed as either 'pending', 'issued', or 'completed'.\n\n* **Pending:** The order has been processed.\n* **Issued:** The order has been received.\n* **Completed:** The order has been distributed to classes.",
        "steps": [
          "Navigate to the dashboard by clicking on the provided link.",
          "Locate the order table on the page.",
          "Find your specific order and view the corresponding status in the designated column.",
          "The status will indicate whether the order is pending, issued, or completed."
        ],
        "url": "https://culinaryart.online/admin/dashboard",
        "media": {
          "type": "",
          "alt_text": "",
          "url": ""
        }
      },
      "error": null
    },
    {
      "question_number": 4,
      "question": "How do I edit or delete an item in an internal order?",
      "timestamp": "2025-07-07T20:09:41.837Z",
      "success": true,
      "response": {
        "question": "How do I edit or delete an item in an internal order?",
        "answer": "You can edit or delete items in an internal order on the Internal Orders page. After finding your order, the items are listed in a table where you can directly modify quantities or remove items. Please note that changing the quantity will update the order immediately.",
        "steps": [
          "Navigate to the Internal Orders page.",
          "Search for the desired order in the \"Search Order No/Name.\" input field.",
          "In the order item table at the bottom of the page, locate the item you want to edit or delete.",
          "To edit the quantity of an item, change the value directly in the Quantity field of that item in the order table. The order will update immediately.",
          "To delete an item, click the trash can icon next to the item you wish to remove.",
          "Once you have made all necessary changes, review the order and proceed with submission or further edits as needed."
        ],
        "url": "https://culinaryart.online/admin/inventory-internal-grn",
        "media": {
          "type": "",
          "alt_text": "",
          "url": ""
        }
      },
      "error": null
    },
    {
      "question_number": 5,
      "question": "Can I search for internal orders by date or order number?",
      "timestamp": "2025-07-07T20:10:10.916Z",
      "success": true,
      "response": {
        "question": "Can I search for internal orders by date or order number?",
        "answer": "Yes, you can search for internal orders by date or order number on the Pending Internal Orders page. This page provides a filtering form that allows you to specify delivery dates, order dates, and enter an order number to narrow down the list of pending internal orders.",
        "steps": [
          "Navigate to the Pending Internal Orders page.",
          "Locate the Order Filtering Form at the top of the page.",
          "Use the date input fields labeled **Start Delivery Date** and **End Delivery Date** to filter orders based on delivery date ranges.",
          "Use the date input fields labeled **Start Order Date** and **End Order Date** to filter orders based on the order date ranges (if present).",
          "Enter the specific **Order Number** in the **Order Number** input box to search for a particular order.",
          "Click the **Filter** button to apply your search criteria. The page will reload with the filtered list of internal orders matching your criteria.",
          "To clear your filters and see all orders again, click the **Reset** button to clear the input fields."
        ],
        "url": "https://culinaryart.online/admin/inventory-pending-internal-grn",
        "media": {
          "type": "",
          "alt_text": "",
          "url": ""
        }
      },
      "error": null
    },
    {
      "question_number": 6,
      "question": "What does the \"Submit\" button do on the internal order page?",
      "timestamp": "2025-07-07T20:10:40.113Z",
      "success": true,
      "response": {
        "question": "What does the \"Submit\" button do on the internal order page?",
        "answer": "The \"Submit\" button on the internal order page is used to finalize and submit the internal order. When clicked, it sends the complete order details, including items, quantities, and delivery information, to the server to save the order. This triggers the Goods Received Note (GRN) workflow. While the order is being submitted, a loading spinner is displayed on the button to indicate the process. Upon successful submission, a confirmation message is shown. Additionally, the total cost of the order is dynamically calculated and displayed before submission.",
        "steps": [
          "Navigate to the internal order creation page.",
          "Build your order by adding items, selecting units, and entering quantities.",
          "Review the total cost displayed in the read-only field near the bottom of the page.",
          "Once everything is correct, click the **SUBMIT** button to finalize and submit your order.",
          "Wait for the spinner on the button to indicate the submission process.",
          "After successful submission, observe the confirmation message indicating your order was submitted successfully."
        ],
        "url": "https://culinaryart.online/admin/request-grn",
        "media": {
          "type": "",
          "alt_text": "",
          "url": ""
        }
      },
      "error": null
    },
    {
      "question_number": 7,
      "question": "How do I specify delivery date and time for an internal order?",
      "timestamp": "2025-07-07T20:11:19.253Z",
      "success": true,
      "response": {
        "question": "How do I specify delivery date and time for an internal order?",
        "answer": "You can specify the delivery date and time for an internal order on the Internal Order Add-on page while creating or editing the order.",
        "steps": [
          "Navigate to the Internal Order Add-on page.",
          "Locate the input fields labeled **Delivery Date** and **Delivery Time** in the order details section.",
          "Use the calendar picker interface in the **Delivery Date** field to select your desired delivery date.",
          "Use the clock picker interface in the **Delivery Time** field to set the desired delivery time for the order.",
          "Complete the rest of the order details and add items as needed.",
          "Once all details are filled, click the **SUBMIT** button to save the order with the specified delivery date and time."
        ],
        "url": "https://culinaryart.online/admin/inventory-internal-grn",
        "media": {
          "type": "",
          "alt_text": "",
          "url": ""
        }
      },
      "error": null
    },
    {
      "question_number": 8,
      "question": "What fields are required to complete an internal order?",
      "timestamp": "2025-07-07T20:11:52.907Z",
      "success": true,
      "response": {
        "question": "What fields are required to complete an internal order?",
        "answer": "To complete an internal order, you must provide details in the order form on the Internal Order Add-on page. The key required fields typically include the order details and at least one item added with quantity and unit. Specifically, the following fields are involved in completing the order:\n\n1. Order Name - to identify the order (though it may be pre-populated or read-only based on context).\n2. Class - select the class associated with the order.\n3. Delivery Date - set the delivery date using a date picker.\n4. Delivery Time - set the delivery time using a time picker.\n5. Item details:\n   - Barcode/Item Code/Name - to search and select an item to add.\n   - Item Unit - select the appropriate unit (e.g., pieces, kg).\n   - Quantity - specify how many units of the item to order.\n6. Add the item to the order list by clicking the Add button.\n\nAt least one item with a chosen unit and quantity must be added to the order table. After all required information and items are entered, you finalize by clicking the SUBMIT button.\n\nFields like Chef Instructor and Order Date are read-only and pre-populated. There are optional inputs like menu sets and exporting order data, but the essential fields for completing an order center around order identification, delivery scheduling, and item specification with quantity.\n\nIn summary, to complete an internal order you need:\n- Order Name\n- Class\n- Delivery Date\n- Delivery Time\n- At least one item added with Item Code/Name, Unit, and Quantity\n\nYou can manage these fields and complete internal orders on the Internal Order Add-on page.",
        "steps": [
          "Navigate to the Internal Order Add-on page.",
          "Fill in the Order Name in the provided field if not pre-filled.",
          "Select the Class from the dropdown menu.",
          "Set the Delivery Date using the date picker control.",
          "Set the Delivery Time using the time picker control.",
          "In the Barcode/Item Code/Name input, search for and select the item you want to order.",
          "Choose the appropriate Item Unit from the dropdown.",
          "Enter the Quantity of the item you require.",
          "Click the Add button to add this item to the order table below.",
          "Repeat the item adding process if you need to order more items.",
          "Review the order table to ensure all items and quantities are correct.",
          "Click the SUBMIT button to complete and submit the internal order."
        ],
        "url": "https://culinaryart.online/admin/request-grn",
        "media": {
          "type": "",
          "alt_text": "",
          "url": ""
        }
      },
      "error": null
    },
    {
      "question_number": 9,
      "question": "How do I export or print internal order details?",
      "timestamp": "2025-07-07T20:12:19.038Z",
      "success": true,
      "response": {
        "question": "How do I export or print internal order details?",
        "answer": "You can export or print internal order details on the \"Pending Internal Orders\" page, where orders are listed and several export options are available.",
        "steps": [
          "Navigate to the \"Pending Internal Orders\" page in the admin panel.",
          "Use the filtering options if needed to find the relevant internal orders.",
          "In the orders table, select the internal orders you want to export by checking their checkboxes.",
          "To export the selected orders to an Excel file, click the **Export to Excel** button. This will generate and download an Excel report containing the details of the selected orders.",
          "To view more detailed information about a specific order, click the **View** button in the \"Action\" column for that order. This opens a detailed order modal where you can review items and order details.",
          "Within the order details modal, you can review all item details including quantities, prices, and totals.",
          "If you want a printed or PDF version, use the **Export** or **PDF** buttons on the orders table for the specific order to download the data or report as a file to your computer, which you can then print.",
          "Alternatively, in the order creation or editing page, you can use the global action buttons such as **Copy to Clipboard**, **Export to File**, and **Import from File** to manage order data. Exporting via these buttons downloads a JSON file of the current order data.",
          "Use the **Copy to Clipboard** button to copy order data in JSON format for pasting elsewhere if needed.",
          "Use the **Export to File** button to download the current order data as a JSON file."
        ],
        "url": "https://culinaryart.online/admin/inventory-pending-internal-grn",
        "media": {
          "type": "image",
          "alt_text": "Screenshot of Pending Internal Orders page showing Export to Excel button and export options",
          "url": ""
        }
      },
      "error": null
    },
    {
      "question_number": 10,
      "question": "Who do I contact for issues related to internal orders?",
      "timestamp": "2025-07-07T20:12:40.558Z",
      "success": true,
      "response": {
        "question": "Who do I contact for issues related to internal orders?",
        "answer": "For issues related to internal orders, please contact the relevant support or administrative team designated for internal order management within your organization. The application documentation does not specify a direct contact or support person for internal order issues. You may want to check your organization's internal resources or the Culinary Art Online admin support for assistance.",
        "steps": [],
        "url": "https://culinaryart.online/admin/internal-order",
        "media": {
          "type": "",
          "alt_text": "",
          "url": ""
        }
      },
      "error": null
    }
  ]
};

// Default export
export default internalOrderQAResults; 