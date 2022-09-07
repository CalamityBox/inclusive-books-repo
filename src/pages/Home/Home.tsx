import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            Home Component

            <Outlet />
        </div>
    )
}