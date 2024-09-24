// Import the createSlice API from Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';
import { VisitorStatusModel } from '~/app/model/VisitorDetailModel';
interface visitorDetailState{
  data:VisitorStatusModel| null
}
// This is the initial state of the slice
const initialState:visitorDetailState = {
  data: null
};

export const visitorDetailSlice  = createSlice({
  name: 'visitorDetail', // This is the name of the slice, we will later use this name to access the slice from the store
  initialState: initialState, // This is the initial state of the slice
  reducers: {
    // All the reducers go here
    getvisitorDetail: (state, action) => {
      // This is the reducer function for the deposit action
      state.data = action.payload;
    },
    updatevisitorDetail: (state, action) => {
      // This is the reducer function for the withdraw action
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getvisitorDetail, updatevisitorDetail } = visitorDetailSlice.actions;

// We export the reducer function so that it can be added to the store
export default visitorDetailSlice.reducer;