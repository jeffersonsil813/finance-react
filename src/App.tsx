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

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        <InfoArea
          onMonthChange={(newMonth: string) => setCurrentMonth(newMonth)}
          currentMonth={currentMonth}
        />
        <TableArea list={filteredList} />
      </C.Body>
    </C.Container>
  );
}
