import styled from 'styled-components'
import Grid from '../ui/Grid'
import TextBlock from '../ui/TextBlock'
import Image from 'next/image'
import { HeadingLg } from '../ui/Heading'

const Star = ({ filled }) => (
  <svg
    width="19"
    height="19"
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.321 6.58663C18.2633 6.41682 18.1572 6.26761 18.0157 6.15742C17.8743 6.04723 17.7036 5.98089 17.5248 5.96658L12.2957 5.55107L10.0329 0.542056C9.9608 0.380725 9.84359 0.243699 9.69537 0.147514C9.54715 0.0513295 9.37426 9.71158e-05 9.19757 1.37932e-07C9.02087 -9.684e-05 8.84793 0.0509458 8.6996 0.146968C8.55127 0.24299 8.43391 0.379887 8.36167 0.541138L6.09885 5.55107L0.869699 5.96658C0.694008 5.9805 0.526046 6.04474 0.385909 6.15161C0.245771 6.25849 0.139391 6.40348 0.0794956 6.56923C0.0196004 6.73498 0.00872605 6.91448 0.0481737 7.08625C0.0876213 7.25802 0.17572 7.41479 0.301931 7.5378L4.16624 11.3049L2.79956 17.2229C2.75806 17.402 2.77136 17.5895 2.83773 17.761C2.90411 17.9324 3.02049 18.08 3.17178 18.1845C3.32306 18.2891 3.50227 18.3457 3.68614 18.3471C3.87002 18.3485 4.05007 18.2946 4.20293 18.1924L9.19727 14.8628L14.1916 18.1924C14.3478 18.2961 14.5321 18.3495 14.7196 18.3454C14.9071 18.3413 15.0888 18.2799 15.2404 18.1694C15.3919 18.0589 15.506 17.9047 15.5672 17.7274C15.6285 17.5502 15.634 17.3584 15.5831 17.1779L13.9054 11.3076L18.066 7.56348C18.3384 7.31766 18.4384 6.93426 18.321 6.58663Z"
      fill={filled ? '#F3CD03' : 'none'}
      stroke="#F3CD03"
    />
  </svg>
)

const StarContainer = styled.div`
  display: flex;
  gap: 0.2rem;
`
const Rating = ({ rating }) => (
  <StarContainer>
    {[1, 2, 3, 4, 5].map((val) => (
      <Star key={val} filled={rating >= val} />
    ))}
  </StarContainer>
)

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`

const Card = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
const PersonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`
const PersonImage = styled.div`
  position: relative;
  height: 4rem;
  width: 4rem;
  border-radius: 100%;
  overflow: hidden;
  & img {
    width: 100%;
    object-fit: cover;
  }
`
const Name = styled.span`
  color: ${({ theme }) => theme.colors.green};
  font-weight: 800;
`

const Testimonial = ({
  testimonial: { rating, quote, name, img, width, height, title },
}) => (
  <Card>
    <Rating rating={rating} />
    <TextBlock>{quote}</TextBlock>
    <PersonContainer>
      <PersonImage>
        <Image src={img} width={width} height={height} />
      </PersonImage>
      <div>
        <Name>{name}</Name>
        <p>{title}</p>
      </div>
    </PersonContainer>
  </Card>
)

const testimonials = [
  {
    rating: 4,
    quote:
      'Non tempor commodo non ex reprehenderit veniam mollit culpa nulla voluptate proident nisi culpa nisi.',
    img: '/imgs/people/gemma-chua-tran-iCTcQqTXaCw-unsplash.jpg',
    width: 640,
    height: 851,
    name: 'Namey McNameface',
    title: 'Designer',
  },
  {
    rating: 5,
    quote:
      'Non tempor commodo non ex reprehenderit veniam mollit culpa nulla voluptate proident nisi culpa nisi.',
    img: '/imgs/people/sincerely-media-EQiIi9wdIQo-unsplash.jpg',
    width: 640,
    height: 960,
    name: 'Sally Shephard',
    title: 'Developer',
  },
  {
    rating: 4,
    quote:
      'Non tempor commodo non ex reprehenderit veniam mollit culpa nulla voluptate proident nisi culpa nisi.',
    img: '/imgs/people/vince-fleming-gD5YP0X4xWs-unsplash.jpg',
    width: 640,
    height: 800,
    name: 'John Jacob',
    title: 'Entrepreneur',
  },
]

const Testimonials = () => (
  <Container>
    <HeadingLg as="h2">What Clients Say About Us</HeadingLg>

    <Grid columns={3} gap="2rem">
      {testimonials.map((testimonial) => (
        <Testimonial key={testimonial.name} testimonial={testimonial} />
      ))}
    </Grid>
  </Container>
)

export default Testimonials
