import { Children } from "react";
import { IForEachProps } from "./types";

export function ForEach<T>({ of, render }: IForEachProps<T>) {
  return Children.toArray(of.map((item: T, index: number) => render(item, index)));
}

export type { IForEachProps };
export default ForEach;
