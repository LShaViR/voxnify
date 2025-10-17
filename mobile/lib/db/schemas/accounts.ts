import { tableSchema } from "@nozbe/watermelondb";

export const accounts = tableSchema({
  name: "accounts",
  columns: [
    { name: "name", type: "string" },
    { name: "type", type: "string" }, // bank | wallet | cash | credit_card
    { name: "institution", type: "string", isOptional: true },
    { name: "account_number_masked", type: "string", isOptional: true },
    { name: "balance", type: "number", isOptional: true },
    { name: "currency", type: "string", isOptional: true },
    { name: "last_synced_at", type: "number", isOptional: true },
    { name: "sync_provider", type: "string", isOptional: true }, // e.g. Yodlee, Plaid, Perfios
    { name: "is_hidden", type: "boolean", isOptional: true },
    { name: "created_at", type: "number" },
    { name: "updated_at", type: "number" },
  ],
});
