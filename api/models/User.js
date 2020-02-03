import { SQLite } from 'expo-sqlite';
import { BaseModel, types } from 'expo-sqlite-orm';

export default class User extends BaseModel {
  constructor(obj) {
    super(obj);
  }

  static get database() {
    return async () => SQLite.openDatabase('virtuous.db');
  }

  static get tableName() {
    return 'User';
  }

  static get columnMapping() {
    return {
      id: { type: types.INTEGER, primary_key: true },
      userName: { type: types.TEXT, not_null: true },
      password: { type: types.TEXT, not_null: true },
      isActive: { type: types.BOOLEAN, default: true, not_null: true },
      createdAt: { type: types.INTEGER, default: () => Date.now() },
      updatedAt: { type: types.INTEGER, default: () => Date.now() }
    };
  }
}
