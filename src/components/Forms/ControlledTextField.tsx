import React from 'react'

import TextField from '@mui/material/TextField'
import { Controller, useFormContext } from 'react-hook-form'

export default function ControlledTextField(props : { label? : string, name : string, defaultValue?: string, variant?: 'standard' | 'outlined' | 'filled', fullWidth?: boolean, isError?: boolean, errorMessage?: string, helperText?: string }) {

    const { control } = useFormContext()

    return (
        <Controller 
            name={props.name}
            defaultValue={props.defaultValue}
            control={control}
            render={({ field }) => (
                <TextField 
                    {...field}
                    fullWidth={props.fullWidth === undefined ? true : props.fullWidth}
                    label={props.label} 
                    variant={props.variant === undefined ? 'outlined' : props.variant} 
                    error={props.isError}
                    helperText={props.isError ? props.errorMessage : ''}
                />
            )}
        />
    )
}