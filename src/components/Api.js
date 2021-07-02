import axios from 'axios';
let url="https://covid19.mathdro.id/api";



export async function getCountries(){
     try{
        const info=await axios.get(url+"/countries");
        return info.data.countries;
     }catch(err){
         console.log(err.message)
     }
}

export async function getCountriesData(country){
    let url="https://covid19.mathdro.id/api";
    if(country){
        url=`${url}/countries/${country}`
    }

   try{
    const info=await axios.get(url);
    return info.data;
   }catch(err){console.log(err.message)}


}


export const fetchDailyData = async () => {
    try {
      const { data } = await axios.get(`${url}/daily`);
      const modifiedData = data.map((dailyData) => ({
        confirmed: dailyData.confirmed.total,
        deaths: dailyData.deaths.total,
        date: dailyData.reportDate,
      }));
      return modifiedData;
    } catch (error) {}
  };