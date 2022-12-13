import React from 'react'

import { Autocomplete, Avatar, Box, Card, Chip, TextField, Typography } from '@mui/material'

import { Controller, useFormContext } from 'react-hook-form'
import { IContributor } from '../../utils/Interfaces'
import useDatabase from '../../utils/useDatabase'
import { nanoid } from 'nanoid'
import { matchSorter } from 'match-sorter'

export default function ContributorsAutocomplete() {

    const { control } = useFormContext()
    const [options, isLoading] = useDatabase('contributors')
    const [selected,setSelected] = React.useState<IContributor | undefined>(undefined)

    const filterOptions = (options: any, { inputValue }: any) => matchSorter(options, inputValue,{ keys: ['name'] })

    console.log('options are :',options)

    return (
        <>
            <Controller
                name={'contributorName'}
                control={control}
                rules={{ required: true }}

                render={({ field: { onChange, ..._field } }) => (
                    <Autocomplete
                        {..._field}
                        options={!!options ? options.sort((a: any,b: any) => a.name.localeCompare(b.name)) : []}
                        onChange={(_,data : any) => {
                            onChange(data)
                            // console.log('data is',data)
                            setSelected(data)
                        }}
                        getOptionLabel={option => option.name}
                        groupBy={option => option.name[0]}

                        filterOptions={filterOptions}

                        renderOption={(props, option: IContributor) => (
                            <Box key={nanoid()} component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                <Typography>{option.name}</Typography>
                            </Box>
                        )}

                        renderInput={(params) => (
                            <TextField 
                                {...params} 
                                placeholder={'Contributor Name'} 
                            />
                        )}
                    />
                )}

            />
            {
                selected === undefined ?
                    "Select a contributor"
                    :
                    <Card>
                        <Avatar 
                            alt={selected.name}
                            src={selected.profilePictureUrl}
                        />
                        <Typography>{selected.name}</Typography>
                        <Typography variant='body1'>{selected.description}</Typography>
                    </Card>
            }
        </>
    )
}