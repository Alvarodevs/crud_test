import axios from 'axios'
import {URL} from '../utils/constants'

//Get all sites
export const getAllSites = async () => {
   const res = await axios.get(`${URL}/sites`)
   const data = res.data
   return data
}
