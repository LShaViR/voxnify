import { tableSchema } from "@nozbe/watermelondb";

export const categories = tableSchema({
  name: "categories",
  columns: [
    { name: "name", type: "string" },
    { name: "type", type: "string" }, // expense | income
    { name: "icon", type: "string", isOptional: true },
    { name: "color", type: "string", isOptional: true },
    { name: "ai_keywords", type: "string", isOptional: true }, // comma separated keywords
    { name: "parent_id", type: "string", isOptional: true },
    { name: "user_defined", type: "boolean", isOptional: true },
    { name: "created_at", type: "number" },
    { name: "updated_at", type: "number" },
  ],
});
