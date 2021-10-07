import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: var(--light);
  padding: 20px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  border-radius: 10px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Date = styled.input`
  height: 50px;
  border-radius: 10px;
  padding: 0 16px;
  background-color: #fff;
  border: 1px solid var(--purple-color);
`;

export const CategoriesSelect = styled.select`
  height: 50px;
  border-radius: 10px;
  padding: 0 16px;
  background-color: #fff;
  border: 1px solid var(--purple-color);
`;

export const Title = styled.input`
  height: 50px;
  border-radius: 10px;
  padding: 0 16px;
  background-color: #fff;
  border: 1px solid var(--purple-color);
`;

export const Value = styled.input`
  height: 50px;
  border-radius: 10px;
  padding: 0 16px;
  background-color: #fff;
  border: 1px solid var(--purple-color);
`;

export const Button = styled.button`
  font-size: 16px;
  height: 50px;
  border-radius: 10px;
  font-weight: 500;
  background-color: var(--purple-color);
  color: var(--light);
  cursor: pointer;
  padding: 5px 20px;
  border: 0;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;
