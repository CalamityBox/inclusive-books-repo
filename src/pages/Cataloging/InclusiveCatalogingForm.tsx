import React from 'react'

// Components
import Container from '@mui/material/Container'

// Forms
import { useForm, SubmitHandler, Controller, FormProvider, useFieldArray } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, Step, StepLabel, Stepper } from '@mui/material'
import InclusiveFormSectionOne from '../../components/Forms/InclusiveFormSectionOne'
import { inclusiveFormSchema, defaultValues } from '../../utils/inclusiveFormSchema'
import { IFormInputs } from '../../utils/Interfaces'

export default function InclusiveCatalogingForm(props : { defaultValues?: IFormInputs }) {

    const methods = useForm<IFormInputs>({
        mode: 'onBlur',
        defaultValues: !!props?.defaultValues ? props.defaultValues : defaultValues,
        resolver: yupResolver(inclusiveFormSchema)
    })

    function formSubmitHandler(data : IFormInputs) {
        console.log('form data:',data)
    }

    const [step, setStep] = React.useState(0)

    const steps = [
        'Select a Book',
        'Add Contributors',
        'Book Information',
        'Review'
    ]

    return (
        <>
            <Stepper activeStep={step} sx={{ mb: 4 }}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(formSubmitHandler)}>
                    <Container 
                        sx={{ display: 'flex', flexDirection: 'column', rowGap: 2 }}
                        maxWidth='md'
                    >
                        
                        <InclusiveFormSectionOne />

                        <Button type='submit' variant='contained' sx={{ margin: 'auto' }}>Submit</Button>

                    </Container>
                </form>
            </FormProvider>
        </>
    )
}