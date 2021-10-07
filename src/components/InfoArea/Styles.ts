import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--light);
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  border-radius: 10px;
  padding: 20px;
  margin-top: -40px;
  display: flex;
  align-items: center;
`;

export const MonthArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  text-align: center;
`;

export const MonthArrow = styled.div`
  color: var(--purple-color);
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const MonthTitle = styled.div`
  flex: 1;
  margin: 0 5px;
`;

export const ResumeArea = styled.div`
  flex: 2;
  display: flex;
`;
