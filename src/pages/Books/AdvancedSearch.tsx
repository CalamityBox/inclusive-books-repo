import React from 'react'

// Components
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import FilterGroup from '../../components/Filtering/FilterGroup'
import { Container } from '@mui/system'
import BookCard from '../../components/Books/BookCard'
import booksList from '../../data/booksList'
import DisplayBookCards from '../../components/Books/DisplayBookCards'
import { BookInterface } from '../../utils/Interfaces'
import Pagination from '@mui/material/Pagination'

// Utils
import usePaginationCustom from '../../utils/usePaginationCustom'
import { nanoid } from 'nanoid'

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

    const [raceCultureOptions, setRaceCultureOptions] = React.useState(raceCultureOptionsDefault)

    function isIndeterminate(option : any) {
        return option.subOptions.length === 0 ? false : !option.subOptions.every( (subOption : any) => subOption.checked === option.subOptions[0].checked )
    }

    // Handle results
    const [chips, setChips] = React.useState([])
    function handleChipClick() {}
    const [results, setResults] = React.useState( booksList.map( book => <BookCard key={nanoid()} {...book} handleChipClick={handleChipClick} activeChips={chips} /> ) )

    function filterBook(book : BookInterface, representationFilters : any) {

        console.log('book is: ',book)
        
        const representationInBook = book.representation[0].identity
        console.log('representation in book is: ',book.representation[0].identity)

        for (const rep of representationFilters) {
            if ( !representationInBook.includes(rep) ) {
                console.log('returning false')
                return false
            }
        }
        console.log('returning true')
        return true

    }

    React.useEffect(() => {
        console.log('running effect')

        const representationFilters : string[] = []

        for (const option of raceCultureOptions) {
            option.checked && representationFilters.push(option.label)
            for (const subOption of option.subOptions) {
                subOption.checked && representationFilters.push(subOption.label)
            }
        }

        console.log('representation filters are: ',representationFilters)

        if (representationFilters.length > 0) {
            console.log('setting results based on filters')
            setResults(
                booksList
                    .filter( book => filterBook(book, representationFilters) )
                    .map( book => <BookCard key={nanoid()} {...book} handleChipClick={handleChipClick} activeChips={chips} /> )
            )
        } else {
            setResults( booksList.map( book => <BookCard key={nanoid()} {...book} handleChipClick={handleChipClick} activeChips={chips} /> ) )
        }

        setPage(1)

    },[raceCultureOptions])

    
    // Pagination
    const [page, setPage, handlePageChange, BOOKS_PER_PAGE] = usePaginationCustom(1, 10)

    return (
        <Container sx={{display: 'flex', flexDirection: 'column', rowGap: 3}}>
            
            <Typography variant='h4' component='h1' color='primary' marginBottom={2}>
                Advanced Search
            </Typography>

            <Container disableGutters={true} maxWidth='xl' sx={{ display: 'flex'}}>

                <Card variant='outlined'>
                    <form>
                        <FilterGroup options={raceCultureOptions} handleChange={handleChange} checkIsIndeterminate={isIndeterminate} />
                    </form>
                </Card>

                <Container sx={{ display: 'flex', flexDirection: 'column', rowGap: 2 }} >
                    <DisplayBookCards books={results} page={page} booksPerPage={BOOKS_PER_PAGE} handleChipClick={handleChipClick} />
                </Container>

            </Container>

            <Pagination 
                color='primary' 
                count={Math.ceil(results.length / BOOKS_PER_PAGE)}
                onChange={handlePageChange}
                page={page}
                sx={{ margin: 'auto' }}
            />

        </Container>
    )
}