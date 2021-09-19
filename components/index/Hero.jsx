import Image from 'next/image'
import TextBlock from '../ui/TextBlock'
import { HeadingXl } from '../ui/Heading'
import { SolidButton, GhostButton } from '../ui/Button'
import TwoItem from '../layout/TwoItem'
import PlayButton from '../svg/PlayButton'
import styled from 'styled-components'

const CopyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding-top: 2rem;
`
const PlayButtonContentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.55rem;
`

const Hero = () => (
  <TwoItem>
    <CopyContainer>
      <HeadingXl as="h2">Work at the speed of thought</HeadingXl>
      <TextBlock>
        Tools, tutorials, design and innovation experts, all in one place! The
        most intuitive way to imagine your next user experience.
      </TextBlock>
      <ButtonContainer>
        <SolidButton>Get Started</SolidButton>
        <GhostButton>
          <PlayButtonContentContainer>
            <PlayButton />
            Watch the Video
          </PlayButtonContentContainer>
        </GhostButton>
      </ButtonContainer>
    </CopyContainer>

    <Image
      src="/imgs/social_media.svg"
      alt="Social Media"
      layout="responsive"
      width="600"
      height="556"
    />
  </TwoItem>
)

export default Hero
