import styled from "styled-components";

export const TableLine = styled.tr`
  & + & {
    border-top: solid 1px var(--light-brown);
  }
`;

export const TableColumn = styled.td`
  padding: 10px 0;
`;

export const Category = styled.div<{ color: string }>`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
  color: var(--light);
  background-color: ${(props) => props.color};
`;

export const Value = styled.div<{ color: string }>`
  color: ${(props) => props.color};
`;
