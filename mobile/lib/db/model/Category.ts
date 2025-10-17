import { Model } from "@nozbe/watermelondb";
import {
  children,
  date,
  field,
  readonly,
} from "@nozbe/watermelondb/decorators";
import { Transaction } from "./Transaction";

export class Category extends Model {
  static table = "categories";

  static associations = {
    transactions: { type: "has_many", foreignKey: "category_id" },
  } as const;

  @field("name") name!: string;
  @field("type") type!: "expense" | "income";
  @field("icon") icon?: string;
  @field("color") color?: string;
  @field("ai_keywords") aiKeywords?: string;
  @field("user_defined") userDefined?: boolean;

  @readonly @date("created_at") createdAt!: number;
  @readonly @date("updated_at") updatedAt!: number;

  @children("transactions") transactions!: Transaction[];

  // ----- GETTERS -----
  get keywordList(): string[] {
    return this.aiKeywords?.split(",").map((k) => k.trim()) || [];
  }

  get isSystemCategory(): boolean {
    return !this.userDefined;
  }
}
