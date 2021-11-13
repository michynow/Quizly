import styled from "styled-components";
interface Props {
  open: Boolean;
  theme: any;
}
export const SidebarNav = styled.nav`
  height: 100vh;
  left: 0;
  background-color: ${({ theme }: Props) => theme.themeColor4};
  display: flex;
  flex-direction: column;
  max-width: 20%;
  width: 20%;
  min-width: 250px;
  @media (max-width: ${({ theme }: Props) => theme.widthTablet}) {
    transition: 0.5s all
      ${({ theme }: Props) => theme.sidebarTransition};
    position: absolute;
    left: 0;
    ${({ open }: Props) =>
      open
        ? `left:0;
            max-width:75%;
            width:75%;
            z-index:20;`
        : "left:-100%"};
  }
`;
