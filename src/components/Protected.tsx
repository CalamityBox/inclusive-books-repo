import React from 'react'

import { Navigate } from 'react-router-dom'
import { UserAuth } from '../contexts/AuthContext'

export default function Protected(props : any) {

    const {user} = UserAuth()

    if (user === null) {
        return <Navigate to='/' />
    }

    return (
        <>
            {props.children}
        </>
    )
}