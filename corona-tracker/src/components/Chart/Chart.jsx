import React, { useState, useEffect } from 'react'
import { fetchDailyData } from '../../api'
import { Line, Bar } from 'react-chartjs-2'

import styles from './Chart.module.css'

const Charts = () => {
  const [dailyData, setDailyData] = useState({})
  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData())
    }
    console.log(dailyData)
    fetchAPI()
  })

  const lineChart = (
    dailyData[0]
      ? (
        <Line data={{
          labels: dailyData(({ date }) => date),
          datasets: [{
            
          }]
        }}
        />) : null
  )
  return (
    <h1>Charts</h1>
  )
}

export default Charts
