import { Identifier } from './identifier.base';

export abstract class Entity<T> {
  protected readonly _id: Identifier<T>;

  constructor(id: Identifier<T>) {
    this._id = id;
  }

  get id(): Identifier<T> {
    return this._id;
  }

  equals(other: Entity<T>): boolean {
    if (other === null || other === undefined) {
      return false;
    }
    return this._id.equals(other._id);
  }
}