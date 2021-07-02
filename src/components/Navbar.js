import React from 'react';
import { AppBar,Toolbar,Typography,Box,Button,useTheme,useMediaQuery } from '@material-ui/core';
import { Link } from 'react-router-dom';
import IMGS from '../virusLogo.png'

export default function Navbar(){
    const theme=useTheme();
    const isSmallScreen=useMediaQuery(theme.breakpoints.down("sm"));
    const smallScreenProps=()=>{return isSmallScreen?{fontSize:"12px",fontSizeButton:"10px"}:{fontSize:"18px",fontSizeButton:"14px"}}
    
 return(
     <AppBar style={{backgroundColor:"white"}}>
         <Toolbar>
             <Typography style={{flexGrow:1}}>
                 <Box fontSize={smallScreenProps().fontSize} fontWeight="fontWeightBold" style={{color:"black",display:"flex",alignItems:"center"}}><img src={IMGS} alt="logo" style={{width:"40px",marginRight:"12px",height:"40px"}}/> Covid Stats</Box>
             </Typography>
            <Link to="/" style={{textDecoration:"none"}}> <Button style={{marginLeft:"10px",textTransform:"capitalize",fontSize:smallScreenProps().fontSizeButton}}>Countries</Button></Link>
             <Link to="/states" style={{textDecoration:"none"}}><Button style={{marginLeft:"10px",textTransform:"capitalize",fontSize:smallScreenProps().fontSizeButton}}>States</Button></Link>
         </Toolbar>
     </AppBar>
 )
}