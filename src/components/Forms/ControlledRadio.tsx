import React from 'react'

import { Controller } from 'react-hook-form'
import { Button, FormControlLabel, IconButton, Radio, RadioGroup, Tooltip, Typography } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info'
import { nanoid } from 'nanoid'
import InfoTooltip from '../InfoTooltip'

export default function ControlledRadio(props : { label: string, name: string, defaultValue?: string, options: { value: string, label: string, tooltip?: string, examples?: string }[], control: any, isError?: boolean, errorMessage?: string }) {

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
        <Controller 
            name={props.name}
            defaultValue={props.defaultValue}
            control={props.control}
            render={({field}) => (
                <RadioGroup
                    {...field}
                    name={props.name}
                >
                    {options}
                </RadioGroup>
            )}
        />
    )
}