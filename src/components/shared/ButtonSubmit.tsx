import styled from "styled-components";
import "../../fontello/css/fontello.css";
interface Props {
  theme: any;
}
export const ButtonSubmit = styled.button`
  background-color: ${({ theme }: Props) => theme.accentColor};
  margin: 1rem 0 1rem auto;
  font-size: 1.4rem;
  transition: 0.3s background-color
    ${({ theme }: Props) => theme.buttonTransition};
  &:hover {
    background-color: ${({ theme }: Props) => theme.accentColorHover};
  }
`;
