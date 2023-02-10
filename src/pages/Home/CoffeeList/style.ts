import styled from 'styled-components'

export const ListContainer = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  padding-top: 2rem;
  padding-bottom: 9.875rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ListHead = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-weight: 800;
    line-height: 130%;
  }
`

export const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  button {
    padding: 0.375rem 0.75rem;
    border-radius: 100px;
    border: 1px solid ${(props) => props.theme.yellow};
    background: transparent;
    color: ${(props) => props.theme['yellow-dark']};
    font-weight: 700;
    line-height: 130%;
    font-size: 0.625rem;
    cursor: pointer;

    transition: 0.2s linear;

    &:hover {
      background: ${(props) => props.theme['yellow-light']};
    }
  }
`

export const ListContent = styled.div`
  width: 100%;
  margin-top: 3.375rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 2.5rem;
  column-gap: 2rem;
`
