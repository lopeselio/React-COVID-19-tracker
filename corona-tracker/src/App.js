import React from 'react'
// import Cards from './components/Cards'
// import Chart from './components/Chart'
// import Country from './components/CountrySelector'

import { Cards, Country, Chart} from './components'

class App extends React.Component {
  render () {
    return (
      <div>
        <Cards />
        <Chart />
        <Country />
      </div>
    )
  }
}

export default App
