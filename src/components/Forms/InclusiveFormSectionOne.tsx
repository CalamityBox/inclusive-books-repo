import React from 'react'

// UI Components
import Card from '@mui/material/Card'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import MenuItem from '@mui/material/MenuItem'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import AddCircleIcon from '@mui/icons-material/AddCircle'

// Hook Form
import { Controller, FieldError, FieldErrorsImpl, Merge, useFormContext } from 'react-hook-form'
import ControlledTextField from './ControlledTextField'
import FormCard from './FormCard'
import Box from '@mui/material/Box'
import { Grid, IconButton } from '@mui/material'
import ControlledSelect from './ControlledSelect'
import { handleContributorError, hasContributorError, createErrorMessage } from '../../utils/handleErrors'
import ContributorsSubsection from './ContributorsSubsection'
import ControlledRadio from './ControlledRadio'
import ControlledCheckboxGroup from './ControlledCheckboxGroup'

export default function InclusiveFormSectionOne(props : any) {

    const {
        control,
        getValues,
        watch,
        setValue,
        formState: { errors }
    } = useFormContext()

    return (
        <>
            <FormCard label='Book Title' description='Enter the title of the book. Please use proper case for the title. "This Is An Example Of Proper Case."'>
                <ControlledTextField name='title' defaultValue='' control={control} isError={!!errors.title} errorMessage={createErrorMessage(errors.title)} />
            </FormCard>

            <FormCard label='Book Subtitle' description='Enter the subtitle of the book. Please use proper case for the subtitle. "This Is An Example Of Proper Case."'>
                <ControlledTextField name='subtitle' defaultValue='' control={control} isError={!!errors.subtitle} errorMessage={createErrorMessage(errors.subtitle)} />
            </FormCard>

            <FormCard label='Series Info'>
                <Grid container spacing={2}>
                    <Grid item lg={8}>
                        <ControlledTextField label='Book Series Name' name='series' defaultValue='' control={control} isError={!!errors.series} errorMessage={createErrorMessage(errors.series)} />
                    </Grid>
                    <Grid item lg={4}>
                        <ControlledTextField label='Number in Series' name='seriesNumber' defaultValue='' control={control} isError={!!errors.seriesNumber} errorMessage={createErrorMessage(errors.seriesNumber)} />
                    </Grid>
                </Grid>
            </FormCard>

            <FormCard label='Contributors' description='Enter the names of all contributors for this book.'>
                <ContributorsSubsection control={control} errors={errors} getValues={getValues} watch={watch} setValue={setValue} />
            </FormCard>

            <FormCard label='Genre'>
                <ControlledRadio 
                    name='genre' 
                    label='Genre' 
                    defaultValue='' 
                    control={control}
                    isError={!!errors.genre}
                    errorMessage={createErrorMessage(errors.genre)}
                    options={[
                        { value: 'anthology', label: 'Anthology', tooltip: 'A collection of various works. (Ex: Black Mirror)' },
                        { value: 'biography', label: 'Biography', tooltip: 'A factual book about a real-world person. (Ex: I Am Malala)' },
                        { value: 'fantasy', label: 'Fantasy', tooltip: 'The story does not take place in the real world. (Ex: Lord of the Rings)' },
                        { value: 'fiction', label: 'Fiction', tooltip: 'A story in the real world with imaginary events. (Ex: Spider-man, Harry Potter)'},
                        { value: 'fictionalized-biography', label: 'Fictionalized Biography', tooltip: 'A book about a real-world person where some details, events, or people have been made up for the story (Ex: When Stars Are Scattered)' },
                        { value: 'historical-fiction', label: 'Historical Fiction', tooltip: 'The plot takes past in a real-world setting related to the past, but the story itself is fictional (Ex: Gone With The Wind)' },
                        { value: 'memoir', label: 'Memoir', tooltip: 'A collection of memories written by that person. (Ex: the fire never goes out)' },
                        { value: 'nonfiction', label: 'Nonfiction', tooltip: 'Prose writing that is based on facts, real events, and real people (Ex: Guinness Book of World Records).' }
                    ]}
                />
            </FormCard>

            <FormCard label='Grade Level'>
                <ControlledCheckboxGroup 
                    label='Grade Level' 
                    name='grade' 
                    defaultValue=''
                    control={control}
                    isError={!!errors.grade}
                    errorMessage={createErrorMessage(errors.grade)}
                    options={[
                        { value: 'birth-3', label: 'Birth - 3' },
                        { value: 'pre-k', label: 'Pre-k' },
                        { value: '1st-grade', label: '1st Grade' },
                        { value: '2nd-grade', label: '2nd Grade' },
                        { value: '3rd-grade', label: '3rd Grade' },
                        { value: '4th-grade', label: '4th Grade' },
                        { value: '5th-grade', label: '5th Grade' },
                        { value: 'middle-school', label: 'Middle School' },
                        { value: 'high-school', label: 'High School' },
                        { value: 'adult', label: 'Adult' }
                    ]}
                />
            </FormCard>
        </>
    )
}