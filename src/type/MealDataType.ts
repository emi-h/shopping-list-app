export type MealDataType = {
  id: number;
  name: string;
  checked: boolean;
  ingrediences: { [prop: string]: number }[];
};
