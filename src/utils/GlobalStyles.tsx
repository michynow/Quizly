import { createGlobalStyle } from "styled-components";
interface Props {
  theme: any;
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
  background-color: ${({ theme }: Props) => theme.fontColorLight};
}
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
  color: ${({ theme }: Props) => theme.fontColorLight};
}
button {
  outline: none;
  border: none;
  color:white;
  font-size:1.75rem;
  font-weight:bold;
  max-width:15rem;
  border-radius:3px;
  padding:1rem 1.5rem;
  white-space:nowrap;
  cursor:pointer;
  position:relative;
  &:focus{
    outline: 5px auto rgba(0, 150, 255, 1);
  }
}
.container {
  max-width: 160rem;
  margin: 0 3.5rem;
}
#root {
  min-height: calc(100% - 7rem);
}
textarea,textarea::placeholder,input::placeholder{
  font-family:"Poppins", "sans-serif";
  font-size:1.4rem;
  resize:none;
}
textarea:focus,input:focus{
  outline:none;
}
`;
