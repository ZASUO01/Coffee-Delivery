import styled from 'styled-components'

export const CardComponent = styled.div`
    width: 23rem;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 0.5rem 0.25rem;

    span{
        line-height: 130%;
        color: ${(props) => props.theme['base-text']};
        font-weight: 700;
    }
`

export const Info = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 1.25rem;

    img{
        height: 4rem;
    }
`

export const Details = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    p{
        color: ${(props) => props.theme['base-subtitle']};
        line-height: 130%;
        margin-bottom: 0.5rem;
    }
`

export const Actions = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    .btn{
        border: 0;
        border-radius: 6px;
        padding: 0.5rem;
        display:  flex;
        align-items: center;
        cursor: pointer;
        font-size: 0.75rem;
        background: ${(props) => props.theme['base-button']};
        transition: 0.2s linear;
    
        svg{
            color: ${(props) => props.theme.purple};
            margin-right: 0.5rem;
        }
    

        &:hover{
            background: ${(props) => props.theme['base-hover']};
        }
    }

    
`
