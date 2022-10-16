import React from 'react'

function usePaginationCustom(defaultPage : number, BOOKS_PER_PAGE : number) {

    const [page, setPage] = React.useState(1)

    function handlePageChange(event: React.ChangeEvent<unknown>, value: number) {
        setPage(value)
        window.scrollTo(0, 0)
    }

    const output : [number, React.Dispatch<React.SetStateAction<number>>, any, number] = [page, setPage, handlePageChange, BOOKS_PER_PAGE]

    return output

}

export default usePaginationCustom