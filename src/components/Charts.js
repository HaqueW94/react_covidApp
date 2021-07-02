import {Line,Bar} from 'react-chartjs-2';
import { Container,makeStyles } from '@material-ui/core';
import { defaults } from 'react-chartjs-2'
defaults.plugins.legend.labels.color = "white"
defaults.scale.ticks.color="white"


const useStyle=makeStyles((theme)=>({
    Container:{
        width:"75%",
        height:"55vh",
        paddingTop:theme.spacing(3),
        marginTop:theme.spacing(2),
        marginBottom:theme.spacing(2)
    },
    [theme.breakpoints.down('md')]:{
        Container:{
            width:"90%",
            height:"50vh",
        }
    }
}))

export default function Charts(props){
    let barGraphData={}
    if(props.data){
        barGraphData={confirm:props.data.confirmed,recover:props.data.recovered,deaths:props.data.deaths}
    }
    const classes=useStyle();
    return(
       <> {props.data?<Container className={classes.Container}>
        {props.show?<Line
       options={{maintainAspectRatio:false}}
       data={{
           labels:props.data.map((arr)=>{
               return arr.date
           }),
          datasets: [
              {
                data:props.data.map((arr)=>{
                    return arr.confirmed
                }),
                label: "Infected",
                borderColor: "#3333ff",
                color:"red",
                fill: true,
              },
              
                  {
                    data:props.data.map((arr)=>{
                        return arr.deaths
                    }),
                    label: "Deaths",
                    borderColor: "red",
                    fill: true,
                  },
          ],
          

       }}
      
      />:           
      props.data?<Bar   options={{maintainAspectRatio:false}} 

data={{
  labels:["Infected","Recovered","Deaths","Active"],
 datasets: [
     {
       label:"people",
       backgroundColor:[
          "rgb(100,181,246)",
          "rgb(129,199,132)",
          "rgb(229,115,115)",
          "rgb(255,183,77)",
       ],
       data:[
          barGraphData.confirm?barGraphData.confirm.value:null,
          barGraphData.recover?barGraphData.recover.value:null,
          barGraphData.deaths?barGraphData.deaths.value:null,
          barGraphData.confirm?barGraphData.confirm.value-(barGraphData.recover.value+barGraphData.deaths.value):null,


       ]
     },
  
 ]

}}

      />:null}  
      </Container>:null}</>
    )
}