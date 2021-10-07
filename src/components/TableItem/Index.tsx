import { formatDate } from "../../helpers/dateFilter";
import { Item } from "../../types/Item";
import { categories } from "../../data/Categories";

import * as C from "./Styles";

type Props = {
  item: Item;
};

export const TableItem = ({ item }: Props) => {
  return (
    <C.TableLine>
      <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
      <C.TableColumn>
        <C.Category color={categories[item.category].color + ""}>
          {categories[item.category].title}
        </C.Category>
      </C.TableColumn>
      <C.TableColumn>{item.title}</C.TableColumn>
      <C.TableColumn>
        <C.Value
          color={
            categories[item.category].expense ? "var(--red)" : "var(--green)"
          }
        >
          R$ {item.value}
        </C.Value>
      </C.TableColumn>
    </C.TableLine>
  );
};
