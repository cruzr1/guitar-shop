export type DefaultPojoType = Record<string, unknown>;

export interface Entity<T = string, PojoType = DefaultPojoType> {
  id?: T;
  toPOJO?(): PojoType;
}
