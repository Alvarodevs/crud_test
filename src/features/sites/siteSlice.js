import { createSlice } from "@reduxjs/toolkit";
import { getAllSites } from "../../services/sites";

const initialState = [];

export const siteSlice = createSlice({
   name: 'sites',
   initialState,
   reducers: {
      initSites: (state, action) => {
         state.push(action.payload)
      },
      addSiteState: (state, action) => {
         state[action.payload.__v].push(action.payload)
      },
      editSiteState: (state, action) => {
         console.log('STATE', state, 'ACTION', action)
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


export const { initSites, addSiteState, deleteSiteState } = siteSlice.actions

export default siteSlice.reducer 