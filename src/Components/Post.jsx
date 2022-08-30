import { Favorite, FavoriteBorder, Share } from '@mui/icons-material'
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import React from 'react'


const Post = () => {
    return (
        <Box>
            <Card sx={{margin: 5}}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">

                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">

                        </IconButton>
                    }
                    title="Epa ati Agbalumo"
                    subheader="October 14, 2022"
                />
                <CardMedia
                    component="img"
                    height="400"
                    image="https://images.unsplash.com/photo-1657566645964-d41800bc7688?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                    alt="Paella dish" 
                />
                
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red" }} />} />
                    </IconButton>
                    <IconButton aria-label="share">
                        <Share />
                    </IconButton>

                </CardActions>

            </Card>
        </Box>
    )
}

export default Post