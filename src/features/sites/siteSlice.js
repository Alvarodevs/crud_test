import { createSlice } from "@reduxjs/toolkit";
import { getAllSites, getLastSite } from "../../services/sites";

const initialState = [];

export const siteSlice = createSlice({
   name: 'sites',
   initialState,
   reducers: {
      initSites: (state, action) => {
         state.push(action.payload)
      },
      addSiteState: (state, action) => {
         console.log('ACTION', action)
         const found = state[0].some(site => site._id === action.payload._id);
         if(!found){
            state[action.payload.__v].push(action.payload)
         }
      },
      editSiteState: (state, action) => {
         const {_id, __v} = action.payload;
         const found = state[__v].find(siteToFind => siteToFind._id === _id);
         const index = state[__v].indexOf(found)
         if(index !== -1){
            state[__v][index] = action.payload   
         }
      },
      deleteSiteState: (state, action) => {
         const {_id, v} = action.payload;
         const found = state[v].find(site => site._id === _id);
         if (found) {
            state[v].splice(state[v].indexOf(found), 1)
         }
      }
   }
})


export const { initSites, addSiteState, editSiteState, deleteSiteState } = siteSlice.actions

export default siteSlice.reducer 