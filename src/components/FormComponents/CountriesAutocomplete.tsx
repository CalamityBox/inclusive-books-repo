import React from 'react'

import { Autocomplete, Avatar, Box, Chip, TextField } from '@mui/material'
import { raceCultureParents } from '../../utils/formOptions'

import { Controller, useFormContext } from 'react-hook-form'

export default function CountriesAutocomplete(props: { name: string, options: any, label: string }) {

    const { control, watch, setValue } = useFormContext()
    const { name, options, label } = props

    return (
        <Controller
            name={name}
            control={control}
            rules={{ required: true }}

            render={({ field: { onChange, ..._field } }) => (
                <Autocomplete
                    {..._field}
                    multiple
                    freeSolo
                    options={options}
                    onChange={(_,data : any) => {
                        const newCountry = data.slice(-1)[0]
                        if (!(typeof newCountry === 'string') && newCountry !== undefined) {
                            const country : { code: 'string', label: 'string', race?: 'string', region?: 'string' } = newCountry
                            if (country?.race !== undefined && country.race?.length > 0) {
                                const childPath = `raceCulture.${country.race}`
                                watch(childPath)
                                setValue(childPath,true)
                                if (raceCultureParents.hasOwnProperty(country.race)) {
                                    let parentName = ''
                                    for (const [key,value] of Object.entries(raceCultureParents)) {
                                        if (key === country.race) {
                                            parentName = value
                                        }
                                    }
                                    const parentPath = `raceCulture.${parentName}`
                                    watch(parentPath)
                                    setValue(parentPath,true)
                                }
                            }
                        }
                        onChange(data)
                    }}
                    getOptionLabel={(option) => option.label}
                    groupBy={(option) => option.label[0]}

                    renderOption={(props, option) => (
                        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                            <img
                                loading="lazy"
                                width="20"
                                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                                alt=""
                            />
                            {option.label}
                        </Box>
                    )}

                    renderTags={(value: readonly string[], getTagProps) =>
                        value.map((option: any, index: number) => (
                          typeof option === 'string' ? 
                            <Chip variant="outlined" label={option} {...getTagProps({ index })} /> 
                            : 
                            <Chip variant="outlined" avatar={<Avatar alt={option.label} src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`} />} label={option.label} {...getTagProps({ index })} />
                        ))
                    }

                    renderInput={(params) => (
                        <TextField 
                            {...params} 
                            placeholder={label} 
                        />
                    )}
                />
            )}

        />
    )
}