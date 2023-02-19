import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  padding: 9rem 0 15rem 0;

  @media (max-width: 768px) {
    padding: 9rem 1rem 15rem 1rem;
  }

  form {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    button[type=submit]{
      width: 23rem;
      padding: 0.75rem 0.5rem;
      display: flex;
      justify-content: center;
      border-radius: 6px;
      border: 0;
      font-size: 0.875rem;
      color: ${(props) => props.theme.white};
      background: ${(props) => props.theme['yellow']};
      transition: 0.2s linear;
      cursor: pointer;

      :disabled{
        cursor: not-allowed;
      }

      :hover{
        background: ${(props) => props.theme['yellow-dark']};
      }

      @media (max-width: 768px) {
        width: 100%;
      }
    }
  
  
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }
`

export const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
     width: 100%;

     & + & {
      margin-top: 2rem;
     }
  }


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

  @media (max-width: 768px) {
      padding: 1.5rem;
      width: 100%;
  }

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