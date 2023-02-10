import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: ${(props) => props.theme.background};
        color: ${(props) => props.theme['base-text']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
    

    input[type=number]{
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;
    
        &::-webkit-inner-spin-button{
            -webkit-appearance: none;
            margin: 0;
        }

        &::-webkit-outer-spin-button{
            -webkit-appearance: none;
            margin: 0;
        }
    }
`
