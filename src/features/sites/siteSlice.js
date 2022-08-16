import { createSlice } from "@reduxjs/toolkit";
import{ getAllSites }  from '../../services/sites'

const initialState = getAllSites();
console.log('SITES', initialState);

export const siteSlice = createSlice({
   name: 'sites',
   sites: initialState,
   reducers: {
      initialSites: (state, action) => { 
         console.log('REDUCER', state, action);
      }
   }
})

export const { initialSites } = siteSlice.actions

export default siteSlice.reducer 