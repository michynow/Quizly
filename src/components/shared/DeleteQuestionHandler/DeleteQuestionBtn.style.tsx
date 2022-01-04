import styled from "styled-components";
interface Props {
  theme: any;
  fun?: any;
}
export const DeleteQuestionBtn = styled.button`
  background-color: transparent;
  position: absolute;
  right: 0;
  top: 0;
  width: 20px;
  height: 20px;
  display: grid;
  place-items: center;
  padding: 0;
`;
export const DeleteBtnIcon = styled.i`
  font-size: 18px;
  color: ${({ theme }: Props) => theme.accentColor};
  pointer-events: none;
`;
