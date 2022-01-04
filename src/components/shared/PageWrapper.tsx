import styled from "styled-components";
interface Props {
  theme: any;
}

export const PageWrapper = styled.div`
  padding: 2rem 3.5rem;
  max-width: 160rem;
  margin: 10.5rem 3.5rem 3.5rem;
  background-color: #fff;
  border-radius: 5px;
  font-size: 1.4rem;
`;
export const PageHeadingMain = styled.h1`
  color: ${({ theme }: Props) => theme.fontColorDark};
  font-weight: 600;
  font-size: 3rem;
  line-height: 4rem;
`;
export const PageHeadingMainCaption = styled.p`
  line-height: 2.1rem;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;
