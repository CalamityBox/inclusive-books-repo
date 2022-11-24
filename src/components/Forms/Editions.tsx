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

export default function Editions(props : any) {

    const { control, formState: { errors }, getValues } = useFormContext()

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'editions',
        keyName: 'editionsId'
    })

    React.useEffect(() => {
        console.log('running effect')
        append({  editionId: fields.length.toString(), format: '', publicationDate: '' })
    },[])

    // const editions = React.useMemo(
    //     () => {

    //         return fields.map((item,index) => (
    //                 <React.Fragment key={item.editionsId}>
        
    //                     <Grid item lg={3.5}>
    //                         <ControlledSelect 
    //                         label='Format' 
    //                         name={`editions[${index}].format`} 
    //                         defaultValue='' 
    //                         options={editionOptions} 
    //                         control={control} 
    //                         isError={isError(errors?.editions,'format',index)}
    //                         errorMessage={'Required.'}
    //                         />
    //                     </Grid>
        
    //                     <Grid item lg={2.5}>
    //                         <ControlledTextField 
    //                         label='Publication Date' 
    //                         name={`editions[${index}].publicationDate`} 
    //                         defaultValue='' 
    //                         control={control} 
    //                         isError={isError(errors?.editions,'publicationDate',index)}
    //                         errorMessage={'Required.'}
    //                         />
    //                     </Grid>
        
    //                     <Grid item lg={2}>
    //                         <ControlledTextField 
    //                         label='Cover URL' 
    //                         name={`editions[${index}].coverUrl`} 
    //                         defaultValue='' 
    //                         control={control} 
    //                         isError={isError(errors?.editions,'coverUrl',index)}
    //                         errorMessage={'Required.'}
    //                         />
    //                     </Grid>
        
    //                     <Grid item lg={3}>
    //                         <ControlledTextField 
    //                         label='ISBN' 
    //                         name={`editions[${index}].isbn`} 
    //                         defaultValue='' 
    //                         control={control} 
    //                         isError={isError(errors?.editions,'isbn',index)}
    //                         errorMessage={'Required.'}
    //                         />
    //                     </Grid>
    //                     {
    //                         // Optional remove button if it isn't the first edition
    //                         index === 0 ?
                                
    //                             <></>
        
    //                             :
        
    //                             <Grid item lg={1}>
    //                                 <Tooltip title='Remove contributor'>
    //                                     <IconButton size='large' onClick={() => remove(index)}>
    //                                         <HighlightOffIcon fontSize='inherit' />
    //                                     </IconButton>
    //                                 </Tooltip>
    //                             </Grid> 
        
    //                     }
    //                 </React.Fragment>
    //             ))
    //     },[fields]) 

    console.log('errors',errors)

    const editions = fields.map((item,index) => (
        <React.Fragment key={item.editionsId}>

            <Grid item lg={3.5}>
                <ControlledSelect 
                label='Format' 
                name={`editions[${index}].format`} 
                defaultValue='' 
                options={editionOptions} 
                control={control} 
                isError={isError(errors?.editions,'format',index)}
                errorMessage={'Required.'}
                />
            </Grid>

            <Grid item lg={2.5}>
                <ControlledTextField 
                label='Publication Date' 
                name={`editions[${index}].publicationDate`} 
                defaultValue='' 
                control={control} 
                isError={isError(errors?.editions,'publicationDate',index)}
                errorMessage={'Required.'}
                />
            </Grid>

            <Grid item lg={2}>
                <ControlledTextField 
                label='Cover URL' 
                name={`editions[${index}].coverUrl`} 
                defaultValue='' 
                control={control} 
                isError={isError(errors?.editions,'coverUrl',index)}
                errorMessage={'Required.'}
                />
            </Grid>

            <Grid item lg={3}>
                <ControlledTextField 
                label='ISBN' 
                name={`editions[${index}].isbn`} 
                defaultValue='' 
                control={control} 
                isError={isError(errors?.editions,'isbn',index)}
                errorMessage={'Required.'}
                />
            </Grid>
            {
                // Optional remove button if it isn't the first edition
                index === 0 ?
                    
                    <></>

                    :

                    <Grid item lg={1}>
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