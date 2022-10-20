export type MealDataType = {
  id: number;
  name: string;
  checked: boolean;
  ingredienceJson: { ingredience: { [prop: string]: number } };
};
