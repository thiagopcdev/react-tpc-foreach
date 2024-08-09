export interface IForEachProps<T> {
  of: T[];
  render: (item: T, index?: number) => JSX.Element;
}
