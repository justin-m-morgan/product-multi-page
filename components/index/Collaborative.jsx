import Image from 'next/image'
import styled from 'styled-components'
import TwoItem from '../layout/TwoItem'
import { HeadingXs, HeadingLg } from '../ui/Heading'
import TextBlock from '../ui/TextBlock'

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

const Management = () => (
  <TwoItem columns={2} gap="1rem" flip={true}>
    <Image
      src="/imgs/image_folder.svg"
      height="452"
      width="542"
      layout="responsive"
    />

    <CopyContainer>
      <HeadingLg as="h2">
        <Smallify>Optimized for</Smallify>
        Collaboration
      </HeadingLg>

      <TextBlock>
        Few would argue that, despite the advancements of feminism over the past
        three decades, women still face a double standard when it comes to their
        behavior.
      </TextBlock>
      <HeadingXs>Accessory Makers</HeadingXs>
      <TextBlock>
        While most people enjoy casino gambling, sports betting, lottery and
        bingo playing for the fun
      </TextBlock>
      <HeadingXs>Alterationists</HeadingXs>
      <TextBlock>
        If you are looking for a new way to promote your business that won’t
        cost you more money,
      </TextBlock>
    </CopyContainer>
  </TwoItem>
)

export default Management
