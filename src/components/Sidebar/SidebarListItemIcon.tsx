import styled from "styled-components";
interface Props {
    theme:any,
    color?:string
}
export const SidebarListItemicon = styled.i`
  color: ${({ theme}:Props) => theme.themeColor5};
  font-size: 2rem;
  flex: 0 0 10%;
  display: flex;
  justify-content: center;
  margin-right: 1rem;
  &.icon-logout{
    color:${({theme}:Props) => theme.accentRed }
  }
`;