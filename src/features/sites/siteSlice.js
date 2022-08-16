import { createSlice } from "@reduxjs/toolkit";

export const siteSlice = createSlice({
   name: 'sites',
   initialState: [],
   reducers: {
      initSites: (state, action) => { 
         console.log('REDUCER', state, action);
      }
   }
})

export const { initSites } = siteSlice.actions

export default siteSlice.reducer 