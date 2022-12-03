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

import { awardOptions, bodyOptions, countryOptions, disabilityOptions, familyStructureOptions, genderSexualityOptions, generalSubjectOptions, genreOptions, gradeOptions, identityBasedOptions, joyBasedOptions, neurodivergentOptions, raceCultureOptions, sensitiveContentOptions } from '../../utils/formOptions'
import Editions from './Editions'
import OtherCheckbox from './OtherCheckbox'
import ControlledAutocomplete from './ControlledAutoComplete'

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
                <ControlledTextField name='title' defaultValue=''  isError={!!errors?.title} errorMessage={createErrorMessage(errors.title)} />
            </FormCard>

            <FormCard label='Book Subtitle' description='Enter the subtitle of the book. Please use proper case for the subtitle. "This Is An Example Of Proper Case."'>
                <ControlledTextField name='subtitle' defaultValue=''  isError={!!errors?.subtitle} errorMessage={createErrorMessage(errors.subtitle)} />
            </FormCard>

            <FormCard label='Series Info'>
                <Grid container spacing={2}>
                    <Grid item lg={8}>
                        <ControlledTextField label='Book Series Name' name='series' defaultValue=''  isError={!!errors?.series} errorMessage={createErrorMessage(errors.series)} />
                    </Grid>
                    <Grid item lg={4}>
                        <ControlledTextField label='Number in Series' name='seriesNumber' defaultValue=''  isError={!!errors?.seriesNumber} errorMessage={createErrorMessage(errors.seriesNumber)} />
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
                    
                    isError={!!errors?.genre}
                    errorMessage={createErrorMessage(errors.genre)}
                    options={genreOptions}
                />
            </FormCard>

            <FormCard label='Grade Level'>
                <ControlledCheckboxGroup 
                    label='Grade Level' 
                    name='grade' 
                    defaultValue=''
                    
                    isError={!!errors.grade}
                    errorMessage={createErrorMessage(errors.grade)}
                    options={gradeOptions}
                />
            </FormCard>

            <FormCard label='AR Level' description="Accelerated Reader (AR) is used by many schools to track students' reading comprehension. Each number range represents the reading level for each grade. For example, 3.5 represents a 3rd grade reading level halfway through the school year.">
                <ControlledTextField name='arLevel' defaultValue=''  isError={!!errors?.arLevel} errorMessage={createErrorMessage(errors.arLevel)} />
            </FormCard>

            <FormCard label='Description / Summary'>
                <ControlledTextField name='description' defaultValue=''  isError={!!errors?.description} errorMessage={createErrorMessage(errors.description)} />
            </FormCard>

            <FormCard label='Editions'>
                <Editions />
            </FormCard>

            <FormCard label='Identity-based v. Identity-independent'>
                <ControlledRadio 
                    name='identityBased'
                    label='Identity Based'
                    defaultValue=''
                    isError={!!errors?.identityBased}
                    errorMessage={createErrorMessage(errors.identityBased)}
                    options={identityBasedOptions}
                />
            </FormCard>

            <FormCard label='Joy-based v. Adversity-based'>
                <ControlledRadio 
                    name='joyBased'
                    label='Joy Based'
                    defaultValue=''
                    isError={!!errors?.joyBased}
                    errorMessage={createErrorMessage(errors.joyBased)}
                    options={joyBasedOptions}
                />
            </FormCard>

            <FormCard label='General Subject Matter'>
                <ControlledCheckboxGroup 
                    label='General Subject Matter' 
                    name='generalSubject' 
                    defaultValue=''
                    isError={!!errors?.generalSubject}
                    errorMessage={createErrorMessage(errors.generalSubject)}
                    options={generalSubjectOptions}
                />
                <OtherCheckbox name='generalSubjectOther' keyName='value' />
            </FormCard>

            <FormCard label='Sensitive Content' description='Select any sensitive content in the book so that we can provide warnings to people ahead of time.'>
                <ControlledCheckboxGroup 
                    label='Sensitive Content' 
                    name='sensitiveContent' 
                    defaultValue=''
                    isError={!!errors?.sensitiveContent}
                    errorMessage={createErrorMessage(errors.sensitiveContent)}
                    options={sensitiveContentOptions}
                />
                <OtherCheckbox name='sensitiveContentOther' keyName='value' />
            </FormCard>

            <FormCard label='Race / Culture'>
                <ControlledCheckboxGroup 
                    label='Race / Culture' 
                    name='raceCulture' 
                    defaultValue=''
                    isError={!!errors?.raceCulture}
                    errorMessage={createErrorMessage(errors.raceCulture)}
                    options={raceCultureOptions}
                />
                <OtherCheckbox name='raceCultureOther' keyName='value' />
            </FormCard>

            <FormCard label='Gender and Sexuality'>
                <ControlledCheckboxGroup 
                    label='Gender and Sexuality' 
                    name='genderSexuality' 
                    defaultValue=''
                    isError={!!errors?.genderSexuality}
                    errorMessage={createErrorMessage(errors.genderSexuality)}
                    options={genderSexualityOptions}
                />
                <OtherCheckbox name='genderSexualityOther' keyName='value' />
            </FormCard>

            <FormCard label='Family Structure'>
                <ControlledCheckboxGroup 
                    label='Family Structure' 
                    name='familyStructure' 
                    defaultValue=''
                    isError={!!errors?.familyStructure}
                    errorMessage={createErrorMessage(errors.familyStructure)}
                    options={familyStructureOptions}
                />
                <OtherCheckbox name='familyStructureOther' keyName='value' />
            </FormCard>

            <FormCard label='Neurodivergent'>
                <ControlledCheckboxGroup 
                    label='Neurodivergent' 
                    name='neurodivergent' 
                    defaultValue=''
                    isError={!!errors?.neurodivergent}
                    errorMessage={createErrorMessage(errors.neurodivergent)}
                    options={neurodivergentOptions}
                />
                <OtherCheckbox name='neurodivergentOther' keyName='value' />
            </FormCard>

            <FormCard label='Body'>
                <ControlledCheckboxGroup 
                    label='Body' 
                    name='body' 
                    defaultValue=''
                    isError={!!errors?.body}
                    errorMessage={createErrorMessage(errors.body)}
                    options={bodyOptions}
                />
                <OtherCheckbox name='bodyOther' keyName='value' />
            </FormCard>

            <FormCard label='Disability'>
                <ControlledCheckboxGroup 
                    label='Disability' 
                    name='disability' 
                    defaultValue=''
                    isError={!!errors?.disability}
                    errorMessage={createErrorMessage(errors.disability)}
                    options={disabilityOptions}
                />
                <OtherCheckbox name='disabilityOther' keyName='value' />
            </FormCard>

            <FormCard label='Literary Awards'>
                <ControlledCheckboxGroup 
                    label='Literary Awards' 
                    name='awards' 
                    defaultValue=''
                    isError={!!errors?.awards}
                    errorMessage={createErrorMessage(errors.awards)}
                    options={awardOptions}
                />
                <OtherCheckbox name='awardsOther' keyName='value' />
            </FormCard>

            <FormCard label='Nationality / Ethnicity / Tribal Affiliation'>
                <ControlledAutocomplete 
                    name='nationalityEthnicity'
                    label='Type or paste a country name and hit enter.'
                    options={countryOptions}
                />
            </FormCard>
        </>
    )
}