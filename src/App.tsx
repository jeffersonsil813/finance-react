import * as C from "./App.styles";

import { Category } from "./types/Category";
import { Item } from "./types/Item";
import { categories } from "./data/Categories";
import { items } from "./data/Items";
import { getCurrentMonth, filterListByMonth } from "./helpers/dateFilter";
import { TableArea } from "./components/TableArea/TableArea";

import { useState, useEffect } from "react";
import { InfoArea } from "./components/InfoArea/InfoArea";

export function App() {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filteredList]);

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        <InfoArea
          onMonthChange={(newMonth: string) => setCurrentMonth(newMonth)}
          currentMonth={currentMonth}
          income={income}
          expense={expense}
        />
        <TableArea list={filteredList} />
      </C.Body>
    </C.Container>
  );
}
