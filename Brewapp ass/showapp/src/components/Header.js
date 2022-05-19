import React from 'react'
import {AppBar, Toolbar, Typography} from "@mui/material";
import Navbar from './Navbar';
import {FcApproval} from "react-icons/fc";

const Headers = () => {
  return (
    <AppBar  position='sticky' sx={{background: "white" }}>
        <Toolbar sx={{flexDirection:"column"}}  >
            <Typography  variant='h5'  sx={{color:"black", fontWeight:"bold", marginRight:"auto", marginTop:2}}>Live Spaces</Typography>
            
            <Typography  paragraph={true}  sx={{color:"gray", fontWeight:"light", marginRight:"auto" }}>
              <FcApproval/> All NFTs on Cyber either belog to or were minted by there space creator</Typography>
        </Toolbar>
        <Navbar></Navbar>
    </AppBar>
  )
}

export default Headers
