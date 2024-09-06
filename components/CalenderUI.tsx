import React from 'react';
import { Calendar, Layout, StyleType, Text } from '@ui-kitten/components';
import { CalendarDateInfo } from '@ui-kitten/components/ui/calendar/type';
import { StyleProp, View, StyleSheet, ViewStyle } from 'react-native';
import { MomentDateService } from "@ui-kitten/moment";
import moment from "moment";
import * as globalcss from './../global.css'
export const CalendarView = (): React.ReactElement => {
  const renderDay = (
    info: CalendarDateInfo<Date>,
    style: StyleType
  ): React.ReactElement => {
    const { date } = info;
    const dayLabel = date.getDate();
    

    const containerStyle = (): StyleProp<ViewStyle> => {
      return [style.container,themedStyles.dayContainer];
    };

    return (
      <View style={containerStyle()}>
        <Text style={style.text}>{dayLabel}</Text>
      </View>
    );
  };

  const renderFooter= () =>{
    return (<><View>
        <Layout
    style={themedStyles.footerLayout}
    level='1'
  >
    <Text style={globalcss.styles.dotPrimary} status='primary'>.</Text>
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
        </View></>);
  }

  

  return (
    <>
      <Text category='s1' status='default' style={{marginBottom:5,borderColor:"#BBB",borderBottomWidth:2,borderStyle:"solid"}}>Calender</Text>
      <Calendar
        date={new Date()}
        renderDay={(info: CalendarDateInfo<Date>, style: StyleType)=>renderDay(info,style)}
        renderFooter={renderFooter}
      />
    </>
  );
};
const themedStyles = StyleSheet.create({
    dayContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 50
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
    },
    footerLayout:{
        flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    padding:14
    },   
    textFooter:{
        marginRight:10,
    }
        
  });