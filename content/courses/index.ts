export interface Section {
  title: string;
  weight: number;
  topics: Topic[];
}

export type Course = Section[];

import { jsnad } from "./jsnad";
import { jsnsd } from "./jsnsd";
