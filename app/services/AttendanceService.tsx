import { View, Text } from 'react-native'
import React from 'react'
import axiosInstance from './HttpInterceptor';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PATH } from '../constant/ServicePathConstent';
import AppUtil from './util/AppUtil';
import { useDispatch } from 'react-redux';
import { getAttendanceDetail } from '../store/reducer/attandenceSlice';
import { Dispatch, UnknownAction } from '@reduxjs/toolkit';
export function fetchAttendance(employeeID:string,date:string){
        const path = PATH.FETCH_ATTENDANCE_DETAIL.replace('{employeeID}',employeeID).replace('{date}',date);
        console.log('path',path);
        return axiosInstance.get(path);
}
export function fetchLeaveBalance(employeeID:string){
    const path = PATH.FETCH_LEAVE_BALANCE.replace('{1}',employeeID);
    console.log('path',path);
    return axiosInstance.get(path);
}
export function fetchVisitorStatus(date:string){
    const path = PATH.FETCH_VISITOR_DETAIL.replace('{date}',date);
    console.log('path',path);
    return axiosInstance.get(path);
}