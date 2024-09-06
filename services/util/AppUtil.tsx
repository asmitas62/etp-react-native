import { View, Text } from 'react-native'
import React from 'react'

const AppUtil:any = {
     _deepCopy(data: any) {
        return JSON.parse(JSON.stringify(data));
    }
    
} 
export default AppUtil;
