import {Card,CardContent,Typography,Grid,makeStyles,useTheme,useMediaQuery,Box,Container} from '@material-ui/core';
import CountUp from 'react-countup';


const useStyle=makeStyles((theme)=>({
    cards:{
        width:"90%",
        margin:"0 auto",
        backgroundImage:"url(https://user-images.githubusercontent.com/10515065/78194909-3637c480-7433-11ea-81e4-76eb36281346.png)",
        backgroundPosition:"90%",
        backgroundRepeat:"no-repeat",
        backgroundSize:"40%"
    },
    Flag:{
        display:"flex",
        margin:theme.spacing(2),
        alignItems:"center",
        justifyContent:"center",
        color:"white"
    },
    [theme.breakpoints.down('sm')]:{
        cards:{
            width:"75%",
            margin:"0 auto",
        }
    }
}))

export default function StateCard(props){
    const classes=useStyle();
    const theme=useTheme();
    const isSmallScreen=useMediaQuery(theme.breakpoints.down('sm'));
    const smallScreenProps=()=>{return isSmallScreen?{cntryHeading:"h6",flgSize:"24"}:{cntryHeading:"h4",flgSize:"48"}}
  return(
      <Container style={{marginTop:"16px",marginBottom:"16px"}}>
          <Typography variant={smallScreenProps().cntryHeading} component="div">
            <Box fontStyle="italic" className={classes.Flag} textAlign="center" fontFamily="Monospace">{props.name}</Box>
          </Typography>
      <Grid container>
          <Grid item xs={12} md={3}>
              <Card elevation={2} style={{backgroundColor:"#64b5f6",borderBottom:"8px solid #1976d2"}} className={classes.cards}>
                  <CardContent>
                    <Typography variant="caption" component="div">
                      <Box fontWeight="fontWeightBold">Infected</Box>
                    </Typography>
                    <Typography variant="h6" componet="div">
                        <Box fontFamily="Monospace"><CountUp end={props.confirmed} duration={3}/></Box>
                    </Typography>
                    <Typography variant="caption" component="div">
                         <Box fontSize={12} fontWeight="fontWeightBold" fontFamily="Monospace" color="text.primary">Updated At</Box>
                         <Box fontSize={12} fontWeight="fontWeightBold" fontFamily="Monospace" color="text.primary">{`${new Date(props.date).getDate()}/${new Date(props.date).getMonth()+1}/${new Date(props.date).getFullYear()}`}</Box>
                     </Typography>
                     <Typography variant="caption">Number of recoveries cases of COVID-19</Typography>
                  </CardContent>
              </Card>
          </Grid>

          <Grid item xs={12} md={3}>
          <Card elevation={2} style={{backgroundColor:"#81c784",borderBottom:"8px solid #388e3c"}} className={classes.cards}>
                  <CardContent>
                    <Typography variant="caption" component="div">
                      <Box fontWeight="fontWeightBold">Recovered</Box>
                    </Typography>
                    <Typography variant="h6" componet="div">
                        <Box fontFamily="Monospace"><CountUp end={props.recovered} duration={3}/></Box>
                    </Typography>
                    <Typography variant="caption" component="div">
                         <Box fontSize={12} fontWeight="fontWeightBold" fontFamily="Monospace" color="text.primary">Updated At</Box>
                         <Box fontSize={12} fontWeight="fontWeightBold" fontFamily="Monospace" color="text.primary">{`${new Date(props.date).getDate()}/${new Date(props.date).getMonth()+1}/${new Date(props.date).getFullYear()}`}</Box>
                         
                     </Typography>
                    <Typography variant="caption">Number of recoveries cases of COVID-19</Typography>
                  </CardContent>
              </Card>
          </Grid>

          <Grid item xs={12} md={3}>
          <Card elevation={2} style={{backgroundColor:"#e57373",borderBottom:"8px solid #d32f2f"}} className={classes.cards}>
                  <CardContent>
                    <Typography variant="caption" component="div">
                      <Box fontWeight="fontWeightBold">Deaths</Box>
                    </Typography>
                    <Typography variant="h6" componet="div">
                        <Box fontFamily="Monospace"><CountUp end={props.deaths} duration={3}/></Box>
                    </Typography>
                    <Typography variant="caption" component="div">
                         <Box fontSize={12} fontWeight="fontWeightBold" fontFamily="Monospace" color="text.primary">Updated At</Box>
                         <Box fontSize={12} fontWeight="fontWeightBold" fontFamily="Monospace" color="text.primary">{`${new Date(props.date).getDate()}/${new Date(props.date).getMonth()+1}/${new Date(props.date).getFullYear()}`}</Box>
                         
                     </Typography>
                    <Typography variant="caption">Number of deaths cases of COVID-19</Typography>
                  </CardContent>
              </Card>
          </Grid>

          <Grid item xs={12} md={3}>
          <Card elevation={2} style={{backgroundColor:"#ffb74d",borderBottom:"8px solid #f57c00"}} className={classes.cards}>
                  <CardContent>
                    <Typography variant="caption" component="div">
                      <Box fontWeight="fontWeightBold">Active</Box>
                    </Typography>
                    <Typography variant="h6" componet="div">
                        <Box fontFamily="Monospace"><CountUp end={props.active} duration={3}/></Box>
                    </Typography>
                    <Typography variant="caption" component="div">
                         <Box fontSize={12} fontWeight="fontWeightBold" fontFamily="Monospace" color="text.primary">Updated At</Box>
                         <Box fontSize={12} fontWeight="fontWeightBold" fontFamily="Monospace" color="text.primary">{`${new Date(props.date).getDate()}/${new Date(props.date).getMonth()+1}/${new Date(props.date).getFullYear()}`}</Box>
                         
                     </Typography>
                    <Typography variant="caption">Number of active cases of COVID-19</Typography>
                  </CardContent>
              </Card>
          </Grid>
      </Grid>
      </Container>
  )
}