import { Typography } from '@mui/material'
import TextField from '@mui/material/TextField'
import { Box } from '@mui/system'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import createErrorMessage from '../../utils/createErrorMessage'

export default function ControlledTextField(props : { label? : string, name : string, defaultValue?: string, control: any, errors: any, helperText?: string }) {

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
                    error={!!props.errors}
                    helperText={createErrorMessage(props.errors)}
                />
            )}
        />
    )
}