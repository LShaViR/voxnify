import { Model } from "@nozbe/watermelondb";
import {
  date,
  field,
  readonly,
  relation,
} from "@nozbe/watermelondb/decorators";
import { Transaction } from "./Transaction";

export class Attachment extends Model {
  static table = "attachments";

  static associations = {
    transactions: { type: "belongs_to", key: "transaction_id" },
  } as const;

  @field("file_path") filePath!: string;
  @field("file_type") fileType!: string;
  @field("ocr_text") ocrText?: string;
  @field("ai_tags") aiTags?: string;

  @relation("transactions", "transaction_id") transaction!: Transaction;

  @readonly @date("created_at") createdAt!: number;

  // ----- GETTERS -----
  get tags(): string[] {
    return this.aiTags?.split(",").map((t) => t.trim()) || [];
  }
}
