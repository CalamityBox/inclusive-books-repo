import React from 'react'

import { Box, Grid, IconButton, Tooltip } from '@mui/material'
import { useFieldArray, useFormContext } from 'react-hook-form'
import ControlledSelect from './ControlledSelect'

import { editionOptions } from '../../utils/formOptions'
import ControlledTextField from './ControlledTextField'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import { requiredStringSchema } from '../../utils/inclusiveFormSchema'

import { isError } from '../../utils/handleErrors'
import OptionalRemoveButton from './OptionalRemoveButton'

export default function Editions(props : any) {

    const { control, formState: { errors }, getValues } = useFormContext()

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'editions',
        keyName: 'editionsId'
    })

    React.useEffect(() => {
        append({  editionId: fields.length.toString(), format: '', publicationDate: '' })
    },[])

    const editions = fields.map((item,index) => (
        <React.Fragment key={item.editionsId}>

            <Grid item lg={3.5}>
                <ControlledSelect 
                label='Format' 
                name={`editions[${index}].format`} 
                defaultValue='' 
                options={editionOptions} 
                isError={isError(errors?.editions,'format',index)}
                errorMessage={'Required.'}
                />
            </Grid>

            <Grid item lg={2.5}>
                <ControlledTextField 
                label='Publication Date' 
                name={`editions[${index}].publicationDate`} 
                defaultValue='' 
                isError={isError(errors?.editions,'publicationDate',index)}
                errorMessage={'Required.'}
                />
            </Grid>

            <Grid item lg={2}>
                <ControlledTextField 
                label='Cover URL' 
                name={`editions[${index}].coverUrl`} 
                defaultValue='' 
                isError={isError(errors?.editions,'coverUrl',index)}
                errorMessage={'Required.'}
                />
            </Grid>

            <Grid item lg={3}>
                <ControlledTextField 
                label='ISBN' 
                name={`editions[${index}].isbn`} 
                defaultValue='' 
                isError={isError(errors?.editions,'isbn',index)}
                errorMessage={'Required.'}
                />
            </Grid>
            
            <OptionalRemoveButton isVisible={index > 1} remove={remove} index={index} />

        </React.Fragment>
    ))

    return (
        <>
            <Grid container columnSpacing={1.5} rowSpacing={4}>
                {editions}
            </Grid>
            <Tooltip title={!!errors?.editions ? 'Fix errors before adding contributors.' : 'Add edition'} arrow>
                <Box sx={{ margin: 'auto' }}>
                    <IconButton 
                    aria-label="add contributor" 
                    size='large' 
                    color='primary' 
                    disabled={!!errors?.editions}
                    onClick={ () => append({  editionId: fields.length.toString(), format: '', publicationDate: '' }) } 
                >
                        <AddCircleIcon fontSize='inherit' />
                    </IconButton>
                </Box>
            </Tooltip>
        </>
    )

}