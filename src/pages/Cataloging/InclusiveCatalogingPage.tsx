import React from 'react'

// Components
import Container from '@mui/material/Container'

// Forms
import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, CircularProgress, Step, StepLabel, Stepper } from '@mui/material'
import { inclusiveFormSchema, defaultValues } from '../../utils/inclusiveFormSchema'
import { IFormInputs } from '../../utils/Interfaces'
import InclusiveBookForm from '../../components/Forms/InclusiveBookForm'
import FormWrapper from '../../components/FormComponents/FormWrapper'
import { useParams } from 'react-router-dom'
import { readDatabase } from '../../utils/useDatabase'

export default function InclusiveCatalogingPage(props : { defaultValues?: IFormInputs }) {

    const { bookId } = useParams()
    const [data, isLoading] = readDatabase(`booksToReview/${bookId}`)

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
            {
                isLoading ?
                    <CircularProgress />
                    :
                    <FormWrapper defaultValues={data} schema={inclusiveFormSchema} submitButtonText='Final Review' formSubmitHandler={() => setStep('Review')}>
                        <InclusiveBookForm />
                    </FormWrapper>
            }
        </>
    )
}