import React from 'react'

// Utils
import { BookInterface, filterCategoryInterface } from './Interfaces'

function useFilterOptions() {

    function filterOr(option : any, identities : any) {

        // console.log('identities in book are:',identities)
        if (identities === undefined || identities === null) {
            return false
        }

        const filters : string[] = []
        option.checked && !option.indeterminate ? filters.push(option.label) : null // Hack to check indeterminate here; come back to this
        option.subOptions.forEach((element : any) => element.checked ? filters.push(element.label) : null)
        // console.log('filter are:',filters)

        // Return true if the book has at least one of the active filters
        const output = filters.some(value => identities.includes(value))
        // console.log('outputting',output)
        return output

    }

    const filterOptionsDefault = [

        {
            section: 'Grade Level',
            type: 'grade',
            options: [
                {
                    label: 'Birth - 3',
                    checked: false,
                    tooltip: '',
                    filterFunction: filterOr,
                    subOptions: []
                },
                {
                    label: 'Kindergarten',
                    checked: false,
                    tooltip: '',
                    filterFunction: filterOr,
                    subOptions: []
                },
                {
                    label: '1st Grade',
                    checked: false,
                    tooltip: '',
                    filterFunction: filterOr,
                    subOptions: []
                },
                {
                    label: '2nd Grade',
                    checked: false,
                    tooltip: '',
                    filterFunction: filterOr,
                    subOptions: []
                },
                {
                    label: '3rd Grade',
                    checked: false,
                    tooltip: '',
                    filterFunction: filterOr,
                    subOptions: []
                },
                {
                    label: '4th Grade',
                    checked: false,
                    tooltip: '',
                    filterFunction: filterOr,
                    subOptions: []
                },
                {
                    label: '5th Grade',
                    checked: false,
                    tooltip: '',
                    filterFunction: filterOr,
                    subOptions: []
                },
                {
                    label: 'Middle School',
                    checked: false,
                    tooltip: '',
                    filterFunction: filterOr,
                    subOptions: []
                },
                {
                    label: 'High School',
                    checked: false,
                    tooltip: '',
                    filterFunction: filterOr,
                    subOptions: []
                },
            ]
        },

        {
            section: 'Race / Culture',
            type: 'representation',
            options: [
                {
                    label: 'Asian',
                    checked: false,
                    indeterminate: false,
                    tooltip: '',
                    filterFunction: filterOr,
                    subOptions: [
                        {
                            label: 'East Asian',
                            checked: false,
                            tooltip: ''
                        },
                        {
                            label: 'West Asian',
                            checked: false,
                            tooltip: ''
                        },
                        {
                            label: 'Southeast Asian',
                            checked: false,
                            tooltip: ''
                        },
                        {
                            label: 'South Asian',
                            checked: false,
                            tooltip: ''
                        }
                    ]
                },
                {
                    label: 'Indigenous',
                    checked: false,
                    indeterminate: false,
                    tooltip: '',
                    filterFunction: filterOr,
                    subOptions: [
                        {
                            label: 'Aboriginal',
                            checked: false,
                            tooltip: ''
                        },
                        {
                            label: 'Native American / First Nations',
                            checked: false,
                            tooltip: ''
                        },
                        {
                            label: 'Inuit',
                            checked: false,
                            tooltip: ''
                        }
                    ]
                },
                {
                    label: 'Jewish',
                    checked: false,
                    indeterminate: false,
                    tooltip: '',
                    filterFunction: filterOr,
                    subOptions: []
                },
                {
                    label: 'Latinx',
                    checked: false,
                    indeterminate: false,
                    tooltip: '',
                    filterFunction: filterOr,
                    subOptions: []
                },
                {
                    label: 'Middle Eastern',
                    checked: false,
                    indeterminate: false,
                    tooltip: '',
                    filterFunction: filterOr,
                    subOptions: []
                },
                {
                    label: 'Multicultural',
                    checked: false,
                    indeterminate: false,
                    tooltip: '',
                    filterFunction: filterOr,
                    subOptions: []
                },
                {
                    label: 'Muslim',
                    checked: false,
                    indeterminate: false,
                    tooltip: '',
                    filterFunction: filterOr,
                    subOptions: []
                },
                {
                    label: 'Pacific Islander',
                    checked: false,
                    indeterminate: false,
                    tooltip: '',
                    filterFunction: filterOr,
                    subOptions: []
                }
            ]
        },

        {
            section: 'Gender and Sexuality',
            type: 'representation',
            options: [
                {
                    label: 'Lesbian',
                    checked: false,
                    indeterminate: false,
                    tooltip: '',
                    filterFunction: filterOr,
                    subOptions: []
                },
                {
                    label: 'Gay',
                    checked: false,
                    indeterminate: false,
                    tooltip: '',
                    filterFunction: filterOr,
                    subOptions: []
                },
                {
                    label: 'Bisexual',
                    checked: false,
                    indeterminate: false,
                    tooltip: '',
                    filterFunction: filterOr,
                    subOptions: []
                },
                {
                    label: 'Trans',
                    checked: false,
                    indeterminate: false,
                    tooltip: '',
                    filterFunction: filterOr,
                    subOptions: [
                        {
                            label: 'Agender',
                            checked: false,
                            tooltip: ''
                        },
                        {
                            label: 'Genderfluid',
                            checked: false,
                            tooltip: ''
                        },
                        {
                            label: 'Non-Binary',
                            checked: false,
                            tooltip: ''
                        },
                        {
                            label: 'Trans Man',
                            checked: false,
                            tooltip: ''
                        },
                        {
                            label: 'Trans Woman',
                            checked: false,
                            tooltip: ''
                        }
                    ]
                },
                {
                    label: 'Queer',
                    checked: false,
                    indeterminate: false,
                    tooltip: '',
                    filterFunction: filterOr,
                    subOptions: []
                },
                {
                    label: 'Asexual',
                    checked: false,
                    indeterminate: false,
                    tooltip: '',
                    filterFunction: filterOr,
                    subOptions: []
                },
                {
                    label: 'Intersex',
                    checked: false,
                    indeterminate: false,
                    tooltip: '',
                    filterFunction: filterOr,
                    subOptions: []
                },
                {
                    label: 'Aromantic',
                    checked: false,
                    indeterminate: false,
                    tooltip: '',
                    filterFunction: filterOr,
                    subOptions: []
                },
                {
                    label: 'Pansexual',
                    checked: false,
                    indeterminate: false,
                    tooltip: '',
                    filterFunction: filterOr,
                    subOptions: []
                },
                {
                    label: 'Two-Spirit',
                    checked: false,
                    indeterminate: false,
                    tooltip: '',
                    filterFunction: filterOr,
                    subOptions: []
                },
                {
                    label: 'Aromantic',
                    checked: false,
                    indeterminate: false,
                    tooltip: '',
                    filterFunction: filterOr,
                    subOptions: []
                }
            ]
        },

        {
            section: 'Family Structure',
            type: 'representation',
            options: [
                {
                    label: 'Adopted',
                    checked: false,
                    indeterminate: false,
                    tooltip: '',
                    filterFunction: filterOr,
                    subOptions: []
                },
                {
                    label: 'Foster Parents',
                    checked: false,
                    indeterminate: false,
                    tooltip: '',
                    filterFunction: filterOr,
                    subOptions: []
                },
                {
                    label: 'Incarcerated Parent',
                    checked: false,
                    indeterminate: false,
                    tooltip: '',
                    filterFunction: filterOr,
                    subOptions: []
                },
                {
                    label: 'Raised by Relative(s)',
                    checked: false,
                    indeterminate: false,
                    tooltip: '',
                    filterFunction: filterOr,
                    subOptions: []
                },
                {
                    label: 'Single Parent',
                    checked: false,
                    indeterminate: false,
                    tooltip: '',
                    filterFunction: filterOr,
                    subOptions: []
                },
                {
                    label: 'Two Moms',
                    checked: false,
                    indeterminate: false,
                    tooltip: '',
                    filterFunction: filterOr,
                    subOptions: []
                },
                {
                    label: 'Two Dads',
                    checked: false,
                    indeterminate: false,
                    tooltip: '',
                    filterFunction: filterOr,
                    subOptions: []
                }
            ]
        },

        {
            section: 'Neurodivergent',
            type: 'representation',
            options: [
                {
                    label: 'Anxiety',
                    checked: false,
                    indeterminate: false,
                    tooltip: '',
                    filterFunction: filterOr,
                    subOptions: []
                },
                {
                    label: 'ADHD',
                    checked: false,
                    indeterminate: false,
                    tooltip: '',
                    filterFunction: filterOr,
                    subOptions: []
                },
                {
                    label: 'Autism',
                    checked: false,
                    indeterminate: false,
                    tooltip: '',
                    filterFunction: filterOr,
                    subOptions: []
                },
                {
                    label: 'Bipolar',
                    checked: false,
                    indeterminate: false,
                    tooltip: '',
                    filterFunction: filterOr,
                    subOptions: []
                },
                {
                    label: 'Depression',
                    checked: false,
                    indeterminate: false,
                    tooltip: '',
                    filterFunction: filterOr,
                    subOptions: []
                },
                {
                    label: 'Dyslexia',
                    checked: false,
                    indeterminate: false,
                    tooltip: '',
                    filterFunction: filterOr,
                    subOptions: []
                },
                {
                    label: 'Dyspraxia',
                    checked: false,
                    indeterminate: false,
                    tooltip: '',
                    filterFunction: filterOr,
                    subOptions: []
                },
                {
                    label: 'Epilepsy',
                    checked: false,
                    indeterminate: false,
                    tooltip: '',
                    filterFunction: filterOr,
                    subOptions: []
                },
                {
                    label: 'Non-verbal',
                    checked: false,
                    indeterminate: false,
                    tooltip: '',
                    filterFunction: filterOr,
                    subOptions: []
                },
                {
                    label: 'OCD',
                    checked: false,
                    indeterminate: false,
                    tooltip: '',
                    filterFunction: filterOr,
                    subOptions: []
                },
                {
                    label: 'Synesthesia',
                    checked: false,
                    indeterminate: false,
                    tooltip: '',
                    filterFunction: filterOr,
                    subOptions: []
                }
            ]
        },

        {
            section: 'Body',
            type: 'representation',
            options: [
                {
                    label: 'Fat',
                    checked: false,
                    indeterminate: false,
                    tooltip: '',
                    filterFunction: filterOr,
                    subOptions: []
                }
            ] 
        },

        {
            section: 'Disability',
            type: 'representation',
            options: [
                {
                    label: 'Blind / Visually Impaired',
                    checked: false,
                    indeterminate: false,
                    tooltip: '',
                    filterFunction: filterOr,
                    subOptions: []
                },
                {
                    label: 'Deaf / Hard-of-hearing',
                    checked: false,
                    indeterminate: false,
                    tooltip: '',
                    filterFunction: filterOr,
                    subOptions: []
                },
                {
                    label: 'Missing Limb(s)',
                    checked: false,
                    indeterminate: false,
                    tooltip: '',
                    filterFunction: filterOr,
                    subOptions: []
                },
                {
                    label: 'Mobility Aid',
                    checked: false,
                    indeterminate: false,
                    tooltip: '',
                    filterFunction: filterOr,
                    subOptions: [
                        {
                            label: 'Cane',
                            checked: false,
                            tooltip: ''
                        },
                        {
                            label: 'Wheelchair',
                            checked: false,
                            tooltip: ''
                        }
                    ]
                },
                {
                    label: 'Service Animal',
                    checked: false,
                    indeterminate: false,
                    tooltip: '',
                    filterFunction: filterOr,
                    subOptions: []
                }
            ] 
        },

        {
            section: 'Language',
            type: 'language',
            options: [
                {
                    label: 'English',
                    checked: false,
                    indeterminate: false,
                    tooltip: '',
                    filterFunction: filterOr,
                    subOptions: []
                },
                {
                    label: 'Spanish',
                    checked: false,
                    indeterminate: false,
                    tooltip: '',
                    filterFunction: filterOr,
                    subOptions: []
                },
                {
                    label: 'Cantonese',
                    checked: false,
                    indeterminate: false,
                    tooltip: '',
                    filterFunction: filterOr,
                    subOptions: []
                },
                {
                    label: 'Mandarin',
                    checked: false,
                    indeterminate: false,
                    tooltip: '',
                    filterFunction: filterOr,
                    subOptions: []
                },
                {
                    label: 'Russian',
                    checked: false,
                    indeterminate: false,
                    tooltip: '',
                    filterFunction: filterOr,
                    subOptions: []
                },
                {
                    label: 'Vietnamese',
                    checked: false,
                    indeterminate: false,
                    tooltip: '',
                    filterFunction: filterOr,
                    subOptions: []
                }
            ] 
        }
    ]

    const [filterOptions, setFilterOptions] = React.useState(filterOptionsDefault)

    function updateChildren(subOption : any, isParentChecked : boolean) {
        subOption.checked = isParentChecked
        return subOption
    }

    function updateParent(option : any) {

        let checked = 0
        let unchecked = 0

        for (const subOption of option.subOptions) {
            subOption.checked ? checked++ : unchecked++
        }

        if (checked === 0) {
            // No suboptions are checked, so the parent should be unchecked and not indeterminate
            option.checked = false
            option.indeterminate = false
        } else if (unchecked === 0) {
            // Every subOption is checked, so the parent should be checked and not indeterminate
            option.checked = true
            option.indeterminate = false
        } else {
            option.checked = true
            option.indeterminate = true
        }

        return option

    }

    function handleCheckboxChange(labelToUpdate: string) {

        setFilterOptions(
            prevFilterOptions => prevFilterOptions.map(
                section => {

                    section.options.map(
                        option => {

                            if (option.label === labelToUpdate) {
                                option.checked = !option.checked
                                // Handle children here
                                option.subOptions.map( subOption => updateChildren(subOption, option.checked) )
                            } else {

                                option.subOptions.map(
                                    subOption => {
    
                                        if (subOption.label === labelToUpdate) {
                                            subOption.checked = !subOption.checked
                                        }
    
                                        return subOption
    
                                    }
                                )

                            }

                            // Handle indeterminate check here
                            if (option.subOptions.length > 0) {
                                option = updateParent(option)
                            }

                            return option

                        }
                    )

                    return section

                }
            )
        )

    }

    function filterBooks(book : BookInterface) {

        const bookIdentities : string[] = []
        book.representation.forEach((element : any) => bookIdentities.push(...element.identities))

        const bookGrades = book.info.grades
        // console.log('book is:',book)
        // console.log('book grades are:',bookGrades)

        const bookLanguages : string[] = []
        book.editions.forEach((element: any) => bookLanguages.push(...element.languages))

        for (const section of filterOptions) {
            
            let bookInfo = null

            switch (section.type) {
                case 'grade':
                    bookInfo = bookGrades
                    break
                case 'representation':
                    bookInfo = bookIdentities
                    break
                case 'language':
                    bookInfo = bookLanguages
            }
            
            for (const option of section.options) {

                const filterFunction = option.filterFunction

                if (option.checked && !filterFunction(option, bookInfo) ) {
                    // console.log('returning false')
                    return false
                }

            }
        }

        // console.log('returning true')
        return true

    }

    function isAnyBoxChecked(filterOptions : any) {

        for (const section of filterOptions) {
            for (const option of section.options) {
                
                if (option.checked) {
                    return true
                }

                for (const subOption of option.subOptions) {
                    if (subOption.checked) {
                        return true
                    }
                }

            }
        }

        return false

    }

    const output : any = [filterOptions, setFilterOptions, handleCheckboxChange, filterBooks, isAnyBoxChecked]

    return output

}

export default useFilterOptions