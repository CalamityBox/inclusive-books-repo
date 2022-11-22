import React from 'react'

import { Controller } from 'react-hook-form'
import { Button, Checkbox, FormControlLabel, FormGroup, FormHelperText, IconButton, Radio, RadioGroup, Tooltip, Typography } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info'
import { nanoid } from 'nanoid'
import InfoTooltip from '../InfoTooltip'

export default function ControlledRadio(props : { label: string, name: string, defaultValue?: string, options: { value: string, label: string, tooltip?: string, examples?: string }[], control: any, isError?: boolean, errorMessage?: string }) {

    const options = props.options.map(
        (option, index) => (
            <FormControlLabel
                key={nanoid()}
                control={
                    <Controller
                        name={`grade.option${index}`}
                        control={props.control}
                        render={({field: props}) => (
                            <>
                                <Checkbox {...props} checked={props.value} onChange={(e) => props.onChange(e.target.checked)} />
                                <InfoTooltip isVisible={!!option.tooltip}>
                                    <Typography variant='h6'>{option.label}</Typography>
                                    <Typography>{option.tooltip}</Typography>
                                </InfoTooltip>
                            </>
                        )} 
                    />
                }
                label={option.label}
            />
        )
    )

    return (
        <>
            {props.isError ? <FormHelperText error>{props.errorMessage}</FormHelperText> : <></>}
            <FormGroup>
                {options}
            </FormGroup>
        </>
    )
}