import styled from 'styled-components'

export const CartResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
    
    .empty-cart{
    margin-bottom: 1rem;
    color: ${(props) => props.theme['base-text']};
  }

  .card-divisor{
    width: 100%;
    padding: 1.5rem 0;

    hr{
      border: none;
      height: 1px;
      background: ${(props) => props.theme['base-button']};
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const CartDetails = styled.div`
  width: 23rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.25rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`


export const DetailsLine = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;


  p{
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
  }

  &:last-child{
    font-weight: 700;
    p{
      font-size: 1.25rem;
    }

    span{
      font-size: 1.25rem;
    }
  }
`