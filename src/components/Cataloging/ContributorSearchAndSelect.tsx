import React from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import SearchBar from '../SearchBar'
import { IContributor } from '../../utils/Interfaces'
import { matchSorter } from 'match-sorter'
import Card from '@mui/material/Card'
import { Avatar, Button } from '@mui/material'
import { shortenString } from '../../utils/handleStrings'
import { nanoid } from 'nanoid'

export default function ContributorSearchAndSelect(props: { selectFunction: Function, name: string, contributorData: IContributor[] }) {
    

    const [selected, setSelected] = React.useState(null)
    const [results, setResults] = React.useState<IContributor[]>(matchSorter(props.contributorData, props.name, { keys: ['name'] }))

    function handleSearch(searchText: string) {

        console.log('runnning callback function')

        if (searchText.length) {
            setResults( 
                matchSorter(results, searchText, { keys: ['name'] }) 
            )
        } else {
            setResults(props.contributorData)
        }

    }

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: 3, borderColor: '#6c5ce7', pb: 2 }}>
                <Typography variant='h5'>{props.name}</Typography>
                <SearchBar size='small' fullWidth={false} placeholder='Search for authors by name' defaultValue={props.name} callbackFunction={handleSearch} />
            </Box>
            <Typography textAlign='left' color='gray' variant='body1'>Found {results.length} results</Typography>
            <Box sx={{ display: 'flex', columnGap: 2, pb: 2, overflowX: 'scroll' }}>
                {
                    results.length ?
                        results.slice(0,10).map(
                            (contributor: IContributor) => (
                                <Card key={nanoid()} variant='outlined' sx={{ backgroundColor: 'white', p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', rowGap: 2, minWidth: '250px', maxWidth: '250px', minHeight: '400px' }}>
                                    <Avatar src={contributor?.profilePictureUrl ?? ''} sx={{ mx: 'auto', width: '70px', height: '70px' }} >
                                        {contributor.name[0]}
                                    </Avatar>
                                    <Typography variant='h6'>{shortenString(contributor.name,20)}</Typography>
                                    <Typography variant='body1'>{shortenString(contributor?.description ?? '', 100)}</Typography>
                                    <Button variant='outlined' sx={{ width: 'min-content', mx: 'auto' }}>Select</Button>
                                </Card>
                            )
                        )
                        :
                        <Box sx={{ mx: 'auto', mt: 4, px: 10 }}>
                            <Typography sx={{ mb: 2 }}>
                                <strong>Seems like this author isn't in our database.</strong> You can try searching with a different name using the search bar, or add their info using the button below.
                            </Typography>
                            <Button variant='outlined'>Add Contributor Info</Button>
                        </Box>
                }
            </Box>
        </>
    )
}