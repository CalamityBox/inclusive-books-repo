import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import GoogleButton from 'react-google-button'
import { UserAuth } from '../contexts/AuthContext'
import Card from '@mui/material/Card'
import { Divider } from '@mui/material'

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
        <Card variant='outlined' sx={{ maxWidth: '50%', m: 'auto', p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: 4 }}>
            <Typography variant='h4' component='h2' color='primary'>Please sign in to continue</Typography>
            <Divider component='div' variant='middle' role='presentation' sx={{ width: '100%' }} />
            <GoogleButton onClick={handleGoogleSignIn} />
        </Card>
    )

}