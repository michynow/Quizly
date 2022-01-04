import styled from "styled-components";
interface InputTypeProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder?: string;
  id: string;
  name: string;
  rows?: number;
  cols?: number;
  onChange?: any;
}
interface StylingProps {
  background?: string;
  onlyBorderBottom?: unknown;
  theme: any;
  mWidth?: string;
  onChange?: any;
}
export const Textarea = styled.textarea.attrs<InputTypeProps>(
  (props: InputTypeProps) => ({
    type: "text",
    placeholder: `Add question no. ${props.id}`,
    id: `${props.id}`,
    name: `${props.name}`,
  })
)`
  border: ${({ theme }: StylingProps) =>
    `1px solid ${theme.inputBorderColor}`};
  border-radius: ${({ theme }: StylingProps) =>
    `${theme.inputBorderRadius}`};
  padding: 1rem;
  margin: 1rem 0;
  background-color: ${({ background }: StylingProps) => background};
  border-bottom: ${({ theme }: StylingProps) =>
    `1px solid ${theme.inputBorderColor}}`};
  transition: 0.3s ease;
  min-height: 20rem;
  width: ${({ mWidth }: StylingProps) => mWidth || "100%"};
  &:focus {
    /* border: ${({ theme }: StylingProps) =>
      `1px solid ${theme.fontColorDark}`}; */
    box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
  }
`;
