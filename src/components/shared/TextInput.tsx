import styled from "styled-components";
interface InputTypeProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
  id: string;
  name: string;
}
interface StylingProps {
  background?: string;
  onlyBorderBottom?: unknown;
  theme: any;
  mWidth?: string;
}
export const TextInput = styled.input.attrs<InputTypeProps>(
  (props: InputTypeProps) => ({
    type: "text",
    placeholder: `${props.placeholder}`,
    id: `${props.id}`,
    name: `${props.name}`,
  })
)`
  border: ${({ theme }: StylingProps) =>
    `1px solid ${theme.inputBorderColor}`};
  border-radius: ${({ theme }: StylingProps) =>
    `${theme.inputBorderRadius}`};
  width: 100%;
  padding: 1rem;
  margin: 1rem 0;
  background-color: ${({ background }: StylingProps) => background};
  border-bottom: ${({ theme }: StylingProps) =>
    `1px solid ${theme.inputBorderColor}}`};
  transition: 0.3s ease;
  max-width: ${({ mWidth }: StylingProps) => mWidth || "100%"};
  &:focus {
    box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
  }
`;
