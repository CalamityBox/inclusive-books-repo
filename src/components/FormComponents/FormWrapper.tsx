import React from 'react'

import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { Button, Container } from '@mui/material'

export default function FormWrapper(props: { defaultValues: any, schema: any, children: any, formSubmitHandler?: any, handleBlur?: SubmitHandler<any> }) {

    // Not using form wrapper to leave methods exposed; need to use getValue to submit form data when step changes
    const methods = useForm({
        mode: 'onBlur',
        defaultValues: props.defaultValues,
        resolver: yupResolver(props.schema)
    })

    function defaultFormSubmitHandler(data : any) {
        console.log('form data:',data)
    }

    const handleSubmit = !!props?.formSubmitHandler ? props.formSubmitHandler : defaultFormSubmitHandler

    return (
        <FormProvider {...methods}>
            <form 
                onSubmit={methods.handleSubmit(handleSubmit)} 
                onBlur={methods.handleSubmit(!!props?.handleBlur ? props.handleBlur : () => {})}
            >
                <Container maxWidth={false} sx={{ display: 'flex', flexDirection: 'column', rowGap: 3, maxWidth: 900 }}>
                    {props.children}
                    <Button type='submit' variant='contained' sx={{ margin: 'auto' }}>Submit</Button>
                </Container>
            </form>
        </FormProvider>
    )
}