import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 100%;
  max-width: 16rem;
  border-radius: 6px 36px 6px 36px;
  background: ${(props) => props.theme['base-card']};
  position: relative;
  padding: 6.75rem 1rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    width: 7.5rem;
    height: 7.5rem;
    position: absolute;
    left: calc(50% - 3.75rem);
    top: -1.5rem;
  }

  strong {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 0.5rem;
  }

  p {
    color: ${(props) => props.theme['base-label']};
    line-height: 130%;
    font-size: 0.875rem;
    margin-bottom: 2rem;
  }
`

export const CardTags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  span {
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    font-weight: 700;
    line-height: 130%;
    font-size: 0.625rem;
    margin-bottom: 1rem;
  }
`

export const CardBuy = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    color: ${(props) => props.theme['base-text']};
    font-size: 1.5rem;
    font-weight: 800;
    font-family: 'Baloo 2';
    line-height: 130%;
    margin-bottom: 0;

    span {
      font-weight: 400;
      font-family: 'Roboto';
      font-size: 0.875rem;
      margin-right: 0.25rem;
      line-height: 130%;
    }
  }

  form {
    display: flex;
    gap: 0.5rem;

    button[type='submit'] {
      cursor: pointer;
      width: 2.375rem;
      height: 2.375rem;
      border: 0;
      background: ${(props) => props.theme['purple-dark']};
      border-radius: 6px;
      color: ${(props) => props.theme['base-card']};
      transition: 0.1s linear;

      &:hover {
        background: ${(props) => props.theme.purple};
      }
    }
  }
`
