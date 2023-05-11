export interface IChildren {
  children?: React.ReactNode;
}

export type NonEmptyArr<T> = [T, ...T[]];

export type RequiredProperty<T> = { [P in keyof T]: Required<NonNullable<T[P]>> };
