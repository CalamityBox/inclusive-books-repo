import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import GoogleButton from 'react-google-button'
import { UserAuth } from '../contexts/AuthContext'

export default function SignIn() {

    const { googleSignIn, user, logout } = UserAuth()

    async function handleGoogleSignIn() {

        try {
            await googleSignIn()
        } catch (error) {
            console.error(error)
        }

    }

    console.log('User:',user)

    return (
        <Container>
            <Typography>{user?.displayName ? `Hello, ${user.displayName}` : 'Sign in'}</Typography>
            <GoogleButton onClick={handleGoogleSignIn} />
        </Container>
    )

}