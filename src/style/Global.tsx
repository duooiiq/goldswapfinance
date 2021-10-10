import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap/uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital@1&display=swap');
  * {
    font-family: 'Anonymous Pro', monospace;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
   .KBVhn {
    background-color: #8C0010;
  }
.bKajnB {
 display: none;
  }
.ewoRti {
display: none;
}
.jcNvwq {
display: none;
}
.khoyTI {
background-image: linear-gradient(45deg, gold, purple, blue, yellow);
}
. divtospace {
height: 58px;
}
.eOHJkb {
vertical-align: top;
display: flex;
  align-items: center;
  justify-content: center;
}
}
  }
`

export default GlobalStyle
