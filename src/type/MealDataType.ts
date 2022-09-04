export type MealDataType = {
  id: number;
  name: string;
  checked: boolean;
  ingredience: { [prop: string]: number };
};
