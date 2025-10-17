import { tableSchema } from "@nozbe/watermelondb";

export const metaLogs = tableSchema({
  name: "meta_logs",
  columns: [
    { name: "entity_type", type: "string" }, // transaction | account | category
    { name: "entity_id", type: "string" },
    { name: "action", type: "string" }, // create | update | delete | sync
    { name: "payload", type: "string", isOptional: true }, // JSON string for debugging
    { name: "timestamp", type: "number" },
    { name: "synced", type: "boolean", isOptional: true },
  ],
});
