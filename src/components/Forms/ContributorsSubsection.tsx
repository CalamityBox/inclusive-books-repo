import React from 'react'

import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import ControlledSelect from './ControlledSelect'
import ControlledTextField from './ControlledTextField'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import Box from '@mui/material/Box'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'

import { inclusiveFormSchema, contributorSchema, editionSchema, nameSchema, typeSchema } from '../../utils/inclusiveFormSchema'
import { Button, Icon, Tooltip } from '@mui/material'

import * as yup from 'yup'
import { nanoid } from 'nanoid'
import { useFieldArray, useFormContext } from 'react-hook-form'

import { contributorOptions } from '../../utils/formOptions'

import { isError } from '../../utils/handleErrors'
import OptionalAddButton from './OptionalAddButton'
import OptionalRemoveButton from './OptionalRemoveButton'

export default function ContributorsSubsection(props : { getValues: Function, watch: Function, setValue: Function }) {

    const { control, formState: { errors } } = useFormContext()

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'contributors',
        keyName: 'contributorsId'
    })

    React.useEffect(() => {
        append({  contributorId: fields.length.toString(), name: '', type: 'Author' })
    },[])

    const contributorComponents = fields
        .map((item, index) => (
            <React.Fragment key={item.contributorsId}>
                {/* Contributor Name */}
                <Grid item lg={7.5}>
                    <ControlledTextField 
                        label='Contributor Name' 
                        name={`contributors[${index}].name`} 
                        defaultValue='' 
                        isError={isError(errors?.contributors,'name',index)} 
                        errorMessage={'You must enter a name.'} 
                    />
                </Grid>
                {/* Contributor Type */}
                <Grid item lg={3.5}>
                    <ControlledSelect 
                        label='Type' 
                        name={`contributors[${index}].type`} 
                        defaultValue={index === 0 ? 'Author' : ''}
                        isDisabled={index === 0}
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
                handleClick={() => append({ contributorId: fields.length.toString(), name: '', type: '' })}
                isError={!!errors?.contributors}
                errorTooltip='Fix errors before adding contributors.'
                defaultTooltip='Add contributor'
                isVisible={fields.length <= 10}
            />
        </>
    )
}