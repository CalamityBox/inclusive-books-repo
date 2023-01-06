import React from 'react'

import TextField from '@mui/material/TextField'
import { Controller, useFormContext } from 'react-hook-form'

// Context
import { CanEditContext } from './FormWrapper'

export default function ControlledTextField(props : { label? : string, name : string, defaultValue?: string, rules?: any, keyPattern?: RegExp, maxLength?: number, variant?: 'standard' | 'outlined' | 'filled', fullWidth?: boolean, multiline?: boolean, isError?: boolean, errorMessage?: string, helperText?: string }) {

    const canEdit = React.useContext(CanEditContext)
    const { control } = useFormContext()

    return (
        <Controller 
            name={props.name}
            defaultValue={props.defaultValue}
            control={control}
            rules={props.rules}
            render={({ field }) => (
                <TextField 
                    {...field}
                    disabled={!canEdit}
                    multiline={!!props.multiline}
                    fullWidth={props.fullWidth === undefined ? true : props.fullWidth}
                    label={props.label} 
                    variant={props.variant === undefined ? 'outlined' : props.variant} 
                    error={props.isError}
                    helperText={props.isError ? props.errorMessage : ''}
                    onKeyPress={(e) => {

                        if (props.keyPattern !== undefined && !props.keyPattern.test(e.key)) {
                            e.preventDefault()
                        }

                        if (props.maxLength !== undefined && (e.target as HTMLInputElement).defaultValue.length === props.maxLength) {
                            e.preventDefault()
                        }
                    }}
                />
            )}
        />
    )
}