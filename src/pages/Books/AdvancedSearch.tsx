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
import useFilterOptions from '../../utils/useFilterOptions'

export default function AdvancedSearch() {

    const [
        raceCultureOptions, setRaceCultureOptions,
        genderSexualityOptions, setGenderSexualityOptions,
        familyStructureOptions, setFamilyStructureOptions,
        neurodivergentOptions, setNeurodivergentOptions,
        bodyOptions, setBodyOptions,
        disabilityOptions, setDisabilityOptions,
        updateChildCheckBoxes, updateOptions, handleChange, getCheckedFilters
    ] = useFilterOptions()

    function isIndeterminate(option : any) {
        return option.subOptions.length === 0 ? false : !option.subOptions.every( (subOption : any) => subOption.checked === option.subOptions[0].checked )
    }

    // Handle results
    const [chips, setChips] = React.useState<[] | { key: number, label: string}[]>([])
    function handleChipClick() {}
    const [results, setResults] = React.useState( booksList.map( book => <BookCard key={nanoid()} {...book} handleChipClick={handleChipClick} activeChips={chips} /> ) )

    function filterBook(book : BookInterface, representationFilters : any) {
        
        const representationInBook = []

        for (const rep of book.representation) {
            representationInBook.push(...rep.identity)
        }

        for (const rep of representationFilters) {
            if ( !representationInBook.includes(rep) ) {
                return false
            }
        }
        return true

    }

    React.useEffect(() => {
        console.log('running effect')

        const representationFilters : string[] = []

        representationFilters.push(
            ...getCheckedFilters(raceCultureOptions),
            ...getCheckedFilters(genderSexualityOptions),
            ...getCheckedFilters(familyStructureOptions),
            ...getCheckedFilters(neurodivergentOptions),
            ...getCheckedFilters(bodyOptions),
            ...getCheckedFilters(disabilityOptions)
        )

        if (representationFilters.length > 0) {
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

    console.log('chips after use effect is: ',chips)

    
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
                        <FilterGroup name='Race and Culture Identity' options={raceCultureOptions} handleChange={handleChange} checkIsIndeterminate={isIndeterminate} />
                        <FilterGroup name='Gender and Sexuality Identity' options={genderSexualityOptions} handleChange={handleChange} checkIsIndeterminate={isIndeterminate} />
                        <FilterGroup name='Family Structure Identity' options={familyStructureOptions} handleChange={handleChange} checkIsIndeterminate={isIndeterminate} />
                        <FilterGroup name='Neurodivergent Identity' options={neurodivergentOptions} handleChange={handleChange} checkIsIndeterminate={isIndeterminate} />
                        <FilterGroup name='Body Identity' options={bodyOptions} handleChange={handleChange} checkIsIndeterminate={isIndeterminate} />
                        <FilterGroup name='Disability Identity' options={disabilityOptions} handleChange={handleChange} checkIsIndeterminate={isIndeterminate} />
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