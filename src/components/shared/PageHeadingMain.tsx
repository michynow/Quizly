import styled from 'styled-components';
interface Props{
    theme:any,
}
export const PageHeadingMain = styled.h1`
color:${({theme}:Props)=> theme.fontColorDark};
font-weight:600;
`