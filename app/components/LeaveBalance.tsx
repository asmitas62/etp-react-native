import { View, StyleSheet } from 'react-native'
import React, { Dispatch } from 'react'
import { Button, Text, Layout, TopNavigation, Card, Divider } from '@ui-kitten/components';
import { UnknownAction } from '@reduxjs/toolkit';
import { LeaveModel } from '../model/leaveModel';
import { useSelector } from 'react-redux';

const LeaveBalanceView = (props:{dispatchAction:Dispatch<UnknownAction>}) => {

    const renderOverflowMenuAction = (): React.ReactElement => (
        <Button style={{ marginRight: 0 }}
            appearance='ghost'
            status='primary'
        >
            SEE All
        </Button>
    );
    const renderHeading = (): React.ReactElement => (
        <Text category='s1'>LEAVE BALANCE</Text>
    );
    const LeaveBalanceDetail: [LeaveModel] = useSelector((state: any) => state.leaveBalanceData?.data);
      console.log('LeaveBalanceDetail item',  LeaveBalanceDetail);
    return (<>
        <TopNavigation title={renderHeading}  accessoryRight={renderOverflowMenuAction} />
        <Layout level='1' style={styles.layoutCantainer} >
            <Layout level='1'>
                <Card>
                {LeaveBalanceDetail?.map((props,i)=> {
                    console.log('jhjhjhj',props,i);
                    if(i>4){
                        var codename = props?.leaveName;
         return (<>
            <View style={[styles.layoutLeave,styles.L1]}>
            <Text style={styles.text} appearance='alternative'> {props?.leaveCode} </Text>
            <Text style={{marginLeft:"6%",marginRight:"5%"}} category="s1">{props?.balanceLeave}  </Text>
            <Text category="c1">{codename.replace(' ','_').toLowerCase()}</Text>
        </View>
        {/* <Divider/> */}
        </>
         );
        }
      })}</Card>
            </Layout>
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
        backgroundColor: '#013220',
        width:"auto",
        paddingLeft:"1%",
        paddingRight:"1%",
        borderRadius:4,
        paddingBottom:3,
        paddingTop:2

    },
    alternativeContainer: {
        borderRadius: 4,
        marginVertical: 2,
        marginBottom: 7,
        backgroundColor: '#013220',
        paddingLeft: 4,
        width: 150
    },
    L1: {
        width: "auto",
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
  
    },
    layoutLeave: {
        flex: 1,
        justifyContent: 'flex-start',
        height: 40,
        marginRight: "25%",
        flexDirection: "row",
        flexWrap: 'wrap',
        marginTop:5,
        paddingLeft: 4,
        borderRadius: 4
    },

});
export default LeaveBalanceView;