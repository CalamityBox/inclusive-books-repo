import React from 'react'

// Components
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import FilterGroup from '../../components/Filtering/FilterGroup'

export default function AdvancedSearch() {

    function handleChange(event : any) {
        console.log('value of this event is:',event.target.value)
        setRaceCultureOptions(
            prevOptions => prevOptions.map(
                option => {
                    
                    if (option.label === event.target.value) {
                        return {
                            ...option,
                            checked: !option.checked
                        }
                    } else {
                        return {
                            ...option,
                            subOptions: option.subOptions.map(
                                subOption => {
                                    console.log('suboption label is: ',subOption.label)
                                    if (subOption.label === event.target.value) {
                                        console.log(subOption.label,' matches the value of the event, ',event.target.value)
                                        return {
                                            ...subOption,
                                            checked: !subOption.checked
                                        }
                                    } else {
                                        console.log(subOption.label,' does not match the value of the event, ',event.target.value)
                                        return subOption
                                    }
                                }
                            )
                        }
                    }

                }
            )
        )
    }

    const raceCultureOptionsDefault = [
        {
            label: 'Asian',
            checked: true,
            subOptions: [
                {
                    label: 'East Asian',
                    checked: false
                },
                {
                    label: 'West Asian',
                    checked: false
                },
                {
                    label: 'South Asian',
                    checked: false
                },
                {
                    label: 'Southeast Asian',
                    checked: false
                }
            ]
        },
        {
            label: 'Black / African',
            checked: false,
            subOptions: []
        },
        {
            label: 'Indigenous',
            checked: false,
            subOptions: [
                {
                    label: 'Native American / First Nations',
                    checked: false
                },
                {
                    label: 'Inuit',
                    checked: false
                }
            ]
        }
    ]

    const [raceCultureOptions, setRaceCultureOptions] = React.useState(raceCultureOptionsDefault)

    console.log('race culture options is: ',raceCultureOptions)

    return (
        <>
            <Typography variant='h4' component='h1' color='primary' marginBottom={2}>
                Advanced Search
            </Typography>

            <Card variant='outlined'>
                <form>

                    <FilterGroup options={raceCultureOptions} handleChange={handleChange} />
                    
                </form>

            </Card>
        </>
    )
}