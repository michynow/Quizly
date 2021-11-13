import styled from 'styled-components';
interface Props {
    theme:any,
}
export const TopbarHeader = styled.header`
  z-index: 20;
  width: 100%;
  position: relative;
  background-color: ${({theme}:Props)=>theme.themeColor1};
  padding: 1rem 3.5rem;
  height: 7rem;
  display:flex;
  align-items:center;
  justify-content: space-between;
`;