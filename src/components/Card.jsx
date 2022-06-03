import React from 'react'
import { Grid, CardContent, Box, Typography, Card, makeStyles } from '@material-ui/core';
import CountUp from 'react-countup';

const useStyle = makeStyles({
    header: {
        // background: '#45df13;',
        background:"black",
        padding: 10
    },
    headertitle: {
        color:'#fff'
    }
})

const CardComponent = ({cardTitle, value, desc, lastUpdate}) => {
    const classes = useStyle();
    return (
        <div>
            <Grid component={Card} style={{margin:20, borderBottom: '10px solid yellow'}}>
            <Box className={classes.header}>
                <Typography className={classes.headertitle} variant="h5" color="textSecondary">{cardTitle}</Typography>
            </Box>
            <CardContent>
                <Typography variant="h5">
                    <CountUp start={0} end={value} duration={3} seperator="," />
                </Typography>
                <Typography color="textSecondary">{desc}</Typography>
                <Typography>{new Date(lastUpdate).toDateString()}</Typography>
            </CardContent>
        </Grid>
        </div>
    )
}

export default CardComponent
