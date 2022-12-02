import React from 'react'

import { Controller, useFormContext } from 'react-hook-form'
import { Button, FormControlLabel, FormHelperText, IconButton, Radio, RadioGroup, Tooltip, Typography } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info'
import { nanoid } from 'nanoid'
import InfoTooltip from '../InfoTooltip'

export default function ControlledRadio(props : { label: string, name: string, defaultValue?: string, options: { value: string, label: string, tooltip?: string, examples?: string }[], isError?: boolean, errorMessage?: string }) {

    const { control } = useFormContext()

    const options = props.options.map(
        option => (
            <FormControlLabel
                key={nanoid()} 
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
            {props.isError ? <FormHelperText error>{props.errorMessage}</FormHelperText> : <></>}
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