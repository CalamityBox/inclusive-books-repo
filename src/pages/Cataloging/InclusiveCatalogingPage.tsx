import React from 'react'

import { Step, StepLabel, Stepper } from '@mui/material'
import { inclusiveFormSchema } from '../../utils/inclusiveFormSchema'
import InclusiveBookForm from '../../components/Forms/InclusiveBookForm'
import FormWrapper from '../../components/FormComponents/FormWrapper'
import { useParams } from 'react-router-dom'
import { readDatabase, readDatabaseRealtime } from '../../utils/useDatabase'
import Loading from '../../components/Loading'
import ContributorDisambiguation from '../../components/Cataloging/ContributorDisambiguation'
import Container from '@mui/system/Container'

export default function InclusiveCatalogingPage() {

    const { bookId } = useParams()
    const [bookData, isLoading] = readDatabase(`booksToReview/${bookId}`)
    const [contributors, isContributorsLoading] = readDatabase('contributors')

    console.log('book data is',bookData)
    // console.log('book id is',bookId)
    // console.log('is book data loading',isBookLoading)
    // console.log('is contributor loading',isContributorsLoading)

    // Steps
    const [step, setStep] = React.useState(0)

    const steps: ('Add Contributors' | 'Book Information' | 'Review')[] = [
        'Add Contributors',
        'Book Information',
        'Review'
    ]

    return (
        <Container>
            <Loading isLoading={!!isLoading && isContributorsLoading}>
                {/* Nesting the stepper inside the form wrapper means that the form state of the InclusiveBookForm will be preserved even if the step changes and another component is rendered */}
                <FormWrapper
                    defaultValues={bookData} 
                    schema={inclusiveFormSchema} 
                    submitButtonText='Final Review' 
                    formSubmitHandler={() => setStep(steps.indexOf('Review'))}
                    hideSubmitButton={step !== 1}
                >

                    <Stepper activeStep={step} sx={{ mb: 4 }}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>

                    {
                        step === 0 ?
                            <ContributorDisambiguation book={bookData} contributorData={contributors} selectContributorCallback={() => {}} />
                            :
                            step === 1 ?
                                <InclusiveBookForm />
                                :
                                <>Final Review</>
                    }

                </FormWrapper>

            </Loading>
        </Container>
    )
}