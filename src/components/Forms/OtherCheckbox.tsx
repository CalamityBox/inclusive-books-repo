import React from 'react'

import { Box, Checkbox, FormControlLabel } from '@mui/material'
import ControlledTextField from './ControlledTextField'
import { useFieldArray, useFormContext } from 'react-hook-form'
import OptionalRemoveButton from './OptionalRemoveButton'
import OptionalAddButton from './OptionalAddButton'

export default function OtherCheckbox(props : { name: string, keyName: string, enableDynamicAdd?: boolean }) {

    const { control, formState: {errors} } = useFormContext()

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'generalSubjectOther',
        keyName: 'generalSubjectOtherId'
    })

    console.log('errors are',errors)

    const isError = errors.hasOwnProperty(props.name)

    const textFields = fields.map((item, index) => (
        <Box key={item.generalSubjectOtherId} sx={{ m: 0, p: 0, display: 'flex' }}>
            <FormControlLabel label='Other:' control={<Checkbox checked={true} />} />
            
            <ControlledTextField
                name={`${props.name}[${index}].${props.keyName}`}
                variant='standard'
                fullWidth={false}
                isError={isError}
                errorMessage={'Required.'}
            />

            <OptionalRemoveButton isVisible={true} remove={() => remove(index)} index={index} />
        </Box>
    ))

    return (
        <>
            {textFields}
            <OptionalAddButton
                handleClick={() => append({ generalSubjectOtherId: fields.length, value: '' })}
                isVisible={fields.length <= 10}
                isError={isError}
                errorTooltip='You must fix errors before adding subjects'
                defaultTooltip='Add subject'
            />
        </>
    )
}