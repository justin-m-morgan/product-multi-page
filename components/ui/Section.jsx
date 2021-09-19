import styled from 'styled-components'

const Section = styled.section`
  width: 100%;
  max-width: ${({ theme }) => theme.width.max_desktop};
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Component = ({ children }) => (
  <Container>
    <Section>{children}</Section>
  </Container>
)

export default Component
