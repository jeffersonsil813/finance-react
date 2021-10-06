import { Item } from "../types/Item";

export const getCurrentMonth = () => {
  let now = new Date();
  return `
    ${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}
    `;
};

// retornando uma lista de ITEM filtrada pelo mês
export const filterListByMonth = (list: Item[], date: string): Item[] => {
  let newList: Item[] = [];
  let [year, month] = date.split("-");

  for (let i in list) {
    if (
      list[i].date.getFullYear() === parseInt(year) &&
      list[i].date.getMonth() + 1 === parseInt(month)
    ) {
      newList.push(list[i]);
    }
  }

  return newList;
};
