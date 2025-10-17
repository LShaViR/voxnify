import { Model } from "@nozbe/watermelondb";
import {
  date,
  field,
  readonly,
  relation,
} from "@nozbe/watermelondb/decorators";
import { Account } from "./Account";
import { Category } from "./Category";

export class Transaction extends Model {
  static table = "transactions";

  static associations = {
    accounts: { type: "belongs_to", key: "account_id" },
    categories: { type: "belongs_to", key: "category_id" },
  } as const;

  @field("type") type!: "expense" | "income" | "transfer";
  @field("amount") amount!: number;
  @field("currency") currency?: string;
  @field("merchant_name") merchantName?: string;
  @field("payment_method") paymentMethod?: string;
  @field("description") description?: string;
  @field("source") source?: string;
  @field("confidence_score") confidenceScore?: number;
  @field("reviewed") reviewed?: boolean;
  @field("duplicate_hash") duplicateHash?: string;
  @field("deleted") deleted?: boolean;

  @relation("accounts", "account_id") account!: Account;
  @relation("categories", "category_id") category!: Category;
  @date("date") date!: number;
  @readonly @date("created_at") createdAt!: number;
  @readonly @date("updated_at") updatedAt!: number;

  // ----- GETTERS -----
  get formattedAmount(): string {
    const symbol = this.currency === "INR" ? "₹" : this.currency || "";
    return `${symbol}${this.amount.toFixed(2)}`;
  }

  get isExpense(): boolean {
    return this.type === "expense";
  }

  get isIncome(): boolean {
    return this.type === "income";
  }

  get needsReview(): boolean {
    return !this.reviewed;
  }

  get summary(): string {
    const cat = (this as any).category?.name || "Uncategorized";
    return `${cat} - ${this.formattedAmount}`;
  }
}
