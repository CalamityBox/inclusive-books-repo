import React from 'react'

// UI Components
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'

// Hook Form
import { Controller } from 'react-hook-form'
import { nanoid } from 'nanoid'
import InputLabel from '@mui/material/InputLabel'
import { TextField } from '@mui/material'
import createErrorMessage from '../../utils/createErrorMessage'

export default function ControlledSelection(props : { label?: string, name: string, defaultValue?: string, options: { value: string, label: string }[], control : any, errors: any }) {

    const selectOptions = props.options.map(
        option => <MenuItem key={nanoid()} value={option.label}>{option.label}</MenuItem>
    )

    const inputLabel = nanoid()

    return (
        <Controller 
            name={props.name}
            defaultValue={props.defaultValue}
            control={props.control}
            render={({field}) => (
                <Select
                    fullWidth
                    defaultValue={props.defaultValue}
                    label={props.label}
                >
                    {selectOptions}
                </Select>
            )}
        />
    )
}