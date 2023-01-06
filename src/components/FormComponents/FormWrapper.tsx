import React from 'react'

import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { Alert, Button, Container } from '@mui/material'

export const CanEditContext = React.createContext(true)

export default function FormWrapper(props: { defaultValues: any, schema: any, children: any, submitButtonText?: string, formSubmitHandler?: any, handleBlur?: SubmitHandler<any>, canEdit?: boolean }) {

    const [submitted, setSubmitted] = React.useState(false)

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

    /*
        Handle can edit status and passing this status to children form components via context
    */
    const canEdit = props?.canEdit === undefined ? true : props.canEdit // Set default value of undefined to true because that is the more common use case

    return (
        <FormProvider {...methods}>
            <CanEditContext.Provider value={canEdit}>
                <form 
                    onSubmit={methods.handleSubmit(handleSubmit)} 
                    onBlur={!!props?.handleBlur && methods.formState.isValid ? methods.handleSubmit(props.handleBlur) : () => {}} // only uses onBlur functionality if it has prop, form has been submitted, and form is valid
                >
                    <Container maxWidth={false} sx={{ display: 'flex', flexDirection: 'column', rowGap: 3, maxWidth: 900 }}>
                        {
                            canEdit ?
                                <></>
                                :
                                <Alert severity='info'>
                                    You are viewing this form in read-only mode because you do not have permission to edit.
                                </Alert>
                        }
                        {props.children}
                        {
                            canEdit ?
                                <Button type='submit' variant='contained' sx={{ margin: 'auto' }}>
                                    {!!props?.submitButtonText ? props.submitButtonText : 'Submit'}
                                </Button>
                                :
                                <></>
                        }
                    </Container>
                </form>
            </CanEditContext.Provider>
        </FormProvider>
    )
}