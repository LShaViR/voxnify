import { Model } from "@nozbe/watermelondb";
import { date, field } from "@nozbe/watermelondb/decorators";

export class MetaLog extends Model {
  static table = "meta_logs";

  @field("entity_type") entityType!: string;
  @field("entity_id") entityId!: string;
  @field("action") action!: string;
  @field("payload") payload?: string;
  @field("synced") synced?: boolean;

  @date("timestamp") timestamp!: number;

  // ----- GETTERS -----
  get parsedPayload(): any {
    try {
      return this.payload ? JSON.parse(this.payload) : null;
    } catch {
      return null;
    }
  }
}
