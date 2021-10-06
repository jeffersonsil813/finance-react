import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  background-color: var(--light);
  padding: 20px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  border-radius: 10px;
  margin-top: 20px;
`;

// styled.th<{width?: number}> -> usando props com styled components
export const TableHeadColumn = styled.th<{ width?: number }>`
  // se tiver um valor na prop eu uso, se não, fica como auto
  width: ${(props) => (props.width ? `${props.width}px` : "auto")};
  padding: 5px 0;
  text-align: left;
`;
