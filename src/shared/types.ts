export type Primitive = string | number | boolean | undefined | null;

export type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T[P] extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : DeepPartial<T[P]>
};

export type Optional<T> = T | undefined | null;

export type AggregateID = string | number;

export type CommandProps<T> = Readonly<T>;

export type QueryProps<T> = Readonly<T>;