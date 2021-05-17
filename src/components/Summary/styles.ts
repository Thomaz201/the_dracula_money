import styled from "styled-components";
import { Box, Paragraph } from "@dracula/dracula-ui";

export const Container = styled(Box)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -7rem;

  div {
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

export const ValueText = styled(Paragraph)`
  font-family: "Poppins";
  display: block;
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: 500;
  line-height: 3rem;
`;

export const SimpleParagraph = styled(Paragraph)`
  font-family: "Poppins";
`;
