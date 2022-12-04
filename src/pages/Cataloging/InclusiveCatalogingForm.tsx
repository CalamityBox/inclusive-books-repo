import React from 'react'

// Components
import Container from '@mui/material/Container'

// Forms
import { useForm, SubmitHandler, Controller, FormProvider, useFieldArray } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from '@mui/material'
import InclusiveFormSectionOne from '../../components/Forms/InclusiveFormSectionOne'
import { inclusiveFormSchema, IFormInputs } from '../../utils/inclusiveFormSchema'

export default function InclusiveCatalogingForm(props : any) {

    const methods = useForm<IFormInputs>({
        mode: 'onBlur',
        resolver: yupResolver(inclusiveFormSchema)
    })

    function formSubmitHandler(data : IFormInputs) {
        console.log('form data:',data)
    }

    // console.log('watch name',methods.watch('contributorName1'))
    // console.log('watch select',methods.watch('contributorType1'))

    console.log('form data:',methods.watch())
    console.log('errors are',methods.formState.errors)

    return (
        <>
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