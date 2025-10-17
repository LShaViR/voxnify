import { Model } from "@nozbe/watermelondb";
import {
  date,
  field,
  readonly,
  relation,
} from "@nozbe/watermelondb/decorators";
import { Category } from "./Category";

export class Budget extends Model {
  static table = "budgets";

  static associations = {
    categories: { type: "belongs_to", key: "category_id" },
  } as const;

  @field("amount_limit") amountLimit!: number;
  @field("period") period!: "monthly" | "weekly" | "yearly";
  @field("start_date") startDate!: number;
  @field("end_date") endDate?: number;
  @field("spent_amount") spentAmount?: number;
  @field("alert_threshold") alertThreshold?: number;
  @field("active") active?: boolean;

  @relation("categories", "category_id") category!: Category;

  @readonly @date("created_at") createdAt!: number;
  @readonly @date("updated_at") updatedAt!: number;

  // ----- GETTERS -----
  get usagePercent(): number {
    if (!this.amountLimit) return 0;
    return ((this.spentAmount || 0) / this.amountLimit) * 100;
  }

  get isExceeded(): boolean {
    return this.usagePercent >= 100;
  }
}
