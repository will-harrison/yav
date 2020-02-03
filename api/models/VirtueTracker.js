import { SQLite } from 'expo-sqlite';
import { BaseModel, types } from 'expo-sqlite-orm';

export default class VirtueTracker extends BaseModel {
  constructor(obj) {
    super(obj);
  }

  static get database() {
    return async () => SQLite.openDatabase('virtuous.db');
  }

  static get tableName() {
    return 'VirtueTracker';
  }

  static get columnMapping() {
    return {
      id: { type: types.INTEGER, primary_key: true },
      virtueId: { type: types.INTEGER, not_null: true },
      value: { type: types.INTEGER, not_null: true },
      createdAt: { type: types.INTEGER, default: () => Date.now() },
      updatedAt: { type: types.INTEGER, default: () => Date.now() }
    };
  }
}
