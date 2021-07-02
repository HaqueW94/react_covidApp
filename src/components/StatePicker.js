import {FormControl,NativeSelect,Box,useTheme,useMediaQuery,} from '@material-ui/core';
import States from '../States.json';
import React from 'react';

export default function StatePicker(props){
    
    const theme=useTheme();
    const isSmallScreen=useMediaQuery(theme.breakpoints.down('sm'));
    const smallScreenProps=()=>{return isSmallScreen?{size:"120px"}:{size:"350px"}}
  
     
    return(
        <Box textAlign="center" style={{height:"5vh",marginTop:"100px"}}>
            <FormControl style={{width:smallScreenProps().size}}>
            <NativeSelect onChange={async(e)=>{ props.fn(e.target.value)}}>
            <option value="Delhi">Delhi</option>
            {Array.isArray(States)?States.map((obj)=>{
                const{name}=obj;
                return <option  key={name} value={name}>{name}</option>
            }):null}
            
            </NativeSelect>
        </FormControl>

        </Box>
    )
}