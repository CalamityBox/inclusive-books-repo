import Container from '@mui/material/Container'
import React from 'react'
import { useForm } from 'react-hook-form'

export default function InclusiveCatalogingForm(props : any) {

    interface IFormInputs {
        email: string;
        password: string;
    }

    const { 
        register,
        handleSubmit,
        watch,
        formState: { errors } 
    } = useForm<IFormInputs>()

    function formSubmitHandler(data : IFormInputs) {
        console.log('form data:',data)
    }

    console.log('watch variable email',watch('email'))

    return (
        <>
            Inclusive Cataloging Form
                <form onSubmit={handleSubmit(formSubmitHandler)}>
                    <Container 
                        sx={{ display: 'flex', flexDirection: 'column', rowGap: 2 }}
                        maxWidth='sm'
                    >
                        
                        <input 
                            defaultValue='example@test.test.com' 
                            {...register('email')}
                        />

                        <input 
                            {...register('password', { required: true })}
                        />

                        <input type='submit' />

                    </Container>
                </form>
        </>
    )
}