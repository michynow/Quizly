import styled from 'styled-components';
interface Props{
    theme:any,
}
export const DashboardPageHeadingMain = styled.h1`
color:${({theme}:Props)=> theme.fontColorDark}
`