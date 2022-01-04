import styled from "styled-components";
interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor?: string;
  theme: any;
}
export const InputLabel = styled.label.attrs<
  HTMLLabelElement | LabelProps
>((props) => ({
  htmlFor: props.htmlFor,
}))`
  color: ${({ theme }: LabelProps) => theme.fontColorDark};
  line-height: 1.5;
  font-weight: 600;
  font-size: 1.5rem;
  margin-top: 1rem;
`;
