import { configureStore } from '@reduxjs/toolkit';
import attendanceDetailReducer from './reducer/attandenceSlice';
import leaveBalanceDetailReducer from './reducer/leaveDataSlice';
import visitorDetailSliceReducer from './reducer/visitorDetailSlice';

export const store = configureStore({
  reducer: {
    attendanceDetail:attendanceDetailReducer,
    leaveBalanceData:leaveBalanceDetailReducer,
    visitorDetail:visitorDetailSliceReducer
  },
});