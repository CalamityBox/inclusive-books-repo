import React from 'react'

// UI Components
import ContributorsSubsection from './ContributorsSubsection'
import ControlledRadio from '../FormComponents/ControlledRadio'
import ControlledCheckboxGroup from '../FormComponents/ControlledCheckboxGroup'
import ControlledTextField from '../FormComponents/ControlledTextField'
import FormCard from '../FormComponents/FormCard'
import { Grid } from '@mui/material'
import Editions from './Editions'
import OtherCheckbox from '../FormComponents/OtherCheckbox'
import CountriesAutocomplete from '../FormComponents/CountriesAutocomplete'

// Hook Form
import { useFormContext } from 'react-hook-form'
import { createErrorMessage } from '../../utils/handleErrors'

import { awardOptions, 
    bodyContentOptions, 
    bodyOptions, 
    countryOptions, 
    disabilityContentOptions, 
    disabilityOptions, 
    familyStructureContentOptions, 
    familyStructureOptions, 
    genderSexualityContentOptions, 
    genderSexualityOptions, 
    generalSubjectOptions, 
    genreOptions, 
    gradeOptions, 
    identityBasedOptions, 
    joyBasedOptions, 
    neurodivergentContentOptions, 
    neurodivergentOptions, 
    raceCultureContentOptions, 
    raceCultureOptions, 
    sensitiveContentOptions } from '../../utils/formOptions'

