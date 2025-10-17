import { Model } from "@nozbe/watermelondb";
import {
  date,
  field,
  readonly,
  relation,
} from "@nozbe/watermelondb/decorators";
import { Category } from "./Category";

export class RecurringRule extends Model {
  static table = "recurring_rules";

  static associations = {
    categories: { type: "belongs_to", key: "category_id" },
  } as const;

  @field("title") title!: string;
  @field("amount") amount!: number;
  @field("frequency") frequency!: "daily" | "weekly" | "monthly" | "yearly";
  @field("next_occurrence") nextOccurrence!: number;
  @field("end_date") endDate?: number;
  @field("is_active") isActive!: boolean;
  @field("source_transaction_id") sourceTransactionId?: string;

  @relation("categories", "category_id") category!: Category;

  @readonly @date("created_at") createdAt!: number;
  @readonly @date("updated_at") updatedAt!: number;

  // ----- GETTERS -----
  get isExpired(): boolean {
    return this.endDate ? this.endDate < Date.now() : false;
  }
}
