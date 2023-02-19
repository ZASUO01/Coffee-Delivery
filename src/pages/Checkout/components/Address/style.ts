import styled from 'styled-components'

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .form-error{
    font-size: 0.75rem;
    color: red;
  }

  .form-error-input{
    font-size: 0.75rem;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 1rem;

  &:first-child {
    margin-top: 0;
  }

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }

  input {
    height: 2.625rem;
    border-radius: 4px;
    background: ${(props) => props.theme['base-input']};
    border: 0;
    padding: 0.75rem;
    color: ${(props) => props.theme['base-label']};
    font-size: 0.875rem;
    width: 12.5rem;
  
    &:focus{
    outline: 1px solid ${(props) => props.theme['yellow-dark']};
    }
  }

  & input[name='street'] {
    width: 35rem;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  & input[name='complement'] {
    width: 21.75rem;
  
    @media (max-width: 768px) {
      width: 100%;
    }
  }

  & input[name='city'] {
    width: 17.25rem;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  & input[name='uf'] {
    width: 3.75rem;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    input[name='cep'], input[name='number'], input[name='neighborhood'] {
      width: 100%;
    }   
  }
`

export const OptionalInput = styled.div`
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
  }

  p{
    position: absolute;
    right: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: 0.75rem;
    font-style: italic;
    color: ${(props) => props.theme['base-label']};
  }
`
