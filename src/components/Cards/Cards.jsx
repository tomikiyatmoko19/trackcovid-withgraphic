import React from "react";
import {Card,CardContent, Typography,Grid} from '@material-ui/core';
import styles from './Cards.module.css';
import cx from 'classnames'
import CountUp from 'react-countup'
const Cards = ({data : {confirmed,recovered,deaths,lastUpdate}}) => {
    console.log(confirmed);
    if (!confirmed){
        return '...Loading';
    }
    return (
        <div className={styles.container}>
            <Grid container spacing = {3} justifyContent="center">
                <Grid item component = {Card} xs={12} md={3} className={cx(styles.card,styles.infeksi)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Terinfeksi</Typography>
                        <Typography variant="h5">
                            <CountUp
                            start = {0}
                            end = {confirmed.value}
                            duration = {3}
                            separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Total Kasus Aktif saat ini</Typography>
                    </CardContent>
                </Grid>
                <Grid item component = {Card} xs={12} md={3} className={cx(styles.card,styles.sembuh)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Sembuh</Typography>
                        <Typography variant="h5">
                            <CountUp
                            start = {0}
                            end = {recovered.value}
                            duration = {3}
                            separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Total Kasus Sembuh saat ini</Typography>
                    </CardContent>
                </Grid>
                <Grid item component = {Card} xs={12} md={3} className={cx(styles.card,styles.kematian)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Kematian</Typography>
                        <Typography variant="h5">
                            <CountUp
                            start = {0}
                            end = {deaths.value}
                            duration = {3}
                            separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Total Kasus Kematian saat ini</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;