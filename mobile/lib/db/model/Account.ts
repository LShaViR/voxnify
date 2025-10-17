import { Model } from "@nozbe/watermelondb";
import {
  children,
  date,
  field,
  readonly,
} from "@nozbe/watermelondb/decorators";
import { Transaction } from "./Transaction";

export class Account extends Model {
  static table = "accounts";

  static associations = {
    transactions: { type: "has_many", foreignKey: "account_id" },
  } as const;

  @field("name") name!: string;
  @field("type") type!: "bank" | "wallet" | "cash" | "credit_card";
  @field("institution") institution?: string;
  @field("balance") balance?: number;
  @field("currency") currency?: string;
  @field("sync_provider") syncProvider?: string;

  @readonly @date("created_at") createdAt!: number;
  @readonly @date("updated_at") updatedAt!: number;

  @children("transactions") transactions!: Transaction[];

  // ----- GETTERS -----
  get balanceDisplay(): string {
    const symbol = this.currency === "INR" ? "₹" : this.currency || "";
    return `${symbol}${(this.balance || 0).toFixed(2)}`;
  }
}
