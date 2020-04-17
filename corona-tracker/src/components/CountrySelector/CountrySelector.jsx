import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
import styles from './CountrySelector.module.css'
import { fetchCountries } from '../../api/index'
const Country = () => {
  const [fetchedCountries, setFetchedCountries] = useState([])
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries())
    }
    fetchAPI()
  }, [setFetchedCountries])
  console.log(fetchedCountries)
  return (
    <FormControl className={styles.FormControl}>
      <NativeSelect>
        <option value='global'>Global</option>
      </NativeSelect>
    </FormControl>
  )
}

export default Country
