import React from "react"

// Components
import CardActions from "@mui/material/CardActions"
import IconButton from "@mui/material/IconButton"
import Box from "@mui/material/Box"

// Icons
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import Tooltip from "@mui/material/Tooltip"

export default function BookCardActions(props : any) {

    const [isFavorite, setIsFavorite] = React.useState(false)

    function toggleFavorite() {
        setIsFavorite(prevIsFavorite => !prevIsFavorite)
    }

    return (
        <CardActions sx={{ marginLeft: 'auto' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}> {/* For some reason, putting this sx in CardActions doesn't align properly */}

                <Tooltip title='Favorite' placement='right'>
                    <IconButton color='default' aria-label='Toggle favorite' onClick={toggleFavorite} >
                        {isFavorite ? <FavoriteIcon fontSize='large' /> : <FavoriteBorderIcon fontSize='large' />}
                    </IconButton>
                </Tooltip>
                
                <Tooltip title='Add to my collections' placement='right'>
                    <IconButton color='default' aria-label='Toggle favorite'>
                        <AddCircleOutlineIcon fontSize='large' />
                    </IconButton>
                </Tooltip>
                
                <Tooltip title='Reviews' placement='right'>
                    <IconButton color='default' aria-label='Toggle favorite'>
                        <RateReviewOutlinedIcon fontSize='large' />
                    </IconButton>
                </Tooltip>

            </Box>  
        </CardActions>
    )
}