import styled from 'styled-components';
interface Props {
    theme:any,
}
export const MainContent = styled.main`
  max-width: 80%;
  width: 80%;
  overflow: auto;
  margin-left: auto;
  @media (max-width: ${({ theme }: Props) => theme.widthTablet}) {
    width: 100%;
    max-width: 100%;
  }
`;