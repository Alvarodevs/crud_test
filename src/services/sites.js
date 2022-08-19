import axios from 'axios'
import {URL, JSON_SERVER_URL} from '../utils/constants'

//Get all sites
export const getAllSites = async () => {
   try {
      const res = await axios.get(`${URL}/sites`)
      const data = res.data
      return data
   } catch (err) {
      console.log(err)
   }
}

//Get single site
export const getSingleSite = async (site) => {
   try {
      const res = await fetch(`${URL}/site/${site}`)
      if (res.ok){
         const json = await res.json()
      }

      // axios.get(`${URL}/site/${site}`)
      // console.log('RES', res)
      // const data = res.data
      
      return json
   } catch (err) {
      console.log(err)
   }
}

//Post new site
export const postSite = async (site) => {
   try {
      await axios.post(`${URL}/site`, site)
   } catch (err){
      console.log(err)
   }   
}

//Edit site
export const editSite = async (id, site) => {
   try {
      await axios.put(`${URL}/site/${id}`, site)
   } catch (err){
      console.log(err)
   }   
}

//Delete site 
export const deleteSite = async (id) => {
   try {
      await axios.delete(`${URL}/site/${id}`)
   } catch (err){
      console.log(err)
   }
}