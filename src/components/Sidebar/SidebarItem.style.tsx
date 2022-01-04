import styled from 'styled-components';
interface Props {
  theme: any;
  color?:any,
}
export const SidebarListItem = styled.li`
  border-bottom: 1px solid
    ${({ theme }: Props) => theme.secondaryColorHover};
  transition: 0.3s all ${({ theme }: Props) => theme.buttonTransition};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }: Props) => theme.secondaryColorHover};
  }
`;
export const SidebarListItemIcon = styled.i`
  color: ${({ theme }: Props) => theme.fontColorLight};
  font-size: 2rem;
  flex: 0 0 10%;
  display: flex;
  justify-content: center;
  margin-right: 1rem;
  &.icon-logout {
    color: ${({ theme }: Props) => theme.accentColor};
  }
`;