import React, {useState,useEffect} from "react";
import styles from './Chart.module.css';
import { fetchDailyData } from "../../api";
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const Charts = () => {
    const [dailyData,setDailyData] = useState([]);
    useEffect(() => {
        const fetctdailiData = async() => {
            setDailyData(await fetchDailyData());
        }
        fetctdailiData();
    });
    const lineChart = (
        dailyData.length ?
        (
        <Line data={{
            labels:dailyData.map(({date})=>date),
            datasets:[{
                data:dailyData.map(({confirmed})=>confirmed),
                label:'Terinspeksi',
                borderColor:'#3333ff',
                fill:true,
            },{
                data:dailyData.map(({deaths})=>deaths),
                label:'Kematian',
                borderColor:'rgba(255,0,0,0.5)',
                fill:true,
            }],
        }}/>
        ) : null
    );
    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}

export default Charts;