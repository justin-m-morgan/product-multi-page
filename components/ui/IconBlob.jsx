import styled from 'styled-components'

const IconBlob = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: ${({ color }) => color};
  border-radius: 40%;
  box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.3);
  padding: 0.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default IconBlob
