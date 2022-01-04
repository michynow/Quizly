import styled from "styled-components";
export const AnswersContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
`;

export const Answer = styled.div`
  flex: 0 0 45%;
  max-width: 45%;
`;
