import { createGlobalStyle } from "styled-components";
import { Fonts, Variables } from "./index";

const GlobalStyle = createGlobalStyle`
${Fonts}

* {
    font-family: "Roboto";
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    -webkit-tap-highlight-color: transparent;
}

a {
    text-decoration: none;
}

li {
    list-style-type: none;
}

html {
    font-size: 10px;
}

body {
    overflow-x: hidden;
    position: relative;
    background-color: var(--light);
}


${Variables}

::-moz-selection { 
    color: var(--dark-purple);
    background: var(--purple);
}

::selection {
    color: var(--dark-purple);
    background: var(--purple);
}

::-webkit-scrollbar {
    width: 3px; 
}

::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.background.primary};
    border-radius: 10px;
}

::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.background.thirdly};
    border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
    background: #555;
}
img {
  user-select: none;
  pointer-events: none;
  -webkit-user-drag: none;
}

`;

export default GlobalStyle;
