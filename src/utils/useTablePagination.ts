import React from 'react'

function useTablePagination(defaultPage: number, defaultRowsPerPage: number) {

    const [page, setPage] = React.useState(defaultPage)
    const [rowsPerPage, setRowsPerPage] = React.useState(defaultRowsPerPage)

    function handlePageChange(event: unknown, newPage: number) {
        setPage(newPage)
    }

    function handleRowsPerPageChange(event: React.ChangeEvent<HTMLInputElement>) {
        setRowsPerPage( parseInt(event.target.value,10) )
        setPage(0)
    }

    const output: [number, number, React.Dispatch<React.SetStateAction<number>>, React.Dispatch<React.SetStateAction<number>>, any, any] = [page, rowsPerPage, setPage, setRowsPerPage, handlePageChange, handleRowsPerPageChange]

    return output

}

export default useTablePagination