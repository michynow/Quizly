import styled from "styled-components";
interface InputTypeProps {
  type: string,
  placeholder?:string,
}
interface StylingProps{
    background?:string,
    onlyBorderBottom?:unknown,
    theme:any,
}
export const TextInput = styled.input.attrs<InputTypeProps>({
  type: "text",
  placeholder: "Title of the quiz",
})`
  border:${({theme,onlyBorderBottom}:StylingProps) => onlyBorderBottom ? 'none' : `1px solid ${theme.inputBorderColor}`};
  border-radius: ${({onlyBorderBottom,theme}:StylingProps) => onlyBorderBottom ?  '0px' : `${theme.inputBorderRadius}`};
  padding:1rem;
  background-color: ${({ background }: StylingProps) => background};
  border-bottom:${({ onlyBorderBottom, theme }: StylingProps) =>
    onlyBorderBottom ? `1px solid ${theme.inputBorderColor}}` : null}
  
`;
