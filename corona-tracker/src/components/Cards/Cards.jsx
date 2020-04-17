import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import styles from './Cards.modules.css'

const Cards = ({ confirmed, recovered, deaths, lastUpdate }) => {
  if (!confirmed) {
    return 'Loading...'
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify='center'>
        <Grid item component={Card}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>Infected</Typography>
            <Typography variant='h5'>REAL DATA</Typography>
            <Typography color='textSecondary'>REAL DATE</Typography>
            <Typography variant='body2'>Number of active cases of COVID-19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>Recovered</Typography>
            <Typography variant='h5'>REAL DATA</Typography>
            <Typography color='textSecondary'>REAL DATE</Typography>
            <Typography variant='body2'>Number of people recovered from COVID-19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>Deaths</Typography>
            <Typography variant='h5'>REAL DATA</Typography>
            <Typography color='textSecondary'>REAL DATE</Typography>
            <Typography variant='body2'>Number of Deaths caused due to COVID-19</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  )
}

export default Cards
