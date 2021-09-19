import styled from 'styled-components'
import Logo from '../svg/Logo'
import { OutlineButton, RoundButton, SolidButton } from '../ui/Button'
import GenericNav from '../ui/Nav'
import NextLink from 'next/link'
import { Twitter, Instagram, Facebook } from '../svg/SocialIcons'

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 1.5rem 0;
`

const Nav = styled(GenericNav)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: flex-start;
  & > ul {
    display: flex;
  }
`

const BrandName = styled.h2`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
`

const Link = styled.a`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.grey_600};
`

const BrandLink = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-bottom: 0.8rem;
`

const LinkSubListHeading = styled.h3`
  font-weight: normal;
  font-size: 1.3rem;
`

const LinkSubList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-self: flex-start;
  gap: 0.4rem;
`

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
`

const resourceRoutes = [
  ['/about', 'About Us'],
  ['/blog', 'Blog'],
  ['/contact', 'Contact'],
  ['/faq', 'FAQ'],
]

const legalRoutes = [
  ['/disclaimer', 'Disclaimer'],
  ['/financing', 'Financing'],
  ['/privacy', 'Privacy Policy'],
  ['/terms', 'Terms of Service'],
]

const Component = () => (
  <Footer>
    <Nav>
      <div>
        <BrandLink href="/">
          <Logo />
          <BrandName>Product</BrandName>
        </BrandLink>
        <SocialIcons>
          <Twitter />
          <Instagram />
          <Facebook />
        </SocialIcons>
      </div>

      <SubList heading="Resources" routes={resourceRoutes} />
      <SubList heading="Legal Stuff" routes={legalRoutes} />

      <SubscribeForm />
    </Nav>
  </Footer>
)

const FormCopy = styled.p`
  padding-bottom: 0.5rem;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: center;
`

const PhoneInput = styled.input`
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.grey_100};
`

const SubscribeForm = () => (
  <Form>
    <FormCopy>
      Sign up for our newsletter to be sure you don't miss out.
    </FormCopy>
    <PhoneInput type="phone" placeholder="Enter your phone number" />
    <NextLink href="/sign-up">
      <SolidButton as="a">Sign Up Now</SolidButton>
    </NextLink>
  </Form>
)

const SubList = ({ heading, routes }) => (
  <LinkSubList>
    <li>
      <LinkSubListHeading>{heading}</LinkSubListHeading>
    </li>
    {routes.map(([href, text]) => (
      <NextLink href={href} key={href}>
        <Link>{text}</Link>
      </NextLink>
    ))}
  </LinkSubList>
)

export default Component
