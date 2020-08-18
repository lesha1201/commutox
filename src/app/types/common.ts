export type Prefer<P, T> = P & Omit<T, keyof P>;

export type OverwritableType<OwnProps, Type extends React.ElementType> = Prefer<
  OwnProps,
  React.ComponentPropsWithoutRef<Type>
>;

/** Helper type for correctly resolving defaultProps in prop types of components (see https://github.com/typescript-cheatsheets/react-typescript-cheatsheet/issues/61#issuecomment-465521903). */
export type ComponentProps<T> = T extends
  | React.ComponentType<infer P>
  | React.Component<infer P>
  ? JSX.LibraryManagedAttributes<T, P>
  : never;
