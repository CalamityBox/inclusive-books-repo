import React from 'react'

// UI Components
import Card from '@mui/material/Card'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import MenuItem from '@mui/material/MenuItem'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'

// Hook Form
import { Controller, FieldError, FieldErrorsImpl, Merge, useFormContext } from 'react-hook-form'
import ControlledTextField from './ControlledTextField'
import FormCard from './FormCard'
import Box from '@mui/material/Box'
import { Grid } from '@mui/material'
import ControlledSelect from './ControlledSelect'

export default function InclusiveFormSectionOne(props : any) {

    const {
        control,
        formState: { errors }
    } = useFormContext()

    function createErrorMessage(error : FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined) : string {
        return typeof error?.message === 'string' ? error.message : ''
    }

    interface contributorOption {
        value: string;
        label: string;
    }

    const contributorOptions : contributorOption[] = [
        {
            value: '',
            label: ''
        },
        {
            value: 'author',
            label: 'Author'
        },
        {
            value: 'illustrator',
            label: 'Illustrator'
        },
        {
            value: 'editor',
            label: 'Editor'
        },
        {
            value: 'translator',
            label: 'Translator'
        },
        {
            value: 'contributor',
            label: 'Contributor'
        }
    ]

    return (
        <>
            <FormCard label='Book Title' description='Enter the title of the book. Please use proper case for the title. "This Is An Example Of Proper Case."'>
                <ControlledTextField name='title' defaultValue='' control={control} errors={errors.title} />
            </FormCard>

            <FormCard label='Book Subtitle' description='Enter the subtitle of the book. Please use proper case for the subtitle. "This Is An Example Of Proper Case."'>
                <ControlledTextField name='subtitle' defaultValue='' control={control} errors={errors.subtitle} />
            </FormCard>

            <FormCard label='Series Info'>
                <Grid container spacing={2}>
                    <Grid item lg={8}>
                        <ControlledTextField label='Book Series Name' name='series' defaultValue='' control={control} errors={errors.series} />
                    </Grid>
                    <Grid item lg={4}>
                        <ControlledTextField label='Number in Series' name='seriesNumber' defaultValue='' control={control} errors={errors.seriesNumber} />
                    </Grid>
                </Grid>
            </FormCard>

            <FormCard label='Contributors' description='Enter the names of all contributors for this book.'>
                <Grid container spacing={2}>
                    <Grid item lg={8}>
                        <ControlledTextField label='Name' name='contributorName1' defaultValue='' control={control} errors={errors.contributorName1} />
                    </Grid>
                    <Grid item lg={4}>
                        <ControlledSelect label='Type' name='contributorType1' defaultValue='' options={contributorOptions} control={control} errors={errors.contributorType1} />
                    </Grid>
                </Grid>
            </FormCard>




            {/* <Card variant='outlined' sx={{ py: 6, px: 10 }}>
                <Controller 
                    name='contributorName1'
                    defaultValue=''
                    control={control}
                    render={({field}) => (
                        <TextField 
                            {...field} 
                            label='Name' 
                            variant='outlined' 
                            error={!!errors.contributorName1}
                            helperText={createErrorMessage(errors.contributorName1)}
                        />
                    )}
                />
                
                <Controller 
                    name='contributorType1'
                    defaultValue=''
                    control={control}
                    render={({field}) => (
                        <>
                            <Select 
                                label='Type' 
                                labelId='contributor-select-id' 
                                autoWidth
                                error={!!errors.contributorType1}
                            >
                                <MenuItem value='author'>Author</MenuItem>
                                <MenuItem value='illustrator'>Illustrator</MenuItem>
                                <MenuItem value='editor'>Editor</MenuItem>
                                <MenuItem value='translator'>Translator</MenuItem>
                                <MenuItem value='contributor'>Contributor</MenuItem>
                            </Select>
                        </>
                    )}
                />
            </Card> */}

            {/* <Card variant='outlined' sx={{ display: 'flex', flexDirection: 'column', rowGap: 3, py: 6, px: 6 }}>
                <Controller 
                    name='seriesNumber'
                    defaultValue=''
                    control={control}
                    render={({field}) => (
                        <>
                            <FormLabel>Genre</FormLabel>
                            <RadioGroup
                                aria-labelledby="genre-radio-buttons-group-label"
                                defaultValue=""
                                name="genre-radio-buttons-group"
                            >
                                <FormControlLabel value="fiction" control={<Radio />} label="Fiction" />
                                <FormControlLabel value="nonfiction" control={<Radio />} label="Nonfiction" />
                                <FormControlLabel value="biography" control={<Radio />} label="Biography" />
                                <FormControlLabel value="fictionalized-biography" control={<Radio />} label="Fictionalized Biography" />
                                <FormControlLabel value="historical-fiction" control={<Radio />} label="Historical Fiction" />
                                <FormControlLabel value="fantasy" control={<Radio />} label="Fantasy" />
                                <FormControlLabel value="anthology" control={<Radio />} label="Anthology" />
                                <FormControlLabel value="memoir" control={<Radio />} label="Memoir" />
                            </RadioGroup>
                        </>
                    )}
                />
            </Card> */}
        </>
    )
}