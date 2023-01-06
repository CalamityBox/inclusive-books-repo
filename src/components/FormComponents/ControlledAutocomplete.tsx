import React from 'react'

import { Autocomplete, Box, Chip, TextField } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'

// Context
import { CanEditContext } from './FormWrapper'

export default function CountriesAutocomplete(props: { name: string, options: any, label: string, keyPattern?: RegExp, maxLength?: number, placeholder?: string, multiple?: boolean, freeSolo?: boolean, isError: boolean, helperText: string }) {

    const canEdit = React.useContext(CanEditContext)

    const { control } = useFormContext()
    const { name, options, label, placeholder, multiple, freeSolo, isError, helperText } = props

    return (
        <Controller
            name={name}
            control={control}
            rules={{ required: true }}

            render={({ field: { onChange, ..._field } }) => (
                <Autocomplete
                    {..._field}
                    disabled={!canEdit}
                    multiple={!!multiple}
                    freeSolo={!!freeSolo}
                    options={options}
                    onChange={(_,data : any) => onChange(data)}
                    getOptionLabel={(option) => option.label ?? option}

                    renderOption={(props, option) => (
                        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                            {option}
                        </Box>
                    )}

                    renderTags={(value: readonly string[], getTagProps) =>
                        value.map(
                            (option: any, index: number) => <Chip label={option} {...getTagProps({ index })} />
                    )}

                    renderInput={(params) => (
                        <TextField 
                            {...params} 
                            placeholder={placeholder} 
                            label={label} 
                            error={isError} 
                            helperText={isError ? helperText : ''}
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
            )}

        />
    )
}