import styled from 'styled-components'
import { splitEvery } from 'ramda'
import Grid from './Grid'
import { theme } from '../../theme'
import { useState } from 'react'

const Container = styled.div`
  overflow: hidden;
  display: grid;
  & > * {
    grid-column: 1;
    grid-row: 1;
  }
`
const PaginationNavigation = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding-top: 1rem;
`
const PaginationDot = ({ active }) => (
  <svg
    height="8px"
    width="8px"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    fill={active ? theme.colors.green : theme.colors.grey_100}
  >
    <circle cx="50" cy="50" r="50" />
  </svg>
)

const ShowOnlyCurrent = styled.div`
  opacity: ${opacityByIndex};
  transform: translateX(${moveByIndex});
  transition: all 1000ms ease-in-out;
`
const PaginationButton = styled.button`
  background: none;
  cursor: pointer;
`

const Paginator = ({ content, Component }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  let numberOfPages = Math.ceil(content.length / 3)
  return (
    <>
      <Container>
        {splitEvery(3, content).map((itemGroup, index) => (
          <ShowOnlyCurrent
            key={index}
            index={index}
            currentIndex={currentIndex}
          >
            <Grid columns={3} gap="2rem">
              {itemGroup.map((item) => (
                <Component {...item} />
              ))}
            </Grid>
          </ShowOnlyCurrent>
        ))}
      </Container>
      <PaginationNavigation>
        {createArrayLength(numberOfPages).map((_v, index) => (
          <PaginationButton onClick={() => setCurrentIndex(index)}>
            <PaginationDot active={index == currentIndex} />
          </PaginationButton>
        ))}
      </PaginationNavigation>
    </>
  )
}

function moveByIndex({ index, currentIndex }) {
  if (index < currentIndex) {
    return '-150%'
  } else if (index > currentIndex) {
    return '150%'
  } else return 0
}

function opacityByIndex({ index, currentIndex }) {
  return index == currentIndex ? 1 : 0
}

function createArrayLength(n) {
  return Array(Math.ceil(n)).fill(true)
}

export default Paginator
