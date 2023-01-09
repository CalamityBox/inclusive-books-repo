import React, { MouseEventHandler } from 'react'

import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { Alert, AlertTitle, Box, Button, CircularProgress, Container, Typography } from '@mui/material'

export const CanEditContext = React.createContext(true)

export default function FormWrapper(props: { defaultValues: any, schema: any, children: any, submitButtonText?: string, formSubmitHandler?: any, hideSubmitButton?: boolean, handleBlur?: SubmitHandler<any>, canEdit?: boolean, postSubmitTitle?: string, postSubmitButtonText?: string, handlePostSubmit?: MouseEventHandler<HTMLAnchorElement> }) {

    const [submitted, setSubmitted] = React.useState(false)

    const methods = useForm({
        mode: 'onBlur',
        defaultValues: props.defaultValues,
        resolver: yupResolver(props.schema)
    })

    function handleSubmit(data: any) {

        if (props?.formSubmitHandler !== undefined) {
            console.log('running submit function')
            const submit = props.formSubmitHandler
            submit(data)
        } else {
            console.log('form data is',data)
        }
        setSubmitted(true)
    }

    /*
        Handle can edit status and passing this status to children form components via context
    */
    const canEdit = props?.canEdit === undefined ? true : props.canEdit // Set default value of undefined to true because that is the more common use case

    function handlePostSubmit(event: any) {
        if (props?.handlePostSubmit !== undefined) {
            const postSubmit = props.handlePostSubmit
            postSubmit(event)
        } else {
            setSubmitted(false)
        }
    }

    if (submitted) {
        return (
            <Box sx={{ mt: '30vh' }}>
                <Typography variant='h3' sx={{ mb: 3 }}>{props?.postSubmitTitle ?? 'Thank you for your response'}</Typography>
                <Button variant='contained' onClick={handlePostSubmit} >
                    {props?.postSubmitButtonText ?? 'Submit Another Response'}
                </Button>
            </Box>
        )
    }

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
                                    <AlertTitle sx={{ textAlign: 'left' }}>Read-only Mode</AlertTitle>
                                    You are viewing this form in read-only mode because you do not have permission to edit.
                                </Alert>
                        }
                        {props.children}
                        {
                            canEdit && !props?.hideSubmitButton ?
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