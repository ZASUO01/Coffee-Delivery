import styled from 'styled-components'

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`

interface FilterButtonProps {
  buttonActive: boolean
}

export const FilterButton = styled.button<FilterButtonProps>`
  padding: 0.375rem 0.75rem;
    border-radius: 100px;
    
    color: ${(props) => props.theme['yellow-dark']};
    font-weight: 700;
    line-height: 130%;
    font-size: 0.625rem;
    cursor: pointer;
    transition: 0.2s linear;

    ${(props) => {
      if(props.buttonActive){
        return `background: ${props.theme['yellow-light']};
                border: 0;`
      }else{
        return `background: transparent;
                border: 1px solid ${props.theme.yellow};`
      }
    }}
`