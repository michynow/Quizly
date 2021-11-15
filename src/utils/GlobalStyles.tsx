import { createGlobalStyle } from 'styled-components';
interface Props{
    theme:any,
}
export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  font-size: 10px;
  font-family: "Poppins", "sans-serif";
  font-weight: 400;
}
body {
  margin: 0;
  background-color: ${({ theme }: Props) => theme.themeColor5};
}
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
  color: ${({ theme }: Props) => theme.themeColor5};
}
button {
  outline: none;
  border: none;
}
.container {
  max-width: 160rem;
  margin: 0 3.5rem;
}
#root {
  min-height: calc(100% - 7rem);
}
input::placeholder{
  font-family:"Poppins", "sans-serif";
  font-size:1.4rem;
}
input:focus{
  outline:none;
}
`;