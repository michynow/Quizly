import styled from 'styled-components';
interface Props {
    theme:any,
}
export const LogoWrapper = styled.div`
        display:flex;
        align-items:center;
        font-size:2rem;
        color:${({theme}:Props)=>theme.fontColorLight};
        font-weight:800;
        text-shadow:2px 3px 5px rgba(25,11,7,0.2);
`