import { tableSchema } from "@nozbe/watermelondb";

export const attachments = tableSchema({
  name: "attachments",
  columns: [
    { name: "transaction_id", type: "string", isIndexed: true },
    { name: "file_path", type: "string" },
    { name: "file_type", type: "string" }, // image | pdf | txt
    { name: "ocr_text", type: "string", isOptional: true },
    { name: "ai_tags", type: "string", isOptional: true },
    { name: "created_at", type: "number" },
  ],
});
