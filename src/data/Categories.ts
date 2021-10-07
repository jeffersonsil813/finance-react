import { Category } from "../types/Category";

export const categories: Category = {
  food: { title: "Alimentação", color: "var(--purple-color)", expense: true },
  rent: { title: "Aluguel", color: "var(--red)", expense: true },
  salary: { title: "Salário", color: "var(--green)", expense: false },
};
