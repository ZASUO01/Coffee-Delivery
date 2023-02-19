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

  @media (max-width: 768px) {
    padding: 2rem 1rem 9.875rem 1rem;
  }
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

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const ListContent = styled.div`
  width: 100%;
  margin-top: 3.375rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 2.5rem;
  column-gap: 2rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
