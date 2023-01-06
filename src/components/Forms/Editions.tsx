import React from 'react'

import { Box, Divider, Grid, IconButton, Tooltip, Typography } from '@mui/material'
import { useFieldArray, useFormContext } from 'react-hook-form'
import ControlledSelect from '../FormComponents/ControlledSelect'

import { editionOptions, languageOptions } from '../../utils/formOptions'
import ControlledTextField from '../FormComponents/ControlledTextField'
import AddCircleIcon from '@mui/icons-material/AddCircle'

import { isError } from '../../utils/handleErrors'
import OptionalRemoveButton from '../FormComponents/OptionalRemoveButton'
import OptionalAddButton from '../FormComponents/OptionalAddButton'
import ControlledAutocomplete from '../FormComponents/ControlledAutocomplete'

export default function Editions(props : any) {

    const { control, formState: { errors } } = useFormContext()

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'editions',
        keyName: 'editionsId'
    })

    const editions = fields.map((item,index) => (
        <React.Fragment key={item.editionsId}>


            <Box sx={index > 0 ? {mt: 6} : {}}>

                <Typography variant='h6' sx={{ mb: 1 }}>Edition {index + 1}</Typography>
                
                <Grid container spacing={1.5} sx={{ alignItems: 'flex-start' }}>

                    {
                        index > 0 ? // First edition is the 'canonical edition', so the title and subtitle will match. Therefore, only render option to add alt title and subtitle in later editions
                            <>
                                <Grid item lg={11}>
                                    <ControlledTextField 
                                        label='Edition Title (Only if edition is different language)' 
                                        name={`editions[${index}].editionTitle`} 
                                        defaultValue='' 
                                        isError={isError(errors?.editions,'editionTitle',index)}
                                        maxLength={100}
                                    />
                                </Grid>
                                <Grid item lg={11}>
                                    <ControlledTextField 
                                        label='Edition Subtitle (Only if edition is different language)' 
                                        name={`editions[${index}].editionSubtitle`} 
                                        defaultValue='' 
                                        isError={isError(errors?.editions,'editionSubtitle',index)}
                                        maxLength={100}
                                    />
                                </Grid>
                            </>
                            :
                            <></>
                    }

                    <Grid item lg={5.5}>
                        <ControlledSelect 
                            label='Format *' 
                            name={`editions[${index}].format`} 
                            defaultValue='' 
                            options={editionOptions} 
                            isError={isError(errors?.editions,'format',index)}
                            errorMessage={'Required.'}
                        />
                    </Grid>

                    <Grid item lg={5.5}>
                        <ControlledTextField 
                            label='Publication Date *' 
                            name={`editions[${index}].publicationDate`} 
                            defaultValue='' 
                            isError={isError(errors?.editions,'publicationDate',index)}
                            errorMessage={'Required.'}
                            keyPattern={/\d/}
                            maxLength={4}
                        />
                    </Grid>

                    <Grid item lg={1}>
                    </Grid>

                    <Grid item lg={11}>
                        <ControlledTextField 
                            label='Cover URL *' 
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
                            label='ISBN *'
                            keyPattern={/[\d-]/}
                            maxLength={17}
                            options={[]}
                            multiple={true}
                            freeSolo={true}
                            isError={isError(errors?.editions,'isbn',index)}
                            helperText={'Required.'}
                        />
                    </Grid>

                    <Grid item lg={11}>
                        <ControlledAutocomplete
                            name={`editions[${index}].languages`}
                            label='Language(s) *'
                            options={languageOptions}
                            multiple={true}
                            freeSolo={true}
                            isError={isError(errors?.editions,'languages',index)}
                            helperText={'Required.'}
                        />
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