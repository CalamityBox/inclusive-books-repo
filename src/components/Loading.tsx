import React from 'react'

import { CircularProgress } from '@mui/material'

export default function Loading(props: { isLoading: boolean, children: any }) {

    if (props.isLoading) {
        return <CircularProgress sx={{ mt: '30vh' }} />
    }

    return (
        <>
            {props.children}
        </>
    )

}