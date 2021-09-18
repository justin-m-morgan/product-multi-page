import styled from 'styled-components'
import Logo from '../svg/Logo'
import ThemeSwitcher from '../svg/ThemeSwitcher'
import { OutlineButton, RoundButton, SolidButton } from '../ui/Button'
import GenericNav from '../ui/Nav'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

const Header = styled.header`
  display: flex;
  justify-content: center;
  padding: 1.5rem 0;
`

const Nav = styled(GenericNav)`
  & > ul {
    gap: 1.4rem;
  }
`

const BrandName = styled.h1`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
`

const Link = styled.a`
  color: ${({ theme }) => theme.colors.grey_600};
`
const CurrentLink = styled.a`
  color: ${({ theme }) => theme.colors.grey_600};
  font-weight: bold;
`

const BrandLink = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const routes = [
  ['/', 'Product'],
  ['/customers', 'Customers'],
  ['/pricing', 'Pricing'],
  ['/resources', 'Resources'],
]

const Component = () => {
  const router = useRouter()

  return (
    <Header>
      <Nav>
        <BrandLink href="/">
          <Logo />
          <BrandName>Product</BrandName>
        </BrandLink>
        <ul>
          {routes.map(([href, text]) => (
            <MaybeCurrentRoute
              key={href}
              currentPath={router.asPath}
              href={href}
              text={text}
            />
          ))}
          <li>
            <NextLink href="/sign-in">
              <OutlineButton as="a">Sign In</OutlineButton>
            </NextLink>
          </li>
          <li>
            <NextLink href="/sign-up">
              <SolidButton as="a">Sign Up</SolidButton>
            </NextLink>
          </li>
          <li>
            <RoundButton aria-label="Toggle Theme">
              <ThemeSwitcher />
            </RoundButton>
          </li>
        </ul>
      </Nav>
    </Header>
  )
}

const MaybeCurrentRoute = (props) => {
  const { currentPath, href, text } = props
  const isCurrent = href == currentPath
  return (
    <li key={href}>
      <NextLink {...props} passHref>
        {isCurrent ? <CurrentLink>{text}</CurrentLink> : <Link>{text}</Link>}
      </NextLink>
    </li>
  )
}

export default Component
