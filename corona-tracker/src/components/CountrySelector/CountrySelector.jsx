import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl, StylesProvider } from '@material-ui/core'
import styles form './CountrySelector.module.css'

const Country = () => {
  return (
    <FormControl className={Styles.FormControl}>
      <NativeSelect>
        <option value="global">Global</option>
      </NativeSelect>
    </FormControl>
  )
}

export default Country
