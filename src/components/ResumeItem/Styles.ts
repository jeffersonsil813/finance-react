import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
`;

export const Title = styled.div`
  text-align: center;
  font-weight: bold;
  margin-bottom: 5px;
  color: var(--light-gray);
`;

export const Info = styled.div<{ color?: string }>`
  text-align: center;
  color: ${(props) => props.color ?? "var(--light-brown)"};
  font-weight: bold;
`;
