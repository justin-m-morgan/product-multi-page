import styled from 'styled-components'
import Grid from '../ui/Grid'
import { HeadingMd } from '../ui/Heading'
import TextBlock from '../ui/TextBlock'
import { SolidButton } from '../ui/Button'
import IconBlob from '../ui/IconBlob'
import { theme } from '../../theme'

const features = [
  [
    theme.colors.orange,
    'First Click Tests',
    'While most people enjoy casino gambling,',
  ],
  [
    theme.colors.purple,
    'Design Surveys',
    'Sports betting, lottery and bingo playing for the fun',
  ],
  [
    theme.colors.blue,
    'Preference Tests',
    'The Myspace page defines the individual.',
  ],
  [
    theme.colors.green,
    'Five second tests',
    'Personal choices and the overall personality of the person. ',
  ],
]

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`

const FeatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const BackgroundGradient = styled.div`
  padding-bottom: 6rem;
  background-size: cover;
  background-image: url('./imgs/curved_gradient.svg');
  background-position: center bottom;
  background-repeat: no-repeat;
`

const Features = () => (
  <Container>
    <Grid columns={4} gap="0.8rem">
      {features.map(([iconColor, headline, text]) => (
        <FeatureContainer key={headline}>
          <IconBlob color={iconColor} />
          <HeadingMd as="h3">{headline}</HeadingMd>
          <TextBlock>{text}</TextBlock>
        </FeatureContainer>
      ))}
    </Grid>
    <SolidButton>SIGN UP NOW</SolidButton>
  </Container>
)

export { Features, BackgroundGradient }
