import styled from 'styled-components'
import { SolidButton } from '../ui/Button'
import Grid from '../ui/Grid'
import { HeadingLg, HeadingMd } from '../ui/Heading'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;
`

const PricingCard = styled.div`
  background-color: ${({ theme, featured }) =>
    featured ? theme.colors.green : theme.colors.white};
  color: ${({ theme, featured }) =>
    featured ? theme.colors.white : theme.colors.green};
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0rem;
  width: 100%;
  font-size: 0.9rem;
  text-align: center;
  border-radius: 4px;
  transform: ${({ featured }) => (featured ? 'scale(1.1)' : 'scale(1)')};
`

const PricingLevel = styled(HeadingMd)``

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
`
const Price = styled.span`
  color: ${({ theme, featured }) =>
    featured ? theme.colors.white : theme.colors.green};
  font-weight: 800;
  font-size: 3rem;
  line-height: 1;
`
const UnitLabel = styled.span`
  color: ${({ theme, featured }) =>
    featured ? theme.colors.grey_100 : theme.colors.grey_300};
  font-size: 0.7rem;
`

const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  padding-bottom: 1rem;
`

const Text = styled.p``

const Button = styled(SolidButton)`
  margin-top: auto;
  /* background-color: ${({ theme, featured }) =>
    featured ? theme.colors.white : theme.colors.green};
  color: ${({ theme, featured }) =>
    featured ? theme.colors.green : theme.colors.white}; */
`

const prices = [
  {
    level: 'Free',
    description: 'Get familiar',
    price: '0',
    unit: 'per month',
    features: ['Only 2 price', 'Notifications', 'Landing Pages'],
    featured: false,
  },
  {
    level: 'Standard',
    description: 'Best Seller',
    price: '5',
    unit: 'per month',
    features: ['5+ Operators', 'Notifications', 'Landing Pages'],
    featured: true,
  },
  {
    level: 'Premium',
    description: 'Full Meal Deal',
    price: '10',
    unit: 'per month',
    features: ['10+ Operators', 'Notifications'],
    featured: false,
  },
]

const Card = ({ level, description, price, unit, features, featured }) => (
  <PricingCard featured={featured}>
    <PricingLevel as="h4">{level}</PricingLevel>
    <Text>{description}</Text>
    <PriceContainer>
      <Price featured={featured}>${price}</Price>
      <UnitLabel featured={featured}>{unit}</UnitLabel>
    </PriceContainer>
    <FeatureList>
      {features.map((feature) => (
        <Text key={feature}>{feature}</Text>
      ))}
    </FeatureList>
    <Button inverted={featured} featured={featured}>
      Order Now
    </Button>
  </PricingCard>
)

const Pricing = () => (
  <Container>
    <HeadingLg as="h3">Price Table</HeadingLg>
    <Grid columns={3} gap="3rem">
      {prices.map((price) => (
        <Card key={price.level} {...price} />
      ))}
    </Grid>
  </Container>
)

export default Pricing
