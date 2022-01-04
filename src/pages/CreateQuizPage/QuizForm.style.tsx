import styled from "styled-components";
interface FormAttrs {
  action: string;
  autocomplete?: string;
  method: string;
}
export const QuizFormWrapper = styled.form.attrs<FormAttrs>(
  (props) => ({
    action: `${props.action}`,
    method: `${props.method}`,
    autocomplete: `${props.autocomplete || "on"}`,
  })
)`
  display: flex;
  flex-direction: column;
`;

export const QuestionWrapper = styled.div`
  width: 100%;
  margin: 10px 0;
  position: relative;
`;
