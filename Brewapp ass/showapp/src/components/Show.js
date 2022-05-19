import {  Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Show = ({title, description, imageURL }) => {
  return (
    <>
       {""}    
        <Box ml={3} sx={{display:"inline-block", alignItems:"center", justifyContent:"center",p:3 }}>
        <Card sx={{m:1,  maxWidth: 450, maxHeight:350 }} >
        <CardActionArea>
        <CardMedia
          component="img"
          width="700"
          height="220"
          image={imageURL}
          alt="show img"
        />
        <CardContent sx={{backgroundColor: "black" ,color: "white"}}>
          <Typography gutterBottom variant="h5" component="div">
           {title}
          </Typography>
          <CardActions>
        <Button size="small"  sx={{color:"white", backgroundColor:"black", opacity:0.7,}} >
          {description}
        </Button>
      </CardActions>
        </CardContent>
      </CardActionArea>
      
    </Card>
        </Box>
  
    </>
  )
}

export default Show
