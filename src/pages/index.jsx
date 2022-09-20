import styled from 'styled-components';

const Heading = styled.h1`
  font-size: 50px;
  background-color: ${({ theme }) => theme.colors.red};
`;

export default function Home() {
  return <Heading>oi</Heading>;
}
