import axios from 'axios'

export const url = 'https://covid19.mathdro.id/api'

export const fetchData = async () => {
  try {
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url)
    const modifiedData = { confirmed, recovered, deaths, lastUpdate }

    return modifiedData
  } catch (error) {
    console.log(error)
  }
}
export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`)
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate
    }))
    return modifiedData
  } catch (error) {
    console.log(error)
  }
}

export const countries = async () => {
  try {
    const response = await axios.get(`${url}/countries`)
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}
