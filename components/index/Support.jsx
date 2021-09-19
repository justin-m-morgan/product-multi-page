import Image from 'next/image'
import styled from 'styled-components'
import TwoItem from '../layout/TwoItem'
import { HeadingXs, HeadingLg } from '../ui/Heading'
import TextBlock from '../ui/TextBlock'
import { theme } from '../../theme'
import IconBlob from '../ui/IconBlob'
import Checkmark from '../svg/Checkmark'

const CopyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
`

const Smallify = styled.span`
  display: block;
  font-size: 1rem;
`

const supportCopy = [
  [theme.colors.orange, 'Never worry about overpaying for your energy again. '],
  [
    theme.colors.purple,
    'We will only switch you to energy companies that we trust and will treat you right ',
  ],
  [
    theme.colors.blue,
    'We track the markets daily and know where the savings are.',
  ],
]

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const SupportItemContainer = styled.div`
  display: grid;
  grid-template-columns: 3rem 1fr;
  gap: 1rem;
`

const Support = () => (
  <TwoItem columns={2} gap="1rem" flip={false}>
    <Image
      src="/imgs/search_engines.svg"
      height="501"
      width="543"
      layout="responsive"
    />

    <CopyContainer>
      <HeadingLg as="h2">
        <Smallify>Easier decision making for</Smallify>
        Customer Support
      </HeadingLg>
      <FlexContainer>
        <TextBlock>
          The Myspace page defines the individual, his or her characteristics,
          traits, personal choices and the overall personality of the person.{' '}
        </TextBlock>
        {supportCopy.map(([color, copy]) => (
          <SupportItemContainer key={color}>
            <IconBlob color={color}>
              <Checkmark />
            </IconBlob>
            <TextBlock>{copy}</TextBlock>
          </SupportItemContainer>
        ))}
      </FlexContainer>
    </CopyContainer>
  </TwoItem>
)

export default Support
