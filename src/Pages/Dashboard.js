import Charts from "../components/Charts";
import Cards from "../components/Cards";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CountryPick from "../components/CountryPick";
import { getCountriesData,fetchDailyData } from "../components/Api";
import React from 'react';

export default function Dashboard(){
    const [chrtdata,setChrtData]=React.useState();
    const [chart,setChart]=React.useState(true);
    const [crddata,setCrdData]=React.useState();
    React.useEffect(()=>{
      async function fetchApis(){
        try{
          const info=await getCountriesData();
          setCrdData(info);
          const chrtInfo=await fetchDailyData();
          setChrtData(chrtInfo);
        }catch(err){console.log(err.message)}
       }
       fetchApis();
    },[setChrtData])

    const handleCountries=async(data)=>{
       try{
           if(data){
              setChart(false)
              let countryName=data.split("+");
              const info=await getCountriesData(countryName[0])
              let countryData={...info,name:countryName[0],iso:countryName[countryName.length-1]}
              setCrdData(countryData);
              setChrtData(info);
           }
           else{
            const info=await getCountriesData();
            setCrdData(info);
            const chrtInfo=await fetchDailyData();
            setChrtData(chrtInfo);
            setChart(true)
           }
       }catch(err){console.log(err.message)}
    }
    return(
    <><div><Navbar/></div>
      <CountryPick fn={handleCountries}/>
      {crddata?<Cards confirmed={crddata.confirmed.value} iso={crddata.iso} name={crddata.name} recovered={crddata.recovered.value} deaths={crddata.deaths.value} date={crddata.lastUpdate} active={crddata.confirmed.value-(crddata.recovered.value+crddata.deaths.value)}/>:null}
      <Charts show={chart} data={chrtdata}/>
      {chrtdata?<Footer/>:null}
    </>
    )
}