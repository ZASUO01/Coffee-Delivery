import styled from 'styled-components'

export const BuyQty = styled.div`
  display: flex;
  align-items: center;
  width: 4.5rem;

  input {
    width: 1.5rem;
    height: 2.375rem;
    border: 0;
    background: ${(props) => props.theme['base-button']};
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
    text-align: center;
    :focus {
      outline: 0;
    }
  }

  button {
    cursor: pointer;
    width: 1.5rem;
    height: 2.375rem;
    border: 0;
    background-color: red;
    background: ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme.purple};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.1s linear;

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }

    &:first-child {
      border-radius: 6px 0 0 6px;
    }

    &:last-child {
      border-radius: 0 6px 6px 0;
    }
  }
`