export default function InclusiveBookForm(props : any) {

    const {
        control,
        getValues,
        watch,
        setValue,
        formState: { errors }
    } = useFormContext()

    return (
        <>
            <FormCard label='Book Title' description='Enter the title of the book. Please use proper case for the title. "This Is An Example Of Proper Case."' required={true}>
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
                        <ControlledTextField 
                            label='Number in Series' 
                            name='seriesNumber' 
                            defaultValue=''  
                            isError={!!errors?.seriesNumber} 
                            errorMessage={createErrorMessage(errors.seriesNumber)}
                            keyPattern={/\d/}
                            maxLength={3} 
                        />
                    </Grid>
                </Grid>
            </FormCard>

            <FormCard label='Contributors' description='Enter the names of all contributors for this book.' required={true}>
                <ContributorsSubsection getValues={getValues} watch={watch} setValue={setValue} />
            </FormCard>

            <FormCard label='Genre' required={true}>
                <ControlledRadio 
                    name='genre' 
                    label='Genre'
                    options={genreOptions}
                />
            </FormCard>

            <FormCard label='Grade Level' required={true}>
                <ControlledCheckboxGroup 
                    label='Grade Level' 
                    name='grade'
                    options={gradeOptions}
                />
            </FormCard>

            <FormCard label='AR Level' description="Accelerated Reader (AR) is used by many schools to track students' reading comprehension. Each number range represents the reading level for each grade. For example, 3.5 represents a 3rd grade reading level halfway through the school year." required={true}>
                <ControlledTextField 
                    name='arLevel' 
                    defaultValue=''  
                    isError={!!errors?.arLevel} 
                    errorMessage={createErrorMessage(errors.arLevel)}
                    keyPattern={/[\d.]/}
                    maxLength={5}
                />
            </FormCard>

            <FormCard label='Description / Summary' required={true}>
                <ControlledTextField name='description' defaultValue=''  isError={!!errors?.description} errorMessage={createErrorMessage(errors.description)} multiline={true} />
            </FormCard>

            <FormCard label='Editions' required={true}>
                <Editions />
            </FormCard>

            <FormCard label='Identity-based v. Identity-independent' required={true}>
                <ControlledRadio 
                    name='identityBased'
                    label='Identity Based'
                    options={identityBasedOptions}
                />
            </FormCard>

            <FormCard label='Joy-based v. Adversity-based' required={true}>
                <ControlledRadio 
                    name='joyBased'
                    label='Joy Based'
                    options={joyBasedOptions}
                />
            </FormCard>

            <FormCard label='General Subject Matter' required={true}>
                <ControlledCheckboxGroup 
                    label='General Subject Matter' 
                    name='generalSubject'
                    options={generalSubjectOptions}
                />
                <OtherCheckbox name='generalSubjectOther' keyName='value' />
            </FormCard>

            <FormCard label='Sensitive Content' description='Select any sensitive content in the book so that we can provide warnings to people ahead of time.'>
                <ControlledCheckboxGroup 
                    label='Sensitive Content' 
                    name='sensitiveContent'
                    options={sensitiveContentOptions}
                />
                <OtherCheckbox name='sensitiveContentOther' keyName='value' />
            </FormCard>

            <FormCard label='Nationality / Ethnicity / Tribal Affiliation'>
                <CountriesAutocomplete 
                    name='nationalityEthnicity'
                    label='Type or paste a country name and hit enter.'
                    options={countryOptions.sort((a: { code: string, label: string },b: { code: string, label: string }) => a.label.localeCompare(b.label))}
                />
            </FormCard>

            {/* Race Culture */}
            <FormCard label='Race / Culture'>
                <ControlledCheckboxGroup 
                    label='Race / Culture' 
                    name='raceCulture'
                    options={raceCultureOptions}
                />
                <OtherCheckbox name='raceCultureOther' keyName='value' />
            </FormCard>

            <FormCard label='Race / Culture Content'>
                <ControlledCheckboxGroup 
                    label='Race / Culture Content' 
                    name='raceCultureContent'
                    options={raceCultureContentOptions}
                />
                <OtherCheckbox name='raceCultureContentOther' keyName='value' />
            </FormCard>
            
            {/* Gender Sexuality */}
            <FormCard label='Gender and Sexuality'>
                <ControlledCheckboxGroup 
                    label='Gender and Sexuality' 
                    name='genderSexuality'
                    options={genderSexualityOptions}
                />
                <OtherCheckbox name='genderSexualityOther' keyName='value' />
            </FormCard>

            <FormCard label='Gender and Sexuality Content'>
                <ControlledCheckboxGroup 
                    label='Gender and Sexuality Content' 
                    name='genderSexualityContent'
                    options={genderSexualityContentOptions}
                />
                <OtherCheckbox name='genderSexualityContentOther' keyName='value' />
            </FormCard>

            {/* Family Structure */}
            <FormCard label='Family Structure'>
                <ControlledCheckboxGroup 
                    label='Family Structure' 
                    name='familyStructure'
                    options={familyStructureOptions}
                />
                <OtherCheckbox name='familyStructureOther' keyName='value' />
            </FormCard>

            <FormCard label='Family Structure Content'>
                <ControlledCheckboxGroup 
                    label='Family Structure Content' 
                    name='familyStructureContent'
                    options={familyStructureContentOptions}
                />
                <OtherCheckbox name='familyStructureContentOther' keyName='value' />
            </FormCard>

            {/* Neurodivergent */}
            <FormCard label='Neurodivergent'>
                <ControlledCheckboxGroup 
                    label='Neurodivergent' 
                    name='neurodivergent'
                    options={neurodivergentOptions}
                />
                <OtherCheckbox name='neurodivergentOther' keyName='value' />
            </FormCard>

            <FormCard label='Neurodivergent Content'>
                <ControlledCheckboxGroup 
                    label='Neurodivergent Content' 
                    name='neurodivergentContent'
                    options={neurodivergentContentOptions}
                />
                <OtherCheckbox name='neurodivergentOther' keyName='value' />
            </FormCard>

            {/* Body */}
            <FormCard label='Body'>
                <ControlledCheckboxGroup 
                    label='Body' 
                    name='body'
                    options={bodyOptions}
                />
                <OtherCheckbox name='bodyOther' keyName='value' />
            </FormCard>

            <FormCard label='Body Content'>
                <ControlledCheckboxGroup 
                    label='Body Content' 
                    name='bodyContent'
                    options={bodyContentOptions}
                />
                <OtherCheckbox name='bodyOther' keyName='value' />
            </FormCard>

            {/* Disability */}
            <FormCard label='Disability'>
                <ControlledCheckboxGroup 
                    label='Disability' 
                    name='disability'
                    options={disabilityOptions}
                />
                <OtherCheckbox name='disabilityOther' keyName='value' />
            </FormCard>

            <FormCard label='Disability Content'>
                <ControlledCheckboxGroup 
                    label='Disability Content' 
                    name='disabilityContent'
                    options={disabilityContentOptions}
                />
                <OtherCheckbox name='disabilityOther' keyName='value' />
            </FormCard>

            <FormCard label='Literary Awards'>
                <ControlledCheckboxGroup 
                    label='Literary Awards' 
                    name='awards'
                    options={awardOptions}
                />
                <OtherCheckbox name='awardsOther' keyName='value' />
            </FormCard>

            <FormCard label='SMART Reading Award' description='If this book has won the SMART Reading Award, enter the year (YYYY) it won. Otherwise, leave this question blank.'>
                <ControlledTextField 
                    name='smartAward'
                    defaultValue=''
                    isError={!!errors.smartAward}
                    errorMessage={createErrorMessage(errors.smartAward)}
                    keyPattern={/\d/}
                    maxLength={4}
                />
            </FormCard>
        </>
    )
}