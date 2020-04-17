import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
import styles from './CountrySelector.module.css'
import { countries } from '../../api/index'
const Country = () => {
  const [fetchedCountries, setFetchedCountries] = useState([])
  useEffect(() => {
    const fetchCountries = async () => {
      setFetchedCountries(await countries)
    }
    fetchCountries()
  }, [setFetchedCountries])
  return (
    <FormControl className={styles.FormControl}>
      <NativeSelect>
        <option value='global'>Global</option>
      </NativeSelect>
    </FormControl>
  )
}

export default Country
