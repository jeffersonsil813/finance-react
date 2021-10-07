import * as C from "./Styles";

import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/all";
import { formatCurrentMonth } from "../../helpers/dateFilter";
import { ResumeItem } from "../ResumeItem/ResumeItem";

type Props = {
  currentMonth: string;
  onMonthChange: (newMonth: string) => void;
  income: number;
  expense: number;
};

export const InfoArea = ({
  currentMonth,
  onMonthChange,
  income,
  expense,
}: Props) => {
  const handlePrevMonth = () => {
    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() - 1);
    onMonthChange(
      currentDate.getFullYear() + "-" + (currentDate.getMonth() + 1)
    );
  };

  const handleNextMonth = () => {
    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() + 1);
    onMonthChange(
      currentDate.getFullYear() + "-" + (currentDate.getMonth() + 1)
    );
  };

  return (
    <C.Container>
      <C.MonthArea>
        <C.MonthArrow onClick={handlePrevMonth}>
          <FiArrowLeftCircle size="35" />
        </C.MonthArrow>
        <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
        <C.MonthArrow onClick={handleNextMonth}>
          <FiArrowRightCircle size="35" />
        </C.MonthArrow>
      </C.MonthArea>

      <C.ResumeArea>
        <ResumeItem title="Receitas" value={parseFloat(income.toFixed(2))} />
        <ResumeItem title="Despesas" value={parseFloat(expense.toFixed(2))} />
        <ResumeItem
          title="Balanço"
          value={parseFloat((income - expense).toFixed(2))}
          color={income - expense < 0 ? "var(--red)" : "var(--green)"}
        />
      </C.ResumeArea>
    </C.Container>
  );
};
