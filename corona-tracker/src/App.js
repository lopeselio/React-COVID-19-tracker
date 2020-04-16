import React from 'react'
// import Cards from './components/Cards'
// import Chart from './components/Chart'
// import Country from './components/CountrySelector'

import { Cards, Country, Charts } from './components'
import styles from './App.module.css'

class App extends React.Component {
  render () {
    return (
      <div className={styles.container}>
        <Cards />
        <Charts />
        <Country />
      </div>
    )
  }
}

export default App
