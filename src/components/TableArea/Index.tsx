import { Item } from "../../types/Item";
import * as C from "./Styles";

type Props = {
  list: Item[];
};

export const TableArea = ({ list }: Props) => {
  return (
    <C.Table>
      <thead>
        <tr>
          <C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
          <C.TableHeadColumn width={130}>Categoria</C.TableHeadColumn>
          <C.TableHeadColumn>Título</C.TableHeadColumn>
          <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => (
          <tr key={index}>
            {/* <td>{item.date}</td> */}
            <td>{item.category}</td>
            <td>{item.title}</td>
            <td>{item.value}</td>
          </tr>
        ))}
      </tbody>
    </C.Table>
  );
};
