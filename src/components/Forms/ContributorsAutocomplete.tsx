import React from 'react'

import { Autocomplete, Avatar, Box, TextField, Typography } from '@mui/material'

import { Controller, useFormContext } from 'react-hook-form'
import { IContributor } from '../../utils/Interfaces'
import { readDatabase } from '../../utils/useDatabase'
import { nanoid } from 'nanoid'
import { matchSorter } from 'match-sorter'
import InfoTooltip from '../InfoTooltip'

export default function ContributorsAutocomplete(props: { name: string, label: string, setSelected?: Function, isError: boolean, errorMessage: string }) {

    const { control } = useFormContext()
    const [options, isLoading] = readDatabase('contributors')

    const filterOptions = (options: any, { inputValue }: any) => matchSorter(options, inputValue,{ keys: ['name'] })

    return (
        <>
            <Controller
                name={props.name}
                control={control}
                rules={{ required: true }}

                render={({ field: { onChange, ..._field } }) => (
                    <Autocomplete
                        {..._field}
                        openOnFocus={false}
                        onMouseDownCapture={(e) => e.stopPropagation()}
                        options={!!options ? options : []}
                        onChange={(_,data : any) => {
                            onChange(data)
                            // console.log('data is',data)
                            // Allows component to expose selected contributor, if needed
                            if (props?.setSelected !== undefined) {
                                props.setSelected(data)
                            }
                        }}
                        
                        getOptionLabel={option => option.name}
                        // groupBy={option => option.name[0]}

                        filterOptions={filterOptions}

                        renderOption={(props, option: IContributor) => (
                            <Box key={nanoid()} component="li" {...props}>
                                <Avatar
                                    alt={option.name}
                                    src={!!option?.profilePictureUrl ? option.profilePictureUrl : ''}
                                    imgProps={{ loading: 'lazy' }}
                                    sx={{ mr: 2 }}
                                />
                                <Typography>{option.name}</Typography>
                                {
                                    !!option?.description ?
                                        <InfoTooltip isVisible={true}>
                                            <Typography variant='h6'>{option.name}</Typography>
                                            <Typography>{option.description}</Typography>
                                        </InfoTooltip>
                                        :
                                        <></>
                                }
                            </Box>
                        )}

                        renderInput={(params) => (
                            <TextField 
                                {...params} 
                                label={props.label}
                                placeholder={'Contributor Name'}
                                error={props.isError}
                                helperText={props.isError ? props.errorMessage : ''}
                            />
                        )}
                    />
                )}

            />
        </>
    )
}