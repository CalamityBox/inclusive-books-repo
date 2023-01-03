import React from 'react'

// Components
import Container from '@mui/material/Container'

// Forms
import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Step, StepLabel, Stepper } from '@mui/material'
import { inclusiveFormSchema, defaultValues } from '../../utils/inclusiveFormSchema'
import { IFormInputs } from '../../utils/Interfaces'
import InclusiveBookForm from '../../components/Forms/InclusiveBookForm'

export default function InclusiveCatalogingPage(props : { defaultValues?: IFormInputs }) {

    // Leaving form exposed instead of using FormWrapper component to use the form methods
    const methods = useForm<IFormInputs>({
        mode: 'onBlur',
        defaultValues: !!props?.defaultValues ? props.defaultValues : defaultValues,
        resolver: yupResolver(inclusiveFormSchema)
    })

    function formSubmitHandler(data : IFormInputs) {
        console.log('form data:',data)
    }

    // Steps
    const [step, setStep] = React.useState(0)

    const steps = [
        'Add Contributors',
        'Select a Book',
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
                        
                        <InclusiveBookForm />

                        <Button type='submit' variant='contained' sx={{ margin: 'auto' }}>Submit</Button>

                    </Container>
                </form>
            </FormProvider>
        </>
    )
}