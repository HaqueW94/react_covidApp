import {Typography,Box,useTheme,useMediaQuery}  from '@material-ui/core'

export default function Footer(){
    const theme=useTheme();
    const isSmallScreen=useMediaQuery(theme.breakpoints.down('sm'));
    const smallScreenProps=()=>{return isSmallScreen?{fontSize:"12px"}:{fontSize:"16px"}}
    return(<div style={{height:"7vh",marginTop:"45px",backgroundColor:"white",display:"flex",alignItems:"center",justifyContent:"center"}}>
        <Typography>
           <Box fontWeight="fontWeightBold" fontSize={smallScreenProps().fontSize}>
              Copyright 2021 © developed by wasiq 
           </Box>
        </Typography>
    </div>)
}