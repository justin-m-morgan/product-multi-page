import styled from 'styled-components'

const Container = styled.div`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.green};
  padding: 1rem;
`

const Callout = ({ children }) => <Container>{children}</Container>

export default Callout
