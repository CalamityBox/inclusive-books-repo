import React from 'react'

import TextField from '@mui/material/TextField'
import { Controller } from 'react-hook-form'

export default function ControlledTextField(props : { label? : string, name : string, defaultValue?: string, control: any, isError?: boolean, errorMessage?: string, helperText?: string }) {

    return (
        <Controller 
            name={props.name}
            defaultValue={props.defaultValue}
            control={props.control}
            render={({field}) => (
                <TextField 
                    {...field}
                    fullWidth
                    label={props.label} 
                    variant='outlined' 
                    error={props.isError}
                    helperText={props.isError ? props.errorMessage : ''}
                />
            )}
        />
    )
}