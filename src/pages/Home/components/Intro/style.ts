import styled from 'styled-components'
import background from '../../../../assets/background.svg'

export const IntroContaner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5.75rem calc((100vw - 70rem) / 2);
  background: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  img {
    height: 22.5rem;

    @media (max-width: 768px) {
      height: 16rem;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 5.75rem 1rem;
  }
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  strong {
    max-width: 36.75rem;
    font-family: 'Baloo 2';
    color: ${(props) => props.theme['base-title']};
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 2.25rem;
    }
  }

  p {
    max-width: 36.75rem;
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
    line-height: 130%;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`

export const Items = styled.div`
  margin-top: 4.125rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;

  @media screen {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
  }
`
export const Item = styled.div`
  color: ${(props) => props.theme['base-text']};
  line-height: 130%;
  font-size: 1rem;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }

  span {
    color: ${(props) => props.theme.background};
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    margin-right: 0.75rem;
  }

  &:nth-of-type(1) {
    span {
      background: ${(props) => props.theme['yellow-dark']};
    }
  }

  &:nth-of-type(2) {
    span {
      background: ${(props) => props.theme['base-text']};
    }
  }

  &:nth-of-type(3) {
    span {
      background: ${(props) => props.theme.yellow};
    }
  }

  &:nth-of-type(4) {
    span {
      background: ${(props) => props.theme.purple};
    }
  }
`
