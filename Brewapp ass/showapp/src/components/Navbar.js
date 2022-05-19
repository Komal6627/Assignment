import React from 'react'
import { Button } from '@mui/material'
import { Box } from '@mui/system'
import { Link } from 'react-router-dom'
import { ImFire } from "react-icons/im";
import {IoDiamondOutline} from "react-icons/io5";
import {GiByzantinTemple} from "react-icons/gi";
import {RiFilter2Line} from "react-icons/ri";
import {GiAnimalHide} from "react-icons/gi";
import {FcClapperboard} from "react-icons/fc";
import {GiBarbedStar} from "react-icons/gi"


const Navbar = () => {
  return (
     <>
        <Box sx={{marginRight:"auto"}}>
            <Button LinkComponent={Link } to="/trending" variant="outlined" size='small'  sx={{margin:1, borderRadius:'18px', color:'black', borderColor:'gray', ":hover":{color:'white', borderColor:'black', backgroundColor:"black"} }}>
               <ImFire/> 24h Trending
            </Button>

            <Button LinkComponent={Link } to="/latest" variant="outlined" size='small' sx={{margin:1, borderRadius:'18px',  color:'black', borderColor:'gray',":hover":{color:'white', borderColor:'black', backgroundColor:"black"}}}>
               <FcClapperboard/>Latest Show</Button>

            <Button LinkComponent={Link } to="/popular" variant="outlined" size='small' sx={{margin:1, borderRadius:'18px', color:'black', borderColor:'gray',":hover":{color:'white', borderColor:'black', backgroundColor:"black"}}}>
               <GiBarbedStar/> Most Popular
            </Button>

            <Button LinkComponent={Link } to="/genius" variant="outlined" size='small' sx={{margin:1, borderRadius:'18px', color:'black', borderColor:'gray', ":hover":{color:'white', borderColor:'black', backgroundColor:"black"}}}>
               <IoDiamondOutline/>In Genius
            </Button>

            <Button LinkComponent={Link } to="/temple" variant="outlined" size='small' sx={{margin:1, borderRadius:'18px', color:'black', borderColor:'gray', ":hover":{color:'white', borderColor:'black', backgroundColor:"black"}}}>
              <GiByzantinTemple/> In Temple
            </Button>

            <Button LinkComponent={Link } to="/void"  variant="outlined" size='small' sx={{margin:1, borderRadius:'18px', color:'black', borderColor:'gray', ":hover":{color:'white', borderColor:'black', backgroundColor:"black"}}}>
               <RiFilter2Line/>In Void</Button>

            <Button LinkComponent={Link } to="/shows" variant="outlined" size='small' sx={{margin:1, borderRadius:'18px', color:'black', borderColor:'gray', ":hover":{color:'white', borderColor:'black', backgroundColor:"black"}}}>
               <GiAnimalHide/>  #BAYC
            </Button>
        </Box>
     </>
  )
}

export default Navbar
