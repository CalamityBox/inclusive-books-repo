import React from 'react'

import { Box, Divider, Grid, IconButton, Tooltip } from '@mui/material'
import { useFieldArray, useFormContext } from 'react-hook-form'
import ControlledSelect from './ControlledSelect'

import { editionOptions } from '../../utils/formOptions'
import ControlledTextField from './ControlledTextField'
import AddCircleIcon from '@mui/icons-material/AddCircle'

import { isError } from '../../utils/handleErrors'
import OptionalRemoveButton from './OptionalRemoveButton'
import OptionalAddButton from './OptionalAddButton'
import ControlledAutocomplete from './ControlledAutocomplete'

export default function Editions(props : any) {

    const { control, formState: { errors } } = useFormContext()

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

            <Box sx={index > 0 ? {mt: 6} : {}}>

                <Grid container spacing={1.5} sx={{ alignItems: 'flex-start' }}>
                    <Grid item lg={5.5}>
                        <ControlledSelect 
                            label='Format' 
                            name={`editions[${index}].format`} 
                            defaultValue='' 
                            options={editionOptions} 
                            isError={isError(errors?.editions,'format',index)}
                            errorMessage={'Required.'}
                        />
                    </Grid>

                    <Grid item lg={5.5}>
                        <ControlledTextField 
                            label='Publication Date' 
                            name={`editions[${index}].publicationDate`} 
                            defaultValue='' 
                            isError={isError(errors?.editions,'publicationDate',index)}
                            errorMessage={'Required.'}
                        />
                    </Grid>

                    <Grid item lg={1}>
                    </Grid>

                    <Grid item lg={11}>
                        <ControlledTextField 
                            label='Cover URL' 
                            name={`editions[${index}].coverUrl`} 
                            defaultValue='' 
                            isError={isError(errors?.editions,'coverUrl',index)}
                            errorMessage={'Required.'}
                        />
                    </Grid>

                    <Grid item lg={1}>
                        <OptionalRemoveButton isVisible={index !== 0} remove={remove} index={index} />
                    </Grid>

                    <Grid item lg={11}>
                        <ControlledAutocomplete 
                            name={`editions[${index}].isbn`}
                            label='ISBN'
                            options={[]}
                            multiple={true}
                            freeSolo={true}
                            isError={isError(errors?.editions,'isbn',index)}
                            helperText={'Required.'}
                        />
                        {/* <ControlledTextField 
                            label='ISBN' 
                            name={`editions[${index}].isbn`} 
                            defaultValue='' 
                            isError={isError(errors?.editions,'isbn',index)}
                            errorMessage={'Required.'}
                        /> */}
                    </Grid>

                    
                    <Grid item lg={1}>
                    </Grid>
                </Grid>

            </Box>
        </React.Fragment>
    ))

    return (
        <>
            {editions}
            <OptionalAddButton 
                handleClick={() => append({  editionId: fields.length.toString(), format: '', publicationDate: '' })}
                isVisible={fields.length <= 10}
                isError={!!errors?.editions}
                errorTooltip='Fix errors before adding contributors.'
                defaultTooltip='Add edition'
            />
        </>
    )

}