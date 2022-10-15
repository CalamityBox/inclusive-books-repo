import React from 'react'

// Components
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import FilterGroup from '../../components/Filtering/FilterGroup'

export default function AdvancedSearch() {

    function updateChildCheckBoxes(subOptions : any, isOn : boolean) {
        return subOptions.map(
            (option : any) => ({ ...option, checked: isOn })
        )
    }

    function updateOptions(options : any, labelToUpdate : string) {
        
        return options.map(
            (option : any) => {

                const isParent = 'subOptions' in option && option.subOptions.length > 0

                if (option.label === labelToUpdate) {
                    if (isParent) {
                        return {
                            ...option,
                            checked: !option.checked,
                            subOptions: updateChildCheckBoxes(option.subOptions, !option.checked)
                        }
                    } else {
                        return {
                            ...option,
                            checked: !option.checked
                        }
                    }
                } else if (isParent) {
                    return {
                        ...option,
                        subOptions: updateOptions(option.subOptions, labelToUpdate)
                    }
                } else {
                    return option
                }


            }
        )

    }

    function handleChange(event : any) {
        console.log('value of this event is:',event.target.value)
        setRaceCultureOptions(
            prevOptions => updateOptions(prevOptions, event.target.value)
        )
    }

    const raceCultureOptionsDefault = [
        {
            label: 'Asian',
            checked: true,
            indeterminate: false,
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
            indeterminate: false,
            subOptions: []
        },
        {
            label: 'Indigenous',
            checked: false,
            indeterminate: false,
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

    function isIndeterminate(option : any) {
        return option.subOptions.length === 0 ? false : !option.subOptions.every( (subOption : any) => subOption.checked === option.subOptions[0].checked )
    }

    return (
        <>
            <Typography variant='h4' component='h1' color='primary' marginBottom={2}>
                Advanced Search
            </Typography>

            <Card variant='outlined'>
                <form>

                    <FilterGroup options={raceCultureOptions} handleChange={handleChange} checkIsIndeterminate={isIndeterminate} />
                    
                </form>

            </Card>
        </>
    )
}