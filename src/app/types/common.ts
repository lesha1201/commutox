export type Prefer<P, T> = P & Omit<T, keyof P>;

export type OverwritableType<OwnProps, Type extends React.ElementType> = Prefer<
  OwnProps,
  React.ComponentPropsWithoutRef<Type>
>;
