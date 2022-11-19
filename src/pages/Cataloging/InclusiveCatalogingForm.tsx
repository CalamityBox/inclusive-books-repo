import React from 'react'

// Components
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'

// Forms
import { useForm, SubmitHandler, Controller, FormProvider } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import Card from '@mui/material/Card'
import { Button, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select } from '@mui/material'
import InclusiveFormSectionOne from '../../components/Forms/InclusiveFormSectionOne'

export default function InclusiveCatalogingForm(props : any) {

    const nameRegex = /^[^\d!@#$%^&*()+=_\[\]\{\}:|<>~]+$/u

    const contributorTypes = ['','Author', 'Illustrator', 'Editor', 'Translator', 'Contributor']
    const genreOptions = ['Fiction','Nonfiction','Biography','Fictionalized Biography','Historical Fiction','Fantasy','Anthology','Memoir']

    interface IFormInputs {
        title: string;
        subtitle: string;
        submit: any;
        series: string;
        seriesNumber: string;
        contributorName1: string;
        contributorType1: string;
    }

    const schema = yup.object().shape({

        // biographical info about book
        title: yup.string().required('You must enter a title.'),
        subtitle: yup.string(),
        series: yup.string(),
        seriesNumber: yup.string(),

        contributorName1: yup.string().matches(nameRegex,'You cannot use numbers or symbols in a name.').required('You must enter at least one author for this book.'),
        contributorType1: yup.string().required('You must select a type.'),

        genre: yup.string().required(),
        editions: yup.array().of(yup.object().shape({
            format: yup.string().required(),
            publicationDate: yup.number().required(),
            coverURL: yup.string().required()
        })),
        description: yup.string().required(),
        grade: yup.boolean().oneOf([true]),
        arLevel: yup.number().min(0.1).max(12.9), // Change to string with regex

        // content
        identityBased: yup.boolean().oneOf([true]),
        joyBased: yup.boolean().oneOf([true]),
        subject: yup.boolean().oneOf([true]),
        sensitiveContent: yup.string().required(), // Optional checkbox question, not sure what to do here
        
    })

    const methods = useForm<IFormInputs>({
        mode: 'onBlur',
        resolver: yupResolver(schema)
    })

    function formSubmitHandler(data : IFormInputs) {
        console.log('form data:',data)
    }

    console.log('watch name',methods.watch('contributorName1'))
    console.log('watch select',methods.watch('contributorType1'))

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