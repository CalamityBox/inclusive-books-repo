import React from 'react'

import Grid from '@mui/material/Grid'
import ControlledSelect from '../FormComponents/ControlledSelect'
import { useFieldArray, useFormContext } from 'react-hook-form'

import { contributorOptions } from '../../utils/formOptions'

import { isError } from '../../utils/handleErrors'
import OptionalAddButton from '../FormComponents/OptionalAddButton'
import OptionalRemoveButton from '../FormComponents/OptionalRemoveButton'
import ContributorsAutocomplete from '../FormComponents/ContributorsAutocomplete'

export default function ContributorsSubsection(props : { getValues: Function, watch: Function, setValue: Function }) {

    const { control, formState: { errors } } = useFormContext()

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'contributors',
        keyName: 'contributorsId'
    })

    const contributorComponents = fields
        .map((item, index) => (
            <React.Fragment key={item.contributorsId}>
                {/* Contributor Name */}
                <Grid item lg={7.5}>
                    {/* <ControlledTextField 
                        label='Contributor Name' 
                        name={`contributors[${index}].name`} 
                        defaultValue='' 
                        isError={isError(errors?.contributors,'name',index)} 
                        errorMessage={'You must enter a name.'} 
                    /> */}
                    <ContributorsAutocomplete 
                        label='Contributor Name' 
                        name={`contributors[${index}].name`}
                        isError={isError(errors?.contributors,'name',index)}
                        errorMessage={'You must enter a name.'}
                    />
                </Grid>
                {/* Contributor Type */}
                <Grid item lg={3.5}>
                    <ControlledSelect 
                        label='Type' 
                        name={`contributors[${index}].type`}
                        options={contributorOptions} 
                        isError={isError(errors?.contributors,'type',index)} 
                        errorMessage={'You must enter a type.'} 
                    />
                </Grid>
                <Grid item lg={1}>
                    <OptionalRemoveButton isVisible={index !== 0} remove={remove} index={index} />
                </Grid>
            </React.Fragment>
        ))

    return (
        <>
            <Grid container columnSpacing={2} rowSpacing={5}>
                {contributorComponents}
            </Grid>

            <OptionalAddButton 
                handleClick={() => append({ contributorId: fields.length.toString(), contributor: null, type: '' })}
                isError={!!errors?.contributors}
                errorTooltip='Fix errors before adding contributors.'
                defaultTooltip='Add contributor'
                isVisible={fields.length <= 10}
            />
        </>
    )
}