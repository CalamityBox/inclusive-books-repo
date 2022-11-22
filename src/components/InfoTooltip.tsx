import React from 'react'

import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import InfoIcon from '@mui/icons-material/Info'

export default function InfoTooltip(props: { isVisible: boolean, children: any }) {

    const [iconColor, setIconColor] = React.useState<"inherit" | "action" | "disabled" | "primary" | "secondary" | "error" | "info" | "success" | "warning" | undefined>('inherit')

    return (
        <>
            {
                !!props.isVisible ?

                    <Tooltip 
                        arrow 
                        placement='right' 
                        sx={{ ml: 1 }}
                        title={
                            <>
                                {props.children}
                            </>
                        } 
                    >
                        <IconButton onMouseEnter={() => setIconColor('primary')} onMouseLeave={() => setIconColor('inherit')}>
                            <InfoIcon color={iconColor} />
                        </IconButton>
                    </Tooltip>

                    :
                    
                    <></>
            }
        </>
    )
}