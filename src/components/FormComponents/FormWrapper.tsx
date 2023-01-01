import React from 'react'

import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider, useForm } from 'react-hook-form'
import { Button, Container } from '@mui/material'

export default function FormWrapper(props: { defaultValues: any, schema: any, children: any, formSubmitHandler?: any }) {

    const methods = useForm({
        mode: 'onBlur',
        defaultValues: props.defaultValues,
        resolver: yupResolver(props.schema)
    })

    function formSubmitHandler(data : any) {
        console.log('form data:',data)
    }

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(props?.formSubmitHandler === undefined ? formSubmitHandler : props.formSubmitHandler)}>
                <Container maxWidth={false} sx={{ display: 'flex', flexDirection: 'column', rowGap: 3, maxWidth: 900 }}>
                    {props.children}
                    <Button type='submit' variant='contained' sx={{ margin: 'auto' }}>Submit</Button>
                </Container>
            </form>
        </FormProvider>
    )
}