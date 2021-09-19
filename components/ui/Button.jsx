import styled from 'styled-components'

const Button = styled.button`
  padding: 0.5rem 1.6rem;
  border-radius: 4px;
  font-weight: 800;
`

const SolidButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
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
