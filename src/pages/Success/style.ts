import styled from 'styled-components'

export const SuccessContainer = styled.div`
        width: 100%;
        max-width: 70rem;
        padding: 11.5rem 0 4rem 0;
        margin: 0 auto;
        
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        .no-order{
            font-family: 'Baloo 2';
            font-size: 1.5rem;
            color: ${(props) => props.theme['yellow-dark']};
        }
`

export const SuccessHead = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 2.5rem;

    h1{
        font-family: 'Baloo 2';
        font-weight: 800;
        font-size: 2rem;
        color: ${(props) => props.theme['yellow-dark']};
    }
    p{
        font-size: 1.25rem;
        color: ${(props) => props.theme['base-subtitle']};
    }
`

export const SuccessContent = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img{
        height: 18.875rem;
    }

    ul{
        width: 32.875rem;
        padding: 2.5rem;
        border: 1px solid ${(props) => props.theme.purple};
        border-radius: 6px 36px 6px 36px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        list-style-type: none;

        li{
            display: flex;
            align-items: flex-start;
            justify-content: center;
            margin-top: 2rem;

            span{
                border-radius: 100%;
                padding: 0.5rem;
                display: flex;
                align-items: center;
                justify-content: center;
                color: ${(props) => props.theme.background};
                margin-right: 0.75rem;
            }

            .deliver{
                background-color: ${(props) => props.theme.purple};
            }

            .estimate{
                background-color: ${(props) => props.theme.yellow}; 
            }

            .payment{
                background-color: ${(props) => props.theme['yellow-dark']}; 
            }
        
           &:first-child{
            margin-top: 0;
           }
        }
    }
`

