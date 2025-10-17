import { tableSchema } from "@nozbe/watermelondb";

export const recurringRule = tableSchema({
  name: "recurring_rules",
  columns: [
    { name: "title", type: "string" },
    { name: "amount", type: "number" },
    { name: "category_id", type: "string", isIndexed: true },
    { name: "frequency", type: "string" }, // daily | weekly | monthly | yearly
    { name: "next_occurrence", type: "number" },
    { name: "end_date", type: "number", isOptional: true },
    { name: "is_active", type: "boolean" },
    { name: "source_transaction_id", type: "string", isOptional: true },
    { name: "created_at", type: "number" },
    { name: "updated_at", type: "number" },
  ],
});
