export type MealDataType = {
  id: number;
  name: string;
  checked: boolean;
  ingrediences: { amount: number; ingredience: string }[];
};
