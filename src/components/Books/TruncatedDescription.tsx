import Typography from '@mui/material/Typography'
import React from 'react'

export default function TruncatedDescription(props : { description : string }) {

    function truncate(string : string, maxLength: number) {

        if (string.length <= maxLength) {
            return string
        }

        let output = string.substring(0,maxLength)
        output = output.substring(0,output.lastIndexOf(' '))

        return `${output}...`

    }

    const truncated = truncate(props.description, 300)

    return (
        <Typography>
            {truncated}
        </Typography>
    )
}