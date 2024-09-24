import { View, Text } from 'react-native'
import React from 'react'
import moment from 'moment';

const AppUtil:any = {
     _deepCopy(data: any) {
        return JSON.parse(JSON.stringify(data));
    },
    _dateFormateToString(datev:string){
        const date = moment(datev, 'YYYY-MM-DD');
    return date.format('DD-MMM-YYYY');
    }
    
} 
export default AppUtil;
