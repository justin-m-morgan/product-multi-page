import styled from 'styled-components'
import Callout from '../shared/Callout'
import { SolidButton } from '../ui/Button'
import Image from 'next/image'
import Grid from '../ui/Grid'

const Container = styled.div`
  max-width: 55rem;
  padding-bottom: 5rem;
  margin: 0 auto;
`

const CopyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const CopyText = styled.p`
  font-size: 1.6rem;
  padding-bottom: 2rem;
`

const Component = () => (
  <Container>
    <Callout>
      <Grid columns={2}>
        <CopyContainer>
          <CopyText>
            Join over 100 companies who boost thier business with Product
          </CopyText>
          <SolidButton inverted={true}>Join Product</SolidButton>
        </CopyContainer>
        <Image src="/imgs/screen.svg" width="415" height="345" />
      </Grid>
    </Callout>
  </Container>
)

export default Component
