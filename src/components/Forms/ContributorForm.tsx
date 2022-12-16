import React from 'react'

import { bodyOptions, countryOptions, disabilityOptions, familyStructureOptions, genderSexualityOptions, neurodivergentOptions, raceCultureOptions } from '../../utils/formOptions'
import CountriesAutocomplete from './CountriesAutocomplete'
import ControlledCheckbox from './ControlledCheckbox'
import ControlledCheckboxGroup from './ControlledCheckboxGroup'
import ControlledTextField from './ControlledTextField'
import FormCard from './FormCard'
import FormWrapper from './FormWrapper'

export default function ContributorForm(props: { defaultValues: any, schema: any }) {

    const [isVisible, setIsVisible] = React.useState(true)

    function privacyCallback(isChecked: boolean) {
        // When the privacy box is checked as true, set isVisible to false to hide the questions
        setIsVisible(!isChecked)
    }

    return (
        <FormWrapper defaultValues={props.defaultValues} schema={props.schema}>

            <FormCard label='Full Name' required={true} description='Enter the full name of the contributor. Please match case, puncation, accents, etc.'>
                <ControlledTextField 
                    name='name'
                    maxLength={40}
                />
            </FormCard>

            <FormCard label='Description' required={true} description='Enter a bio of the contributor. You may copy and paste this from their website, or synthesize your own from an article. Please enter no more than five paragraphs of content.'>
                <ControlledTextField
                    name='description'
                    multiline={true}
                />
            </FormCard>

            <FormCard label='Profile Picture URL (High Resolution)' required={true}>
                <ControlledTextField 
                    name='largeImage'
                />
            </FormCard>

            <FormCard label='Profile Picture (Small)' required={true}>
                <ControlledTextField 
                    name='smallImage'
                />
            </FormCard>

            <FormCard label='Privacy'>
                <ControlledCheckbox
                    name='privacy'
                    label="This contributor's information is unavailable, private, or not needed."
                    callback={privacyCallback}
                />
            </FormCard>

            {
                isVisible ?
                    <>
                        <FormCard label='Nationality / Ethnicity / Tribal Affiliation'>
                            <CountriesAutocomplete 
                                name='nationalityEthnicity'
                                label='Type or paste a country name and hit enter.'
                                options={countryOptions.sort((a: { code: string, label: string },b: { code: string, label: string }) => a.label.localeCompare(b.label))}
                            />
                        </FormCard>

                        <FormCard label='Race / Culture'>
                            <ControlledCheckboxGroup 
                                name='raceCulture'
                                label='Race / Culture'
                                options={raceCultureOptions}
                            />
                        </FormCard>

                        <FormCard label='Gender and Sexuality'>
                            <ControlledCheckboxGroup 
                                name='genderSexuality'
                                label='Gender and Sexuality'
                                options={genderSexualityOptions}
                            />
                        </FormCard>

                        <FormCard label='Family Structure'>
                            <ControlledCheckboxGroup 
                                name='familyStructure'
                                label='Family Structure'
                                options={familyStructureOptions}
                            />
                        </FormCard>

                        <FormCard label='Neurodivergent'>
                            <ControlledCheckboxGroup 
                                name='neurodivergent'
                                label='Neurodivergent'
                                options={neurodivergentOptions}
                            />
                        </FormCard>

                        <FormCard label='Body'>
                            <ControlledCheckboxGroup 
                                name='body'
                                label='Body'
                                options={bodyOptions}
                            />
                        </FormCard>

                        <FormCard label='Disability'>
                            <ControlledCheckboxGroup 
                                name='disability'
                                label='Disability'
                                options={disabilityOptions}
                            />
                        </FormCard>
                    </>
                    :
                    <></>
            }

        </FormWrapper>
    )
}