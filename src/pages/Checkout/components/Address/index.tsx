import { useFormContext } from 'react-hook-form'
import { InputContainer, AddressContainer, OptionalInput } from './style'

export function Address(){
    const { register, watch } =  useFormContext()
    
    const complement = watch('complement')

    return(
        <AddressContainer>
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