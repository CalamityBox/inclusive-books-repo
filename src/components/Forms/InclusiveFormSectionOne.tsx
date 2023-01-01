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
import ContributorsAutocomplete from '../FormComponents/ContributorsAutocomplete'

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
                    defaultValue='' 
                    isError={!!errors?.genre}
                    errorMessage={createErrorMessage(errors.genre)}
                    options={genreOptions}
                />
            </FormCard>

            <FormCard label='Grade Level' required={true}>
                <ControlledCheckboxGroup 
                    label='Grade Level' 
                    name='grade' 
                    defaultValue=''
                    isError={!!errors.grade}
                    errorMessage={createErrorMessage(errors.grade)}
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
                    defaultValue=''
                    isError={!!errors?.identityBased}
                    errorMessage={createErrorMessage(errors.identityBased)}
                    options={identityBasedOptions}
                />
            </FormCard>

            <FormCard label='Joy-based v. Adversity-based' required={true}>
                <ControlledRadio 
                    name='joyBased'
                    label='Joy Based'
                    defaultValue=''
                    isError={!!errors?.joyBased}
                    errorMessage={createErrorMessage(errors.joyBased)}
                    options={joyBasedOptions}
                />
            </FormCard>

            <FormCard label='General Subject Matter' required={true}>
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
                    defaultValue=''
                    isError={!!errors?.raceCulture}
                    errorMessage={createErrorMessage(errors.raceCulture)}
                    options={raceCultureOptions}
                />
                <OtherCheckbox name='raceCultureOther' keyName='value' />
            </FormCard>

            <FormCard label='Race / Culture Content'>
                <ControlledCheckboxGroup 
                    label='Race / Culture Content' 
                    name='raceCultureContent' 
                    defaultValue=''
                    isError={!!errors?.raceCultureContent}
                    errorMessage={createErrorMessage(errors.raceCultureContent)}
                    options={raceCultureContentOptions}
                />
                <OtherCheckbox name='raceCultureContentOther' keyName='value' />
            </FormCard>
            
            {/* Gender Sexuality */}
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

            <FormCard label='Gender and Sexuality Content'>
                <ControlledCheckboxGroup 
                    label='Gender and Sexuality Content' 
                    name='genderSexualityContent' 
                    defaultValue=''
                    isError={!!errors?.genderSexualityContent}
                    errorMessage={createErrorMessage(errors.genderSexualityContent)}
                    options={genderSexualityContentOptions}
                />
                <OtherCheckbox name='genderSexualityContentOther' keyName='value' />
            </FormCard>

            {/* Family Structure */}
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

            <FormCard label='Family Structure Content'>
                <ControlledCheckboxGroup 
                    label='Family Structure Content' 
                    name='familyStructureContent' 
                    defaultValue=''
                    isError={!!errors?.familyStructureContent}
                    errorMessage={createErrorMessage(errors.familyStructureContent)}
                    options={familyStructureContentOptions}
                />
                <OtherCheckbox name='familyStructureContentOther' keyName='value' />
            </FormCard>

            {/* Neurodivergent */}
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

            <FormCard label='Neurodivergent Content'>
                <ControlledCheckboxGroup 
                    label='Neurodivergent Content' 
                    name='neurodivergentContent' 
                    defaultValue=''
                    isError={!!errors?.neurodivergentContent}
                    errorMessage={createErrorMessage(errors.neurodivergentContent)}
                    options={neurodivergentContentOptions}
                />
                <OtherCheckbox name='neurodivergentOther' keyName='value' />
            </FormCard>

            {/* Body */}
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

            <FormCard label='Body Content'>
                <ControlledCheckboxGroup 
                    label='Body Content' 
                    name='bodyContent' 
                    defaultValue=''
                    isError={!!errors?.bodyContent}
                    errorMessage={createErrorMessage(errors.bodyContent)}
                    options={bodyContentOptions}
                />
                <OtherCheckbox name='bodyOther' keyName='value' />
            </FormCard>

            {/* Disability */}
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

            <FormCard label='Disability Content'>
                <ControlledCheckboxGroup 
                    label='Disability Content' 
                    name='disabilityContent' 
                    defaultValue=''
                    isError={!!errors?.disabilityContent}
                    errorMessage={createErrorMessage(errors.disabilityContent)}
                    options={disabilityContentOptions}
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