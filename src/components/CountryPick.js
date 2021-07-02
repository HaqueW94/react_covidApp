import {FormControl,NativeSelect,Box,useTheme,useMediaQuery,} from '@material-ui/core';
import {getCountries} from './Api';
import React from 'react';

export default function CountryPick(props){
    const [country,setCountry]=React.useState();
    React.useEffect(()=>{
        async function fetchApis(){
            try{
                const countries=await getCountries();
                setCountry(countries);
            }catch(err){console.log(err.message)}
        }
        fetchApis()
    },[])
    const theme=useTheme();
    const isSmallScreen=useMediaQuery(theme.breakpoints.down('sm'));
    const smallScreenProps=()=>{return isSmallScreen?{size:"120px"}:{size:"350px"}}
  
     
    return(
       <div>
            <Box textAlign="center" style={{height:"5vh",marginTop:"100px"}}>
            <FormControl style={{width:smallScreenProps().size}}>
            <NativeSelect onChange={async(e)=>{ props.fn(e.target.value)}}>
            <option value="">Global</option>
            {Array.isArray(country)?country.map((arr)=>{
                const{name,iso2}=arr;
                return <option  key={name} value={name+"+"+iso2}>{name}</option>
            }):null}
            
            </NativeSelect>
        </FormControl>

        </Box>
       </div>
    )
}