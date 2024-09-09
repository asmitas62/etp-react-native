import { View, StyleSheet } from 'react-native'
import React from 'react'
import { Button, Text, Layout, TopNavigation, Card } from '@ui-kitten/components';

const LeaveBalanceView = () => {

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
    return (<>
        <TopNavigation title={renderHeading}  accessoryRight={renderOverflowMenuAction} />
        <Layout level='1' style={styles.layoutCantainer} >
            <Layout level='1'>
                <Card>
                    <View style={[styles.alternativeContainer,styles.L1]}>
                        <Text style={styles.text} appearance='alternative'> Option Leave </Text>
                    </View>
                    <View style={[styles.alternativeContainer,styles.L2]}>
                        <Text style={styles.text} appearance='alternative'> Casual
                            Leave </Text>
                    </View>
                    <View style={[styles.alternativeContainer,styles.L3]}>
                        <Text style={styles.text} appearance='alternative'> Casual
                            Leave </Text>
                    </View>
                    <View style={[styles.alternativeContainer,styles.L4]}>
                        <Text style={styles.text} appearance='alternative'> Casual
                            Leave </Text>
                    </View>
                    </Card>
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
  
      }
});
export default LeaveBalanceView;