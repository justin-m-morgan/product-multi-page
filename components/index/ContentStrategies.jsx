import styled from 'styled-components'
import Paginator from '../ui/Paginator'
import Image from 'next/image'
import { HeadingLg } from '../ui/Heading'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
const Byline = styled.p`
  font-size: 0.8rem;
`

const ContentStrategy = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  &:hover .headline {
    color: ${({ theme }) => theme.colors.green};
  }
`
const CopyContainer = styled.div`
  padding: 1rem;
`

const ContentStrategyImage = styled.div`
  & img {
    height: 250px;
    width: 100%;
    object-fit: cover;
  }
`
const ContentStrategyDetails = styled.p`
  font-size: 0.8rem;
`
const ContentStrategyAuthor = styled.span`
  font-weight: bold;
`

const ContentStrategyHeadline = styled.h4`
  font-size: 1.2rem;
  font-weight: 800;
`

const contentStrategies = [
  {
    img: '/imgs/stock/andrea-cau-nV7GJmSq3zc-unsplash.jpg',
    height: 427,
    width: 640,
    author: 'Wahid Ari',
    date: '03 March 2020',
    link_label: 'Increasing prosperity with positive thinking',
    link_url: '',
  },
  {
    img: '/imgs/stock/artur-tumasjan-KZSNMN4VxR8-unsplash.jpg',
    height: 433,
    width: 640,
    author: 'Jan Abigale',
    date: '12 December 2019',
    link_label: 'Motivation is the first step to success',
    link_url: '',
  },
  {
    img: '/imgs/stock/christin-hume-mfB1B1s4sMc-unsplash.jpg',
    height: 427,
    width: 640,
    author: 'Christina Chancelor',
    date: '10 Septemeber 2021',
    link_label: 'Success steps for your personal or business',
    link_url: '',
  },
  {
    img: '/imgs/stock/christin-hume-mfB1B1s4sMc-unsplash.jpg',
    height: 427,
    width: 640,
    author: 'Christina Chancelor',
    date: '10 Septemeber 2021',
    link_label: 'Success steps for your personal or business',
    link_url: '',
  },
  {
    img: '/imgs/stock/andrea-cau-nV7GJmSq3zc-unsplash.jpg',
    height: 427,
    width: 640,
    author: 'Wahid Ari',
    date: '03 March 2020',
    link_label: 'Increasing prosperity with positive thinking',
    link_url: '',
  },
  {
    img: '/imgs/stock/artur-tumasjan-KZSNMN4VxR8-unsplash.jpg',
    height: 433,
    width: 640,
    author: 'Jan Abigale',
    date: '12 December 2019',
    link_label: 'Motivation is the first step to success',
    link_url: '',
  },

  {
    img: '/imgs/stock/artur-tumasjan-KZSNMN4VxR8-unsplash.jpg',
    height: 433,
    width: 640,
    author: 'Jan Abigale',
    date: '12 December 2019',
    link_label: 'Motivation is the first step to success',
    link_url: '',
  },
  {
    img: '/imgs/stock/andrea-cau-nV7GJmSq3zc-unsplash.jpg',
    height: 427,
    width: 640,
    author: 'Wahid Ari',
    date: '03 March 2020',
    link_label: 'Increasing prosperity with positive thinking',
    link_url: '',
  },
  {
    img: '/imgs/stock/christin-hume-mfB1B1s4sMc-unsplash.jpg',
    height: 427,
    width: 640,
    author: 'Christina Chancelor',
    date: '10 Septemeber 2021',
    link_label: 'Success steps for your personal or business',
    link_url: '',
  },
]

const Strategy = ({ img, width, height, author, date, link_label }) => (
  <ContentStrategy>
    <ContentStrategyImage>
      <Image src={img} width={width} height={height} />
    </ContentStrategyImage>
    <CopyContainer>
      <ContentStrategyDetails>
        By <ContentStrategyAuthor>{author}</ContentStrategyAuthor> | {date}
      </ContentStrategyDetails>
      <ContentStrategyHeadline className="headline">
        {link_label}
      </ContentStrategyHeadline>
    </CopyContainer>
  </ContentStrategy>
)

const ContentStrategies = (props) => (
  <Container>
    <HeadingLg as="h3">Content Strategies</HeadingLg>
    <Byline>
      We focus on ergonomics and meeting you where you work. It's only a
      keystroke away.{' '}
    </Byline>

    <Paginator content={contentStrategies} Component={Strategy} />
  </Container>
)

export default ContentStrategies
