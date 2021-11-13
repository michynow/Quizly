import styled from "styled-components";
interface Props {
    theme:any,
}
export const SidebarListItem = styled.li`
  border-bottom: 1px solid ${({ theme }: Props) => theme.themeColor4Hover};
  transition: 0.3s all ${({ theme }: Props) => theme.buttonTransition};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor:pointer;
  &:hover {
    background-color: ${({ theme }: Props) => theme.themeColor4Hover};
  }
`;