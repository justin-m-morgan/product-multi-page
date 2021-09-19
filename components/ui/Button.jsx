import styled from 'styled-components'


const Button = styled.button`
  padding: 0.8rem 1.6rem;
  border-radius: 4px;
  font-weight: 800;
`

const SolidButton = styled(Button)`
  background-color: ${({ theme, inverted }) =>
    inverted ? theme.colors.white : theme.colors.green};
  color: ${({ theme, inverted }) =>
    inverted ? theme.colors.green : theme.colors.white};
  box-shadow: 3px 3px 5px
    ${({ inverted }) =>
      inverted ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.3)'};
`

const OutlineButton = styled(Button)`
  border: 2px solid ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.green};
`

const GhostButton = styled(Button)`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.green};
`

const RoundButton = styled.button`
  height: 24px;
  width: 24px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export { GhostButton, OutlineButton, RoundButton, SolidButton }
