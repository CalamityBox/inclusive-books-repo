import React from 'react'

import { Controller, useFormContext } from 'react-hook-form'
import { FormControlLabel, FormHelperText, Radio, RadioGroup, Typography } from '@mui/material'
import { nanoid } from 'nanoid'
import InfoTooltip from '../InfoTooltip'
import { simpleFormOption } from '../../utils/formOptions'

// Context
import { CanEditContext } from './FormWrapper'

export default function ControlledRadio(props : { label: string, name: string, defaultValue?: string, options: simpleFormOption[] }) {

    const canEdit = React.useContext(CanEditContext)

    const { control, formState: { errors } } = useFormContext()

    const options = props.options.map(
        option => (
            <FormControlLabel
                key={nanoid()} 
                disabled={!canEdit}
                value={option.value} 
                control={<Radio />} 
                label={
                    <>
                        {option.label}
                        <InfoTooltip isVisible={!!option.tooltip}>
                            <Typography variant='h6'>{option.label}</Typography>
                            <Typography>{option.tooltip}</Typography>
                        </InfoTooltip>
                    </>
                } 
            />
        )
    )

    return (
        <>
            {
                !!errors[props.name] ? 
                    <FormHelperText error>
                        <>
                            {errors[props.name]?.message}
                        </>
                    </FormHelperText> 
                    : 
                    <></>
            }
            <Controller 
                name={props.name}
                defaultValue={props.defaultValue}
                control={control}
                render={({field}) => (
                    <RadioGroup
                        {...field}
                        name={props.name}
                    >
                        {options}
                    </RadioGroup>
                )}
            />
        </>
    )
}