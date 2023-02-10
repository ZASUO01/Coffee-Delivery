import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  padding: 2.5rem 0 15rem 0;

  form {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
`

export const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 130%;
    margin-bottom: 1rem;
  }
`

export const FormCard = styled.div`
  max-width: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  padding: 2.5rem;

  & + & {
    margin-top: 0.75rem;
  }
`

const HEAD_COLORS = {
  purple: 'purple',
  yellow: 'yellow-dark',
} as const

interface HeadProps {
  iconColor: keyof typeof HEAD_COLORS
}

export const FormCardHead = styled.div<HeadProps>`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 2rem;

  svg {
    color: ${(props) => props.theme[HEAD_COLORS[props.iconColor]]};
    margin-right: 0.5rem;
  }

  strong {
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    line-height: 130%;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
  }
`
export const Address = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 1rem;

  &:first-child {
    margin-top: 0;
  }

  input {
    height: 2.625rem;
    border-radius: 4px;
    background: ${(props) => props.theme['base-input']};
    border: 0;
    padding: 0.75rem;
    color: ${(props) => props.theme['base-label']};
    font-size: 0.875rem;
    width: 12.5rem;
  }

  & input[name='street'] {
    width: 35rem;
  }

  & input[name='complement'] {
    width: 21.75rem;
  }

  & input[name='city'] {
    width: 17.25rem;
  }

  & input[name='uf'] {
    width: 3.75rem;
  }
`

export const PaymentOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  button {
    width: calc(33.5rem / 3);
    border: 0;
    height: 3.125rem;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 1rem;

    font-size: 0.75rem;
    color: ${(props) => props.theme['base-text']};

    svg {
      color: ${(props) => props.theme.purple};
      margin-right: 1rem;
    }
  }
`
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
