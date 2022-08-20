import axios from 'axios'
import { URL } from '../utils/constants'


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

//Get last site to dispatch with ID from endpoint
export const getLastSite = async () => {
   try {
      const res = await axios.get(`${URL}/sites`)
      const data = res.data
         return data.at(-1)      
   } catch (err) {
      console.log(err)
   }
}

//Get single site
export const getSingleSite = async (id) => {
   try {
      const res = await axios.get(`${URL}/site/${id}`)
      const data = res.data
      return data
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