import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  align-items: ${(align) => (align ? align : 'start')};
  justify-items: ${(justify_items) =>
    justify_items ? justify_items : 'stretch'};
  gap: ${({ gap }) => gap || 0};
`

export default Grid
