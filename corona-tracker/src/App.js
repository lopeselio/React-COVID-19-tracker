import React from 'react'
// import Cards from './components/Cards'
// import Chart from './components/Chart'
// import Country from './components/CountrySelector'

import { Cards, Country, Charts } from './components'
import styles from './App.module.css'
import { fetchData } from './api/index'
import covid from './../src/images/img.jpg'

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
    // fetch data
    const fetchedData = await fetchData(country)
    //set the state
    this.setState({ data: fetchedData, country: country })
  }

  render () {
    const { data, country } = this.state

    return (
      <div className={styles.container}>
        <img className={styles.image} src={covid} alt='COVID-19' />
        <Cards data={data} />
        <Country handleCountryOnChange={this.handleCountryOnChange} />
        <Charts data={data} country={country} />
      </div>
    )
  }
}

export default App
