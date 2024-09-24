// Import the createSlice API from Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';
import { LeaveModel } from '~/app/model/leaveModel';
interface leaveBalanceState{
  data:Array<LeaveModel> | null
}
// This is the initial state of the slice
const initialState:leaveBalanceState = {
  data: null
};

export const leaveDataSlice  = createSlice({
  name: 'leaveBalanceDetail', // This is the name of the slice, we will later use this name to access the slice from the store
  initialState: initialState, // This is the initial state of the slice
  reducers: {
    // All the reducers go here
    getLeaveBalanceDetail: (state, action) => {
      // This is the reducer function for the deposit action
      state.data = action.payload;
    },
    updateLeaveBalanceDetail: (state, action) => {
      // This is the reducer function for the withdraw action
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getLeaveBalanceDetail, updateLeaveBalanceDetail } = leaveDataSlice.actions;

// We export the reducer function so that it can be added to the store
export default leaveDataSlice.reducer;