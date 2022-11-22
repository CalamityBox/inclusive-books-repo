import React from 'react'

import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import ControlledSelect from './ControlledSelect'
import ControlledTextField from './ControlledTextField'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import Box from '@mui/material/Box'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'

import { inclusiveFormSchema, contributorSchema, editionSchema, nameSchema, typeSchema } from '../../utils/inclusiveFormSchema'
import { Button, Icon, Tooltip } from '@mui/material'

import * as yup from 'yup'
import { nanoid } from 'nanoid'

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

    function handleAddContributor() {
        setContributors((prev : any) => {
            if (prev.length === 0) {
                return [0]
            }
            const output = [...prev]
            let i = 0
            while (true) {
                if (!output.includes(i)) {
                    output.push(i)
                    return output
                } else {
                    i++
                }
            }
        })
    }

    // console.log('reach result',yup.reach(contributorSchema,'name'))
    // const rootValue = props.getValues('contributors[0].name')
    // console.log('root value: ',rootValue)
    // console.log( 'is valid at result: ', nameSchema.isValidSync(rootValue) )

    console.log('errors are',props.errors)

    function handleRemoveContributor(indexToChange : number,value : number) {
        console.log('index to remove is',indexToChange)
        props.setValue(`contributors[${value}].name`,'', { shouldValidate: false })
        props.setValue(`contributors[${value}].type`,'', { shouldValidate: false })
        setContributors((prev : any) => {
            const output = [...prev].filter((value, index) => index !== indexToChange)
            console.log('output is',output)
            return output
        })
    }

    function getContributorErrorMessage(key: string) {
        let output=''
        try {
            output = props.errors?.contributors[0][key].message
        } catch (errors) {
            output = ''
        }
        return output
    }

    const [contributors, setContributors] = React.useState<any>([])

    console.log('contributors',contributors)

    const contributorComponents = contributors.map(
        (value : any, index : number) => (  
            <React.Fragment key={nanoid()}>
               <Grid item lg={7}>
                    <ControlledTextField 
                        label='Contributor Name' 
                        name={`contributors[${value+1}].name`} 
                        defaultValue='' 
                        control={props.control} 
                        isError={!!props.errors?.contributors && !nameSchema.isValidSync(props.getValues(`contributors[${value+1}].name`))} 
                        errorMessage={'You must enter a name.'} 
                    />
                </Grid>
                <Grid item lg={3}>
                    <ControlledSelect 
                        label='Type' 
                        name={`contributors[${value+1}].type`} 
                        defaultValue=''
                        isDisabled={false}
                        options={contributorOptions} 
                        control={props.control} 
                        isError={!!props.errors?.contributors && !typeSchema.isValidSync(props.getValues(`contributors[${value+1}].type`))} 
                        errorMessage={'You must enter a type.'} 
                    />
                </Grid>
                <Grid item lg={2}>
                    <Tooltip title='Remove contributor'>
                        <IconButton size='large' onClick={() => handleRemoveContributor(index, value+1)}>
                            <HighlightOffIcon fontSize='inherit' />
                        </IconButton>
                    </Tooltip>
                </Grid> 
            </React.Fragment>
        )
    )

    return (
        <>
            <Grid container columnSpacing={2} rowSpacing={5}>
                
                <Grid item lg={7}>
                    <ControlledTextField 
                        label='Contributor Name' 
                        name='contributors[0].name' 
                        defaultValue='' 
                        control={props.control} 
                        isError={!!props.errors?.contributors && !nameSchema.isValidSync(props.getValues('contributors[0].name'))} 
                        errorMessage={getContributorErrorMessage('name')} 
                    />
                </Grid>
                <Grid item lg={3}>
                    <ControlledSelect 
                        label='Type' 
                        name='contributors[0].type' 
                        defaultValue='Author'
                        isDisabled={true}
                        options={contributorOptions} 
                        control={props.control} 
                        isError={!!props.errors?.contributors && !typeSchema.isValidSync(props.getValues('contributors[0].type'))} 
                        errorMessage={getContributorErrorMessage('type')} 
                    />
                </Grid>

                {contributorComponents}

                {/* <ToggleShow isVisible={isVisible[0]} remove={() => handleRemoveContributor(0)}>
                    <Grid item lg={7}>
                        <ControlledTextField 
                            label='Contributor Name' 
                            name='contributors[2].name' 
                            defaultValue='' 
                            control={props.control}
                            isError={props.errors?.contributors !== undefined && !nameSchema.isValidSync(props.getValues('contributors[2].name'))} 
                            errorMessage={'You must enter a name.'}
                        />
                    </Grid>
                    <Grid item lg={3}>
                        <ControlledSelect 
                            label='Type' 
                            name='contributors[2].type' 
                            defaultValue='' 
                            options={contributorOptions} 
                            control={props.control}
                            isError={props.errors?.contributors !== undefined && !typeSchema.isValidSync(props.getValues('contributors[2].type'))} 
                            errorMessage={'You must enter a type.'}
                        />
                    </Grid>
                </ToggleShow> */}

                {/* <ToggleShow isVisible={isVisible[1]} remove={() => handleRemoveContributor(1)}>
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
                </ToggleShow> */}

            </Grid>

            <Tooltip title={!!props.errors?.contributors ? 'Fix errors before adding contributors.' : 'Add contributor'} arrow>
                <Box sx={{ margin: 'auto' }}>
                    <IconButton aria-label="add contributor" size='large' color='primary' onClick={handleAddContributor} disabled={!!props.errors?.contributors}>
                        <AddCircleIcon fontSize='inherit' />
                    </IconButton>
                </Box>
            </Tooltip>

        </>
    )
}