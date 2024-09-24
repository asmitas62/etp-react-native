// Import the createSlice API from Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';
import { AttendanceModel } from '../../model/AttendanceModel';
interface attendanceState{
  data:AttendanceModel | null
}
// This is the initial state of the slice
const initialState:attendanceState = {
  data: null
};

export const attandenceSlice  = createSlice({
  name: 'attendanceDetail', // This is the name of the slice, we will later use this name to access the slice from the store
  initialState: initialState, // This is the initial state of the slice
  reducers: {
    // All the reducers go here
    getAttendanceDetail: (state, action) => {
      // This is the reducer function for the deposit action
      state.data = action.payload;
    },
    updateAttendanceDetail: (state, action) => {
      // This is the reducer function for the withdraw action
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getAttendanceDetail, updateAttendanceDetail } = attandenceSlice.actions;

// We export the reducer function so that it can be added to the store
export default attandenceSlice.reducer;