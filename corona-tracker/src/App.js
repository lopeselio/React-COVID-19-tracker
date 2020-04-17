import React from 'react'
// import Cards from './components/Cards'
// import Chart from './components/Chart'
// import Country from './components/CountrySelector'

import { Cards, Country, Charts } from './components'
import styles from './App.module.css'
import { fetchData } from './api/index'

class App extends React.Component {
state = {
  data: {},
  country: ''
}

  async componentDidMount () {
    const fetchedData = await fetchData()
    this.setState({ data: fetchedData })
    // console.log(data)
  }

  handleCountryOnChange = async (country) => {
    console.log(country)
    // fetch data

    //set the state
  }

  render () {
    const { data } = this.state

    return (
      <div className={styles.container}>
        <Cards data={data} />
        <Country handleCountryOnChange={this.handleCountryOnChange} />
        <Charts />
      </div>
    )
  }
}

export default App
