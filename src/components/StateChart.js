import {Line} from 'react-chartjs-2';
import React from 'react';
import { Container,makeStyles } from '@material-ui/core';

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

export default function StateChart(props){
    const classes=useStyle();
    
    
    return(
       <> {props.data?<Container className={classes.Container}>
        <Line
       options={{maintainAspectRatio:false}} 
       data={{
           labels:props.data.map((obj)=>{return obj.dates}),
          datasets: [
              {
                data:props.data.map((obj)=>{return obj.totalConfirmed}),
                label: "Infected",
                borderColor: "#3333ff",
                fill: true,
              },
              
                  {
                    data:props.data.map((obj)=>{return obj.deaths}),
                    label: "Deaths",
                    borderColor: "red",
                    fill: true,
                  },
          ],
          

       }}
      
      />  
      </Container>:null}</>
    )
}