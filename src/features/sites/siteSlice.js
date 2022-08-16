import { createSlice } from "@reduxjs/toolkit";


const initialState = [];

export const siteSlice = createSlice({
   name: 'sites',
   initialState,
   reducers: {
      initSites: (state, action) => { 
         state.push(action.payload)
      }
   }
})

export const { initSites } = siteSlice.actions

export default siteSlice.reducer 