import { tableSchema } from "@nozbe/watermelondb";

export const transactions = tableSchema({
  name: "transactions",
  columns: [
    { name: "type", type: "string" }, // expense | income | transfer
    { name: "amount", type: "number" },
    { name: "currency", type: "string", isOptional: true },
    { name: "account_id", type: "string", isIndexed: true },
    { name: "category_id", type: "string", isIndexed: true },
    { name: "date", type: "number" }, // timestamp
    { name: "merchant_name", type: "string", isOptional: true },
    { name: "merchant_id", type: "string", isOptional: true },
    { name: "payment_method", type: "string", isOptional: true }, // upi | card | cash | netbanking
    { name: "description", type: "string", isOptional: true },
    { name: "notes", type: "string", isOptional: true },
    { name: "source", type: "string", isOptional: true }, // manual | sms | ocr | email | bank_sync
    { name: "source_reference", type: "string", isOptional: true }, // external ID from API
    { name: "confidence_score", type: "number", isOptional: true }, // AI confidence
    { name: "reviewed", type: "boolean", isOptional: true },
    { name: "is_flagged", type: "boolean", isOptional: true },
    { name: "is_recurring", type: "boolean", isOptional: true },
    { name: "recurring_rule_id", type: "string", isOptional: true },
    { name: "duplicate_hash", type: "string", isIndexed: true }, // hash for dedup: amount+date+merchant
    { name: "deleted", type: "boolean", isOptional: true },
    { name: "created_at", type: "number" },
    { name: "updated_at", type: "number" },
  ],
});
