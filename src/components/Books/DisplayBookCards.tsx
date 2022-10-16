import { nanoid } from 'nanoid'
import React from 'react'

// utils
import {BookCardInterface} from '../../utils/Interfaces'

export default function DisplayBookCards(props : BookCardInterface) {

    const resultsToDisplay = props.books
        .slice( (props.page - 1) * props.booksPerPage, (props.page - 1) * props.booksPerPage + props.booksPerPage )

    return (
        <>
            {resultsToDisplay}
        </>
    )
}