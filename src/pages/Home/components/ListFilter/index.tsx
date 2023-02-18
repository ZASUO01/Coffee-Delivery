import { FilterContainer, FilterButton } from './style'
import { ProductTags } from '../../../../contexts/ProductsContext'

interface ListFilterProps {
    listFilter: ProductTags | 'ALL',
    handleChangeListFilter: (value: ProductTags) => void
}

export function ListFilter({listFilter, handleChangeListFilter}: ListFilterProps){
    
    function checkActiveFilter(value: ProductTags): boolean{
        if(listFilter === value) return true
        return false
    }

    return(
        <FilterContainer>
            <FilterButton 
                onClick={() => handleChangeListFilter('TRADICIONAL')}
                buttonActive={checkActiveFilter('TRADICIONAL')}
                >
                TRADICIONAL
            </FilterButton>
            <FilterButton
                onClick={() => handleChangeListFilter('ESPECIAL')}
                buttonActive={checkActiveFilter('ESPECIAL')}
                >
                ESPECIAL
            </FilterButton>
            <FilterButton
                onClick={() => handleChangeListFilter('COM LEITE')}
                buttonActive={checkActiveFilter('COM LEITE')}
                >
                COM LEITE
            </FilterButton>
            <FilterButton
                onClick={() => handleChangeListFilter('ALCOÓLICO')}
                buttonActive={checkActiveFilter('ALCOÓLICO')}
                >
                ALCOÓLICO
            </FilterButton>
            <FilterButton
                onClick={() => handleChangeListFilter('GELADO')}
                buttonActive={checkActiveFilter('GELADO')}
                >
                GELADO
            </FilterButton>
        </FilterContainer>
    )
}