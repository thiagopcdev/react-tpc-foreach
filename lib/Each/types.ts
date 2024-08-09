export interface IEachProps<T> {
  of: T[];
  render: (item: T, index?: number) => JSX.Element;
}
