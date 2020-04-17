import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl, StylesProvider } from '@material-ui/core'
import styles from './CountrySelector.module.css'
import { countries } from '../../api/index'
const Country = () => {
  const [ fetchCountries, setFetchedCountries ] = useState([])
  useEffect(( => {
    const fetchCountries = async () => {
      setFetchedCountries(await countries)
    }
    fetchCountries()
  }))
  return (
    <FormControl className={Styles.FormControl}>
      <NativeSelect>
        <option value="global">Global</option>
      </NativeSelect>
    </FormControl>
  )
}

export default Country
