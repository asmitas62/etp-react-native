import { View, StyleSheet } from 'react-native'
import React, { Dispatch } from 'react'
import { Button, Text, Layout, TopNavigation, Card,ProgressBar, CircularProgressBar } from '@ui-kitten/components';
import { UnknownAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { VisitorModel, VisitorStatusModel } from '../model/VisitorDetailModel';

const VisitorStatusView = (props:{dispatchAction:Dispatch<UnknownAction>}) => {
    const visitorDetail: VisitorStatusModel = useSelector((state: any) => state.visitorDetail?.data);
    
    console.log('visitor deatil----',visitorDetail);
    const renderOverflowMenuAction = (): React.ReactElement => (
        <Button style={{ marginRight: 0 }}
            appearance='ghost'
            status='primary'
        >
            SEE All
        </Button>
    );
    const renderHeading = (): React.ReactElement => (
        <Text category='s1'>Visitor Status</Text>
    );
    const returnString = (valNum:number|null|undefined)=>{
        if(valNum){
        return valNum.toString();
        }else{
            return '0';
        }
    }
    return (<>
        <TopNavigation title={renderHeading}  accessoryRight={renderOverflowMenuAction} />
        <Layout level='1' style={styles.layoutCantainer} >
                    <View style={[styles.alternativeContainer]}>
                    <CircularProgressBar  size="large"  status='primary'  progress={visitorDetail?.totalVisitor}   />
                    <Text category='c1' status='primary'>Total:{returnString(visitorDetail?.totalVisitor)}</Text>
                    </View>
                    <View style={[styles.alternativeContainer]}>
                    <CircularProgressBar size="large"  status='danger'  progress={visitorDetail?.todayOut}   />
                    <Text category='c1' status='danger'>TodayOut:{returnString(visitorDetail?.todayOut)}</Text>
                    </View>
                    <View style={[styles.alternativeContainer]}>
                    <CircularProgressBar size="large"   status='success'  progress={visitorDetail?.todayIn}   />
                    <Text category='c1' status='success'>TodayIn:{returnString(visitorDetail?.todayIn)}</Text>
                    </View>
                    <View style={[styles.alternativeContainer]}>
                    <CircularProgressBar size="large"  status='warning'  progress={visitorDetail?.todayPending}   />
                    <Text category='c1' status='warning'>Pending:{returnString(visitorDetail?.todayPending)}</Text>
                    </View>
        </Layout></>
    )
}
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        margin: 2,
    },
    alternativeContainer: {
        marginBottom: 7,
        margin:10,
        alignItems:"center"
    },
    L1: {
        width: 150,
        height:20

    },
    L2: {
        width: 170, height:20
    },
    L3: {
        width: 130, height:20
    },
    L4: {
        width: 160, height:20
    },
    M1:{
        marginBottom:10,
        marginLeft:10,
        marginRight:10
    },
    layoutCantainer:{
        marginLeft:20,
        marginRight:20,
        flex:1,
        flexDirection:"row"
  
      }
});
export default VisitorStatusView;