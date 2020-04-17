import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
import styles from './CountrySelector.module.css'
import { fetchCountries } from '../../api/index'
const Country = ({ handleCountryOnChange}) => {
  const [fetchedCountries, setFetchedCountries] = useState([])
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries())
    }
    fetchAPI()
  }, [setFetchedCountries])
  // console.log(fetchedCountries)
  return (
    <FormControl className={styles.FormControl}>
      <NativeSelect defaultValue='' onChange={(e) => { handleCountryOnChange(e.target.value) }}>
        <option value='global'>Global</option>
        {fetchedCountries.map((country, i) => {
          return <option key={i} value={country}>{country}</option>
        })}
      </NativeSelect>
    </FormControl>
  )
}

export default Country
