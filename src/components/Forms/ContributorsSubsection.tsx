import React from 'react'

import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import ControlledSelect from './ControlledSelect'
import ControlledTextField from './ControlledTextField'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import Box from '@mui/material/Box'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import { createErrorMessage, handleContributorError, hasContributorError } from '../../utils/handleErrors'

import { inclusiveFormSchema } from '../../utils/inclusiveFormSchema'
import ToggleShow from './ToggleShow'
import { Tooltip } from '@mui/material'

export default function ContributorsSubsection(props : { control: any, errors: any, getValues: Function, watch: Function, setValue: Function }) {

    interface contributorOption {
        value: string;
        label: string;
    }

    const contributorOptions : contributorOption[] = [
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
    
    const [isVisible, setIsVisible] = React.useState([
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
    ])

    function handleAddContributor() {
        setIsVisible(prev => {
            const output = [...prev]
            for (const [index, element] of output.entries()) {
                if (!element) {
                    output[index] = true
                    return output
                }
            }
            return output
        })
    }

    function handleRemoveContributor(indexToChange : number) {
        setIsVisible(prev => prev.map( (value, index) => index === indexToChange ? !value : value ))
        props.setValue(`contributorName${indexToChange+2}`,'',{ shouldValidate: false })
        props.setValue(`contributorType${indexToChange+2}`,'',{ shouldValidate: false })
    }

    return (
        <>
            <Grid container columnSpacing={2} rowSpacing={5}>
                
                <Grid item lg={7}>
                    <ControlledTextField 
                        label='Contributor Name' 
                        name='contributorName1' 
                        defaultValue='' 
                        control={props.control} 
                        isError={!!props.errors.contributorName1} 
                        errorMessage={createErrorMessage(props.errors.contributorName1)} 
                    />
                </Grid>
                <Grid item lg={3}>
                    <ControlledSelect 
                        label='Type' 
                        name='contributorType1' 
                        defaultValue='Author'
                        isDisabled={true}
                        options={contributorOptions} 
                        control={props.control} 
                        isError={!!props.errors.contributorType1} 
                        errorMessage={createErrorMessage(props.errors.contributorType1)} 
                    />
                </Grid>

                <ToggleShow isVisible={isVisible[0]} remove={() => handleRemoveContributor(0)}>
                    <Grid item lg={7}>
                        <ControlledTextField 
                            label='Contributor Name' 
                            name='contributorName2' 
                            defaultValue='' 
                            control={props.control}
                            isError={!!props.errors.contributorName2} 
                            errorMessage={createErrorMessage(props.errors.contributorName2)}
                        />
                    </Grid>
                    <Grid item lg={3}>
                        <ControlledSelect 
                            label='Type' 
                            name='contributorType2' 
                            defaultValue='' 
                            options={contributorOptions} 
                            control={props.control}
                            isError={!!props.errors.contributorType2} 
                            errorMessage={createErrorMessage(props.errors.contributorType2)}
                        />
                    </Grid>
                </ToggleShow>

                <ToggleShow isVisible={isVisible[1]} remove={() => handleRemoveContributor(1)}>
                    <Grid item lg={7}>
                        <ControlledTextField 
                            label='Contributor Name' 
                            name='contributorName3' 
                            defaultValue='' 
                            control={props.control}
                            isError={!!props.errors.contributorName3} 
                            errorMessage={createErrorMessage(props.errors.contributorName3)}
                        />
                    </Grid>
                    <Grid item lg={3}>
                        <ControlledSelect 
                            label='Type' 
                            name='contributorType3' 
                            defaultValue='' 
                            options={contributorOptions} 
                            control={props.control}
                            isError={!!props.errors.contributorType3} 
                            errorMessage={createErrorMessage(props.errors.contributorType3)}
                        />
                    </Grid>
                </ToggleShow>

                <ToggleShow isVisible={isVisible[2]} remove={() => handleRemoveContributor(2)}>
                    <Grid item lg={7}>
                        <ControlledTextField 
                            label='Contributor Name' 
                            name='contributorName4' 
                            defaultValue='' 
                            control={props.control}
                            isError={!!props.errors.contributorName4} 
                            errorMessage={createErrorMessage(props.errors.contributorName4)}
                        />
                    </Grid>
                    <Grid item lg={3}>
                        <ControlledSelect 
                            label='Type' 
                            name='contributorType4' 
                            defaultValue='' 
                            options={contributorOptions} 
                            control={props.control}
                            isError={!!props.errors.contributorType4} 
                            errorMessage={createErrorMessage(props.errors.contributorType4)}
                        />
                    </Grid>
                </ToggleShow>

                <ToggleShow isVisible={isVisible[3]} remove={() => handleRemoveContributor(3)}>
                    <Grid item lg={7}>
                        <ControlledTextField 
                            label='Contributor Name' 
                            name='contributorName5' 
                            defaultValue='' 
                            control={props.control}
                            isError={!!props.errors.contributorName5} 
                            errorMessage={createErrorMessage(props.errors.contributorName5)}
                        />
                    </Grid>
                    <Grid item lg={3}>
                        <ControlledSelect 
                            label='Type' 
                            name='contributorType5' 
                            defaultValue='' 
                            options={contributorOptions} 
                            control={props.control}
                            isError={!!props.errors.contributorType5} 
                            errorMessage={createErrorMessage(props.errors.contributorType5)}
                        />
                    </Grid>
                </ToggleShow>

                <ToggleShow isVisible={isVisible[4]} remove={() => handleRemoveContributor(4)}>
                <Grid item lg={7}>
                        <ControlledTextField 
                            label='Contributor Name' 
                            name='contributorName6' 
                            defaultValue='' 
                            control={props.control}
                            isError={!!props.errors.contributorName6} 
                            errorMessage={createErrorMessage(props.errors.contributorName6)}
                        />
                    </Grid>
                    <Grid item lg={3}>
                        <ControlledSelect 
                            label='Type' 
                            name='contributorType6' 
                            defaultValue='' 
                            options={contributorOptions} 
                            control={props.control}
                            isError={!!props.errors.contributorType6} 
                            errorMessage={createErrorMessage(props.errors.contributorType6)}
                        />
                    </Grid>
                </ToggleShow>

                <ToggleShow isVisible={isVisible[5]} remove={() => handleRemoveContributor(5)}>
                    <Grid item lg={7}>
                        <ControlledTextField 
                            label='Contributor Name' 
                            name='contributorName7' 
                            defaultValue='' 
                            control={props.control}
                            isError={!!props.errors.contributorName7} 
                            errorMessage={createErrorMessage(props.errors.contributorName7)}
                        />
                    </Grid>
                    <Grid item lg={3}>
                        <ControlledSelect 
                            label='Type' 
                            name='contributorType7' 
                            defaultValue='' 
                            options={contributorOptions} 
                            control={props.control}
                            isError={!!props.errors.contributorType7} 
                            errorMessage={createErrorMessage(props.errors.contributorType7)}
                        />
                    </Grid>
                </ToggleShow>

                <ToggleShow isVisible={isVisible[6]} remove={() => handleRemoveContributor(6)}>
                    <Grid item lg={7}>
                        <ControlledTextField 
                            label='Contributor Name' 
                            name='contributorName8' 
                            defaultValue='' 
                            control={props.control}
                            isError={!!props.errors.contributorName8} 
                            errorMessage={createErrorMessage(props.errors.contributorName8)}
                        />
                    </Grid>
                    <Grid item lg={3}>
                        <ControlledSelect 
                            label='Type' 
                            name='contributorType8' 
                            defaultValue='' 
                            options={contributorOptions} 
                            control={props.control}
                            isError={!!props.errors.contributorType8} 
                            errorMessage={createErrorMessage(props.errors.contributorType8)}
                        />
                    </Grid>
                </ToggleShow>

                <ToggleShow isVisible={isVisible[7]} remove={() => handleRemoveContributor(7)}>
                    <Grid item lg={7}>
                        <ControlledTextField 
                            label='Contributor Name' 
                            name='contributorName9' 
                            defaultValue='' 
                            control={props.control}
                            isError={!!props.errors.contributorName9} 
                            errorMessage={createErrorMessage(props.errors.contributorName9)}
                        />
                    </Grid>
                    <Grid item lg={3}>
                        <ControlledSelect 
                            label='Type' 
                            name='contributorType9' 
                            defaultValue='' 
                            options={contributorOptions} 
                            control={props.control}
                            isError={!!props.errors.contributorType9} 
                            errorMessage={createErrorMessage(props.errors.contributorType9)}
                        />
                    </Grid>
                </ToggleShow>

                <ToggleShow isVisible={isVisible[8]} remove={() => handleRemoveContributor(8)}>
                    <Grid item lg={7}>
                        <ControlledTextField 
                            label='Contributor Name' 
                            name='contributorName10' 
                            defaultValue='' 
                            control={props.control}
                            isError={!!props.errors.contributorName10} 
                            errorMessage={createErrorMessage(props.errors.contributorName10)}
                        />
                    </Grid>
                    <Grid item lg={3}>
                        <ControlledSelect 
                            label='Type' 
                            name='contributorType10' 
                            defaultValue='' 
                            options={contributorOptions} 
                            control={props.control}
                            isError={!!props.errors.contributorType10} 
                            errorMessage={createErrorMessage(props.errors.contributorType10)}
                        />
                    </Grid>
                </ToggleShow>

            </Grid>

            {
                isVisible.every(value => value) ?
                <></>
                :
                <Box sx={{ margin: 'auto' }}>
                    <Tooltip title='Add contributor' arrow>
                        <IconButton aria-label="add contributor" size='large' color='primary' onClick={handleAddContributor}>
                            <AddCircleIcon fontSize='inherit' />
                        </IconButton>
                    </Tooltip>
                </Box>
            }

        </>
    )
}