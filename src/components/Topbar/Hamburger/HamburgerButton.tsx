import styled from "styled-components";
interface Props {
  theme:any,
}
export const HamburgerButton = styled.button`
  width: 5rem;
  height: 100%;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  cursor: pointer;
  @media (min-width: ${({ theme }: Props) => theme.widthTablet}) {
    display:none;
  } ;
`;