import React from 'react';
import {fetchStateCardData,fetchStateChartData} from '../components/StateApi';
import StateCard from '../components/StateCard';
import StateChart from '../components/StateChart';
import StatePicker from '../components/StatePicker';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function States(){
    const [stateCardData,setStateCardData]=React.useState();
    const [stateChartData,setStateChartData]=React.useState();
   React.useEffect(()=>{
    async function fetchCardStates(){
        let info=await fetchStateCardData()
       info.data.regional.forEach((obj)=>{
           if(obj.loc==="Delhi"){
                setStateCardData({...obj,update:info.lastRefreshed});
           }
        })
  }
        fetchCardStates()

        async function fetchChartStates(){
            const stateData=[]
            let info=await fetchStateChartData();
            info.data.forEach((obj)=>{
                let date=obj.day;
                   obj.regional.forEach((obj2)=>{
                      if(obj2.loc==="Delhi"){
                        stateData.push({...obj2,dates:date})
                      }
                   })
            })
            setStateChartData(stateData)
        }
        fetchChartStates();
    },[])

    
    const handleState=(val)=>{
        async function fetchChartStates(){
        
            const stateData=[]
            let info=await fetchStateChartData();
            info.data.forEach((obj)=>{
                   let date=obj.day
                   obj.regional.forEach((obj2)=>{
                      if(obj2.loc===val){
                         stateData.push({...obj2,dates:date})
                      }
                   })
            })
            setStateChartData(stateData)
        }

        async function fetchCardStates(){
            let info=await fetchStateCardData()
           info.data.regional.forEach((obj)=>{
               if(obj.loc===val){
                    setStateCardData({...obj,update:info.lastRefreshed});
               }
            })
      }


        fetchChartStates();
        fetchCardStates();
       
    }
    
    return (
        <>
        <Navbar/>
       <StatePicker fn={handleState} />
       {stateCardData?<StateCard name={stateCardData.loc} confirmed={stateCardData.totalConfirmed} recovered={stateCardData.discharged} deaths={stateCardData.deaths} active={stateCardData.totalConfirmed-(stateCardData.discharged+stateCardData.deaths)} date={stateCardData.update}/>:null}
       {stateChartData?<StateChart data={stateChartData}/>:null}
       {stateChartData?<Footer/>:null}
       </>
    )
}