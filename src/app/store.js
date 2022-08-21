import { configureStore } from "@reduxjs/toolkit";
import siteReducer from "../features/sites/siteSlice";


export const store = configureStore({
   reducer: {
      sites: siteReducer
   }
})