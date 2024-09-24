import React, { ReactElement, useEffect, useState } from 'react';
import { Button, Layout, StyleType, Text, TopNavigation, TopNavigationAction, Divider } from '@ui-kitten/components';
import { CalendarDateInfo } from '@ui-kitten/components/ui/calendar/type';
import { StyleProp, View, StyleSheet, ViewStyle } from 'react-native';
import * as globalcss from 'global.css'
import { useDispatch, useSelector } from 'react-redux';
import { Attendance, AttendanceModel } from '../model/AttendanceModel';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import * as calender from './../../calender.css';
import * as calendertheme from 'calender.theme';
import { DateData, MarkedDates } from 'react-native-calendars/src/types';
import moment from 'moment';
import UIConstant from '../constant/UIConstant';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppUtil from '../services/util/AppUtil';
import { fetchAttendance } from '../services/AttendanceService';
import { Dispatch, UnknownAction } from '@reduxjs/toolkit';
import { getAttendanceDetail } from '../store/reducer/attandenceSlice';
import { useIsFocused } from '@react-navigation/native';
export const CalendarView = (props:{dispatchAction:Dispatch<UnknownAction>}): React.ReactElement => {
 
  const styleCss = calender.styles;
  const calTheme = calendertheme;
	const isFocused = useIsFocused();
  // const [selectedDates, setSelectedDates] = useState({});
  var [markedDates,setMarkedDates] = useState({});
//   useEffect(() => {
//     console.log('marked dates updated');
//     setMarkedDates(markedDates);
//  },[markedDates]);
  const getColorCode =(status:string)=>{
    if(status){
      switch(status) {
        case 'A':  return UIConstant.WORK_DAY_STATUS.ABSENT.value;  
        case 'P':  return UIConstant.WORK_DAY_STATUS.PRESENT.value;  
        case 'A-P':  return UIConstant.WORK_DAY_STATUS.ABSENT.value;  
        case 'WO':  return UIConstant.WORK_DAY_STATUS.WEEKLY_OFF.value;        
        case 'POW':  return UIConstant.WORK_DAY_STATUS.PRESENT_ON_WO.value;  
        case 'HLD':  return UIConstant.WORK_DAY_STATUS.HOLIDAY.value;  
        case 'MIS':  return UIConstant.WORK_DAY_STATUS.PUNCH_MISS.value;  
        case 'HLF':  return UIConstant.WORK_DAY_STATUS.HALFDAY.value;  
        case 'PWH':  return UIConstant.WORK_DAY_STATUS.PRESENT_ON_WO_HLD.value;  
        case 'OD':  return UIConstant.WORK_DAY_STATUS.ON_DUTY.value;  
        case 'L':  return UIConstant.WORK_DAY_STATUS.LEAVE.value;  
        default:
          return UIConstant.WORK_DAY_STATUS.DEFAULT.value;
      }
    }
    return status;
  }
  useEffect( () => {
    function load_result() {
      console.log('efect called');
      setMarkedDates(markedDates);
    }
    if(isFocused){
    load_result();
    }
}, [markedDates]);
const attendanceDetail: AttendanceModel = useSelector((state: any) => state.attendanceDetail.data);
      console.log('attendanceDetail item',  attendanceDetail?.attendances);
      var selectedDates = {};
      attendanceDetail?.attendances.forEach((item: Attendance, i) => {
        const date = moment(item.attendanceDate, 'DD-MMM-YYYY');
        const attendance = date.format('YYYY-MM-DD');
        const markedDate = { selected: true, marked: false, selectedColor: getColorCode(item.status),accessibilityLabel:item.status }
        markedDates = { ...markedDates, [attendance]: markedDate };
      });

  
 
  const renderOverflowMenuAction = (): React.ReactElement => (
    <Button style={{ marginRight: 12 }}
      appearance='ghost'
      status='primary'
    >
      GO TO CALENDER
    </Button>
  );
 
  const renderHeading = (): React.ReactElement => (
    <Text category='label'>CALENDER</Text>
  );

  const updateMonthData=(e:DateData) =>{
    if(e.dateString){
    const date = moment(e.dateString.replace('-',''),"YYYYMMDD").format("DD-MMM-YYYY");
    console.log('view---------',e,date);
    AsyncStorage.getItem('employeeID').then(data => {
      if (data) {
        fetchAttendance(data, date).then((response: any) => {
          const attDetail = AppUtil._deepCopy(response.data);
          if(attDetail.responseObject.httpCode == 200){
            props.dispatchAction(getAttendanceDetail(attDetail.responseObject.response));
          }
        })
        .catch(error => {
          console.error("Error user data: ", error);
        });;
      }
    });
  }
  }

  const RenderFooter=()=>  (<>
      <Divider />
      <Layout
        style={themedStyles.footerLayout}
        level='1'
      >
        <Text style={globalcss.styles.dotPrimary} status='primary'></Text>
        <Text
          style={themedStyles.textFooter}
          status='primary'>Primary</Text>
        <Text style={globalcss.styles.dotDanger}></Text>

        <Text
          style={themedStyles.textFooter}
          status='danger'
        >Danger
        </Text>
        <Text style={globalcss.styles.dotWarning}></Text>
        <Text
          style={themedStyles.textFooter}
          status='warning'
        >Warning</Text>

        <Text style={globalcss.styles.dotSuccess}></Text>
        <Text
          style={themedStyles.textFooter}
          status='success'
        >success</Text>
      </Layout>
    </>);
  

  return (
    <>
      <TopNavigation title={renderHeading} accessoryRight={renderOverflowMenuAction} />
      <Layout level='1' style={themedStyles.layoutCantainer} >
        <Calendar
          // Callback that gets called when the user selects a day
          onDayPress={(e:DateData) => {
            console.log('selected day', e);
          }}
          onVisibleMonthsChange={(e:[DateData])=>updateMonthData(e[0])}
          // Mark specific dates as marked
          markedDates={markedDates}
        />
        <RenderFooter/>
      </Layout>
    </>
  );
};
const themedStyles = StyleSheet.create({
  dayContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  container: {
    flex: 1,
    margin: 2,
    paddingVertical: 4,
    paddingHorizontal: 4,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  buttonContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "flex-start",
  },
  calendarContainer: {
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center",
    alignContent: "flex-start",
  },
  text: {
    marginVertical: 4,
    backgroundColor: "red"
  },
  footerLayout: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    padding: 14
  },
  textFooter: {
    marginRight: 10,
  },
  layoutCantainer: {
    marginLeft: 20,
    marginRight: 20,

  },
  circleHalf: {
    width: 50,
    height: 50,
    backgroundColor: "linear-gradient( -45deg, blue, blue 49%, white 49%, white 51%, red 51% )",
    borderRadius: 50
  }
});