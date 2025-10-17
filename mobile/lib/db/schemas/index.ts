import { appSchema } from "@nozbe/watermelondb";
import { accounts } from "./accounts";
import { attachments } from "./attachments";
import { budgets } from "./budgets";
import { categories } from "./categories";
import { metaLogs } from "./metaLogs";
import { recurringRule } from "./recurringRules";
import { transactions } from "./transactions";

export default appSchema({
  version: 1,
  tables: [
    // We'll add tableSchemas here later
    transactions,
    accounts,
    attachments,
    budgets,
    categories,
    metaLogs,
    recurringRule,
  ],
});
