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

import { genreOptions, gradeOptions } from '../../utils/formOptions'
import Editions from './Editions'

export default function InclusiveFormSectionOne(props : any) {

    function handleKeyPress(event : any) {
        console.log('pressed',event)
        if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
        }
    }

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
                <ContributorsSubsection getValues={getValues} watch={watch} setValue={setValue} />
            </FormCard>

            <FormCard label='Genre'>
                <ControlledRadio 
                    name='genre' 
                    label='Genre' 
                    defaultValue='' 
                    control={control}
                    isError={!!errors.genre}
                    errorMessage={createErrorMessage(errors.genre)}
                    options={genreOptions}
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
                    options={gradeOptions}
                />
            </FormCard>

            <FormCard label='AR Level' description="Accelerated Reader (AR) is used by many schools to track students' reading comprehension. Each number range represents the reading level for each grade. For example, 3.5 represents a 3rd grade reading level halfway through the school year.">
                <ControlledTextField name='arLevel' defaultValue='' control={control} isError={!!errors.arLevel} errorMessage={createErrorMessage(errors.arLevel)} />
            </FormCard>

            <FormCard label='Description / Summary'>
                <ControlledTextField name='description' defaultValue='' control={control} isError={!!errors.description} errorMessage={createErrorMessage(errors.description)} />
            </FormCard>

            <FormCard label='Editions'>
                <Editions />
            </FormCard>
        </>
    )
}