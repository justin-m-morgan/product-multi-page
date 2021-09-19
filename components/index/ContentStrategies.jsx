import styled from 'styled-components'
import Grid from '../ui/Grid'
import Image from 'next/image'
import { HeadingLg } from '../ui/Heading'

import { theme } from '../../theme'

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

const PaginationNavigation = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding-top: 1rem;
`

const PaginationDot = ({ active }) => (
  <svg
    height="8px"
    width="8px"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    fill={active ? theme.colors.green : theme.colors.grey_100}
  >
    <circle cx="50" cy="50" r="50" />
  </svg>
)

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
]

const ContentStrategies = ({ theme }) => (
  <Container>
    <HeadingLg as="h3">Content Strategies</HeadingLg>
    <Byline>
      We focus on ergonomics and meeting you where you work. It's only a
      keystroke away.{' '}
    </Byline>
    <Grid columns={3} gap="1rem">
      {contentStrategies.map((strategy) => (
        <ContentStrategy key={strategy.img}>
          <ContentStrategyImage>
            <Image
              src={strategy.img}
              width={strategy.width}
              height={strategy.height}
            />
          </ContentStrategyImage>
          <CopyContainer>
            <ContentStrategyDetails>
              By{' '}
              <ContentStrategyAuthor>{strategy.author}</ContentStrategyAuthor> |{' '}
              {strategy.date}
            </ContentStrategyDetails>
            <ContentStrategyHeadline className="headline">
              {strategy.link_label}
            </ContentStrategyHeadline>
          </CopyContainer>
        </ContentStrategy>
      ))}
    </Grid>
    <PaginationNavigation>
      <PaginationDot active={true} />
      <PaginationDot />
      <PaginationDot />
    </PaginationNavigation>
  </Container>
)

export default ContentStrategies
