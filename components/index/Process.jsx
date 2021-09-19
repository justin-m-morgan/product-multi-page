import styled from 'styled-components'
import Image from 'next/image'
import { HeadingLg } from '../ui/Heading'
import TextBlock from '../ui/TextBlock'
import Grid from '../ui/Grid'

const RotatedBackgroundGradient = styled.div`
  padding-top: 6rem;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    top: 0;
    z-index: -1;
    background-size: cover;
    background-image: url('./imgs/curved_gradient.svg');
    background-position: center bottom;
    background-repeat: no-repeat;
    transform: rotate(180deg);
  }
`
const CopyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
`

const Text = styled(TextBlock)`
  max-width: 55ch;
`

const PersonCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 2rem 3rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
`

const PersonImage = styled.div`
  position: relative;
  height: 4rem;
  width: 4rem;
  border-radius: 100%;
  border: ${({ theme }) => theme.colors.green} 3px solid;
  overflow: hidden;
  & img {
    width: 100%;
    object-fit: cover;
  }
`

const PersonDetails = styled.div`
  text-align: left;
`

const PersonName = styled.p`
  font-weight: 800;
  font-size: 1.1rem;
`

const PersonPosition = styled.p`
  font-weight: 500;
  font-size: 0.8rem;
`

const person_image_1 = 'gemma-chua-tran-iCTcQqTXaCw-unsplash.jpg'
const person_image_2 = 'good-faces-AHoHjNqME4Q-unsplash-2.jpg'
const person_image_3 = 'sincerely-media-EQiIi9wdIQo-unsplash.jpg'
const person_image_4 = 'vince-fleming-gD5YP0X4xWs-unsplash.jpg'

const people = [
  { img_url: person_image_1, name: 'Asmir', position: 'Graphic Designer' },
  {
    img_url: person_image_2,
    name: 'Johanna',
    position: 'Development Team Lead',
  },
  { img_url: person_image_3, name: 'Alex', position: 'Marketing Guru' },
  { img_url: person_image_4, name: 'Steve', position: 'UI/UX Architect' },
]

const Process = () => (
  <>
    <CopyContainer>
      <HeadingLg>Quick & Easy Process</HeadingLg>
      <Text>
        Do you require some help for your project: Conception workshop,
        prototyping, marketing strategy, landing page, Ux/UI?
      </Text>
      <Grid columns={2} gap="1rem">
        {people.map(({ img_url, name, position }) => (
          <PersonCard key={img_url}>
            <PersonImage>
              <Image width="200" height="200" src={`/imgs/people/${img_url}`} />
            </PersonImage>
            <PersonDetails>
              <PersonName>{name}</PersonName>
              <PersonPosition>{position}</PersonPosition>
            </PersonDetails>
          </PersonCard>
        ))}
      </Grid>
    </CopyContainer>
  </>
)

export { RotatedBackgroundGradient, Process }
