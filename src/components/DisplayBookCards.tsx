import { nanoid } from 'nanoid'
import React from 'react'

// utils
import {BookCardInterface} from '../utils/Interfaces'
import BookCard from './BookCard'

export default function DisplayBookCards(props : BookCardInterface) {

    const resultsToDisplay = props.books
        .slice( (props.page - 1) * props.booksPerPage, (props.page - 1) * props.booksPerPage + props.booksPerPage )
        .map( book => <BookCard key={nanoid()} {...book} handleChipClick={props.handleChipClick} /> )

    return (
        <>
            {resultsToDisplay}
        </>
    )
}