import { Children } from "react";
import { IEachProps } from "./types";

export function Each<T>({ of, render }: IEachProps<T>) {
  return Children.toArray(of.map((item: T, index: number) => render(item, index)));
}

export type { IEachProps };
export default Each;
