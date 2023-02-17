import { useFormContext } from 'react-hook-form'
import { InputContainer, AddressContainer, OptionalInput } from './style'

const errorTranslation = {
    cep: 'CEP',
    street: 'Rua',
    number: 'Número',
    neighborhood: 'Bairro',
    city: 'Cidade',
    uf: 'UF'
}

export function Address(){
    const { register, watch, formState } =  useFormContext()
    
    const complement = watch('complement')

    const keysArray = Object.keys(formState.errors)
    const isErrorsEmpty = keysArray.length === 0 ? true : false

    return(
        <AddressContainer>
            {!isErrorsEmpty && 
            <>
                <p className='form-error'>Existem campos inválidos. Insira valores válidos para os seguites campos:.</p>                
                {keysArray.map(err => { 
                    const key = err as keyof typeof errorTranslation
                    return (<span className='form-error-input' key={err}>{errorTranslation[key]}</span>)
                } 
                )}
            </>}
            <InputContainer>
                <input type="text" placeholder="CEP" {...register('cep')}/>
            </InputContainer>
            <InputContainer>
                <input type="text" placeholder="Rua" {...register('street')}/>
            </InputContainer>
            <InputContainer>
                <input type="text" placeholder="Número" {...register('number')}/>
                <OptionalInput>
                    <input type="text" placeholder="Complemento" {...register('complement')}/>
                    {(!complement) && <p>Opcional</p>}
                </OptionalInput>
            </InputContainer>
            <InputContainer>
                <input type="text" placeholder="Bairro" {...register('neighborhood')}/>
                <input type="text" placeholder="Cidade" {...register('city')}/>
                <input type="text" placeholder="UF" {...register('uf')}/>
            </InputContainer>
        </AddressContainer>
    )
}