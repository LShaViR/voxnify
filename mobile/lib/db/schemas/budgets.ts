import { tableSchema } from "@nozbe/watermelondb";

export const budgets = tableSchema({
  name: "budgets",
  columns: [
    { name: "category_id", type: "string", isIndexed: true },
    { name: "amount_limit", type: "number" },
    { name: "period", type: "string" }, // monthly | weekly | yearly
    { name: "start_date", type: "number" },
    { name: "end_date", type: "number", isOptional: true },
    { name: "spent_amount", type: "number", isOptional: true },
    { name: "alert_threshold", type: "number", isOptional: true }, // 0.8 = 80%
    { name: "active", type: "boolean", isOptional: true },
    { name: "created_at", type: "number" },
    { name: "updated_at", type: "number" },
  ],
});
