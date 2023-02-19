import styled from 'styled-components'

export const PaymentOptionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  @media (max-width: 768px) {
    flex-direction: column ;
    width: 100%;
  }
`
interface PaymentButtonProps {
  active: boolean
}

export const PaymentButton = styled.button<PaymentButtonProps>`
  width: calc(33.5rem / 3);
  height: 3.125rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem;
  font-size: 0.75rem;
  color: ${(props) => props.theme['base-text']};
  cursor: pointer;
  transition: 0.2s linear;
  background: ${(props) => props.theme['base-button'] };
  border: 0;

  @media (max-width: 768px) {
    width: 100%;
  }

  svg {
    color: ${(props) => props.theme.purple};
    margin-right: 1rem;
  }

  &:hover{
    background: ${(props) => props.theme['base-hover'] };
  }

  ${(props) => {
    if(props.active){
      return `outline: 1px solid ${props.theme.purple};`
    }else{
      return `outline: none;`
    }
  }}

`