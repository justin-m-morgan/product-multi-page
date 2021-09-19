import styled from 'styled-components'

const Nav = styled.nav`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  max-width: ${({ theme }) => theme.width.max_desktop};

  & > ul {
    list-style: none;
    display: flex;
  }
`

export default Nav
