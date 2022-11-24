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
                <Grid item lg={7}>
                    <ControlledTextField 
                        label='Contributor Name' 
                        name={`contributors[${index}].name`} 
                        defaultValue='' 
                        control={control} 
                        isError={isError(errors?.contributors,'name',index)} 
                        errorMessage={'You must enter a name.'} 
                    />
                </Grid>
                {/* Contributor Type */}
                <Grid item lg={3}>
                    <ControlledSelect 
                        label='Type' 
                        name={`contributors[${index}].type`} 
                        defaultValue={index === 0 ? 'Author' : ''}
                        isDisabled={index === 0}
                        options={contributorOptions} 
                        control={control} 
                        isError={isError(errors?.contributors,'type',index)} 
                        errorMessage={'You must enter a type.'} 
                    />
                </Grid>
                {
                    // Optional remove button if it isn't the first contributor
                    index === 0 ?
                        
                        <></>

                        :

                        <Grid item lg={2}>
                            <Tooltip title='Remove contributor'>
                                <IconButton size='large' onClick={() => remove(index)}>
                                    <HighlightOffIcon fontSize='inherit' />
                                </IconButton>
                            </Tooltip>
                        </Grid> 

                }
            </React.Fragment>
        ))

    return (
        <>
            <Grid container columnSpacing={2} rowSpacing={5}>
                {contributorComponents}
            </Grid>

            <Tooltip title={!!errors?.contributors ? 'Fix errors before adding contributors.' : 'Add contributor'} arrow>
                <Box sx={{ margin: 'auto' }}>
                    <IconButton 
                    aria-label="add contributor" 
                    size='large' 
                    color='primary' 
                    disabled={!!errors?.contributors}
                    onClick={ () => append({ contributorId: fields.length.toString(), name: '', type: '' }) } 
                >
                        <AddCircleIcon fontSize='inherit' />
                    </IconButton>
                </Box>
            </Tooltip>

        </>
    )
}