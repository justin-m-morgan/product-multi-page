import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Poppins, Futura, 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }

    *, *::before, *::after {
      box-sizing: border-box;
    }

    a {
      text-decoration: none;
    }

    button {
      border: none;
    }
`

export const theme = {
  width: {
    max_desktop: '62.5rem',
  },
  colors: {
    primary: '#02897A',
    green: '#02897A',
    blue: '#4D8DFF',
    purple: '#740A76',
    orange: '#F03E3D',
    black: '#22343D',
    white: '#FFFFFF',
    grey_900: '#1F2E35',
    grey_600: '#30444E',
    grey_300: '#475E69',
    grey_100: '#E4E9F3',
  },
}
