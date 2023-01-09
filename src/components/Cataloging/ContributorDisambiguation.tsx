import React from 'react'

import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { IContributor } from '../../utils/Interfaces';
import SearchBar from '../SearchBar';
import ContributorSearchAndSelect from './ContributorSearchAndSelect';

/* 
    Problem: Google Books API returns author name as a string without any associated id value. Authors may have same name, so cannot automatically determine which author, if any,
    in our database is the correct author.
*/
export default function ContributorDisambiguation(props: { book: any, contributorData: IContributor[], selectContributorCallback: Function }) {

    console.log('contributor data is',props.contributorData)

    const contributorsToProcess = props.book.contributors.map(
        (element: any) => element.contributor.name
    )

    const components = contributorsToProcess.map(
        (contributor: string) => <ContributorSearchAndSelect selectFunction={() => {}} name={contributor} contributorData={props.contributorData} />
    )

    if (contributorsToProcess.length) {
        return (
            <>
                {components}
            </>
        )
    }

    return (
        <>
        </>
    )

}