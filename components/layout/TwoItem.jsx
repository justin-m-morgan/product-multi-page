import styled from 'styled-components'
import Grid from '../ui/Grid'

const FlippyGrid = styled(Grid)`
  grid-auto-flow: dense;
  & > *:first-child {
    grid-column: ${({ flip }) => (flip ? 2 : 1)};
  }
`

const TwoItem = ({ children, flip }) => (
  <FlippyGrid columns={2} gap="3rem" flip={flip}>
    {children}
  </FlippyGrid>
)

export default TwoItem
