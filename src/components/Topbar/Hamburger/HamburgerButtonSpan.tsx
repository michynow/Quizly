import styled from "styled-components";
interface Props {
    isOpen:any,
    theme:any,
}
export const HamburgerButtonSpan = styled.span`
  width: 2.5rem;
  background-color: ${(props:Props) => props.isOpen ? 'transparent' : props.theme.fontColorLight};
  border: none;
  height: 0.2rem;
  position: relative;
  transition: 0.2s ease-out;
  border-radius: 1rem;
  &::before,
  &::after {
    position: absolute;
    top: 50%;
    left:0;
    content: "";
    background-color: ${(props:Props) => props.theme.fontColorLight};
    width: 100%;
    height: 0.2rem;
    border-radius: 1rem;
  }
  &::before {
    transform: ${(props:Props) =>
      props.isOpen
        ? "rotate(-45deg)"
        : "translateY(-0.9rem);"};
    transition: 0.2s transform ease-out;
  }
  &::after {
     transform: ${(props:Props) =>
      props.isOpen
        ? "rotate(45deg)"
        : "translateY(0.7rem);"};
    transition: 0.2s transform ease-out;
  }
`;