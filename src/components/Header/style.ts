import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 2.5rem;
  }
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  span {
    background: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme['purple-dark']};
    border-radius: 6px;
    padding: 0.5rem;
    display: flex;
    align-items: center;

    svg {
      color: ${(props) => props.theme.purple};
    }
  }
`

export const Cart = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  padding: 0.5rem;
  border-radius: 6px;
  position: relative;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 100%;
    background-color: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme.white};
    font-weight: 700;
    position: absolute;
    top: calc(0px - 1.25rem / 2);
    right: calc(0px - 1.25rem / 2);
  }
`
