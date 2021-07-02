import axios from 'axios';


export async function fetchStateCardData(){
    try{
        const info=await axios.get("https://api.rootnet.in/covid19-in/stats")
        return  info.data
    }catch(err){console.log(err.message)}
}


export async function fetchStateChartData(){
    try{
        const info=await axios.get("https://api.rootnet.in/covid19-in/stats/history")
        return info.data
    }catch(err){console.log(err.message)}
}