import styled from "styled-components";
import { Box, Button } from "@dracula/dracula-ui";

export const Container = styled.header``;

export const Content = styled(Box)`
  max-width: 1120px;

  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
  }
`;

export const NewTransactionButton = styled(Button)`
  font-size: 1rem;
  border: 0;
  padding: 0 2rem;
  border-radius: 0.25rem;
  height: 3rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;
