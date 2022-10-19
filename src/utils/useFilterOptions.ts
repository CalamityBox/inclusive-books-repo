import React from 'react'

// Utils
import { filterCategoryInterface } from './Interfaces'

function useFilterOptions() {

    const raceCultureDefaultOptions : filterCategoryInterface[] = [
        {
            label: 'Asian',
            checked: false,
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
                },
                {
                    label: 'Pacific Islander',
                    checked: false
                }
            ]
        },
        {
            label: 'Latinx',
            checked: false,
            indeterminate: false,
            subOptions: []
        },
        {
            label: 'Middle Eastern',
            checked: false,
            indeterminate: false,
            subOptions: []
        },
        {
            label: 'Jewish',
            checked: false,
            indeterminate: false,
            subOptions: []
        },
        {
            label: 'Muslim',
            checked: false,
            indeterminate: false,
            subOptions: []
        }
    ]

    const genderSexualityDefaultOptions : filterCategoryInterface[] = [
        {
            label: 'Lesbian',
            checked: false,
            indeterminate: false,
            subOptions: []
        },
        {
            label: 'Gay',
            checked: false,
            indeterminate: false,
            subOptions: []
        },
        {
            label: 'Bisexual',
            checked: false,
            indeterminate: false,
            subOptions: []
        },
        {
            label: 'Trans',
            checked: false,
            indeterminate: false,
            subOptions: []
        },
        {
            label: 'Queer',
            checked: false,
            indeterminate: false,
            subOptions: []
        },
        {
            label: 'Intersex',
            checked: false,
            indeterminate: false,
            subOptions: []
        },
        {
            label: 'Asexual',
            checked: false,
            indeterminate: false,
            subOptions: []
        },
        {
            label: 'Aromantic',
            checked: false,
            indeterminate: false,
            subOptions: []
        },
        {
            label: 'Pansexual',
            checked: false,
            indeterminate: false,
            subOptions: []
        },
        {
            label: 'Nonbinary',
            checked: false,
            indeterminate: false,
            subOptions: []
        },
        {
            label: 'Genderfluid',
            checked: false,
            indeterminate: false,
            subOptions: []
        }
    ]

    const familyStructureDefaultOptions : filterCategoryInterface[] = [
        {
            label: "Adopted",
            checked: false,
            indeterminate: false,
            subOptions: []
        },
        {
            label: "Foster Parents",
            checked: false,
            indeterminate: false,
            subOptions: []
        },
        {
            label: "Incarcerated Parents",
            checked: false,
            indeterminate: false,
            subOptions: []
        },
        {
            label: "Raised by Older Sibling",
            checked: false,
            indeterminate: false,
            subOptions: []
        },
        {
            label: "Raised by Non-parental Relative",
            checked: false,
            indeterminate: false,
            subOptions: []
        },
        {
            label: "Single Parent",
            checked: false,
            indeterminate: false,
            subOptions: []
        },
        {
            label: "Two Moms",
            checked: false,
            indeterminate: false,
            subOptions: []
        },
        {
            label: "Two Dads",
            checked: false,
            indeterminate: false,
            subOptions: []
        },
        {
            label: "Nonbinary Parent(s)",
            checked: false,
            indeterminate: false,
            subOptions: []
        }
    ]

    const neurodivergentDefaultOptions : filterCategoryInterface[] = [
        {
            label: "Anxiety",
            checked: false,
            indeterminate: false,
            subOptions: []
        },
        {
            label: "ADHD",
            checked: false,
            indeterminate: false,
            subOptions: []
        },
        {
            label: "Autism",
            checked: false,
            indeterminate: false,
            subOptions: []
        },
        {
            label: "Bipolar",
            checked: false,
            indeterminate: false,
            subOptions: []
        },
        {
            label: "Depression",
            checked: false,
            indeterminate: false,
            subOptions: []
        },
        {
            label: "Dyslexia",
            checked: false,
            indeterminate: false,
            subOptions: []
        },
        {
            label: "Dyspraxia",
            checked: false,
            indeterminate: false,
            subOptions: []
        },
        {
            label: "Epilepsy",
            checked: false,
            indeterminate: false,
            subOptions: []
        },
        {
            label: "Non-verbal",
            checked: false,
            indeterminate: false,
            subOptions: []
        },
        {
            label: "OCD",
            checked: false,
            indeterminate: false,
            subOptions: []
        },
        {
            label: "Synesthesia",
            checked: false,
            indeterminate: false,
            subOptions: []
        }
    ]

    const bodyDefaultOptions : filterCategoryInterface[] = [
        {
            label: "Fat",
            checked: false,
            indeterminate: false,
            subOptions: []
        },
        {
            label: "Under-represented Body Types",
            checked: false,
            indeterminate: false,
            subOptions: []
        }
    ]

    const disabilityDefaultOptions : filterCategoryInterface[] = [
        {
            label: "Blind / Visually Impaired",
            checked: false,
            indeterminate: false,
            subOptions: []
        },
        {
            label: "Deaf / Hard-of-hearing",
            checked: false,
            indeterminate: false,
            subOptions: []
        },
        {
            label: "Missing Limb(s)",
            checked: false,
            indeterminate: false,
            subOptions: []
        },
        {
            label: "Mobility Aid",
            checked: false,
            indeterminate: false,
            subOptions: [
                {
                    label: "Cane",
                    checked: false
                },
                {
                    label: "Walker",
                    checked: false
                },
                {
                    label: "Wheelchair",
                    checked: false
                }
            ]
        },
        {
            label: "Service Animal",
            checked: false,
            indeterminate: false,
            subOptions: []
        }
    ]

    const [raceCultureOptions, setRaceCultureOptions] = React.useState(raceCultureDefaultOptions)
    const [genderSexualityOptions, setGenderSexualityOptions] = React.useState(genderSexualityDefaultOptions)
    const [familyStructureOptions, setFamilyStructureOptions] = React.useState(familyStructureDefaultOptions)
    const [neurodivergentOptions, setNeurodivergentOptions] = React.useState(neurodivergentDefaultOptions)
    const [bodyOptions, setBodyOptions] = React.useState(bodyDefaultOptions)
    const [disabilityOptions, setDisabilityOptions] = React.useState(disabilityDefaultOptions)

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
        setRaceCultureOptions(
            prevOptions => updateOptions(prevOptions, event.target.value)
        )
        setFamilyStructureOptions(
            prevOptions => updateOptions(prevOptions, event.target.value)
        )
        setGenderSexualityOptions(
            prevOptions => updateOptions(prevOptions, event.target.value)
        )
        setNeurodivergentOptions(
            prevOptions => updateOptions(prevOptions, event.target.value)
        )
        setBodyOptions(
            prevOptions => updateOptions(prevOptions, event.target.value)
        )
        setDisabilityOptions(
            prevOptions => updateOptions(prevOptions, event.target.value)
        )
    }

    function getCheckedFilters(options : filterCategoryInterface[]) {

        const output = []

        for (const option of options) {
            option.checked && output.push(option.label)
            for (const subOption of option.subOptions) {
                subOption.checked && output.push(subOption.label)
            }
        }

        return output
    }

    const output : any[] = [
        raceCultureOptions, setRaceCultureOptions,
        genderSexualityOptions, setGenderSexualityOptions,
        familyStructureOptions, setFamilyStructureOptions,
        neurodivergentOptions, setNeurodivergentOptions,
        bodyOptions, setBodyOptions,
        disabilityOptions, setDisabilityOptions,
        updateChildCheckBoxes, updateOptions, handleChange, getCheckedFilters
    ]

    return output

}

export default useFilterOptions