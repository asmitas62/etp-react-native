import { View, StyleSheet } from 'react-native'
import React from 'react'
import { Icon, Layout, Text } from '@ui-kitten/components';
import * as globalCss from 'global.css';
import { G } from 'react-native-svg';

const Header = ({ name }: any) => {
    const gCss = globalCss.styles;
    return (<Layout style={styles.container}>
            <Layout
                style={styles.layout}
                level='1'
            >
                <Text category='h3' status='primary'>Hi {name}!</Text>
            </Layout>
            <Layout style={styles.layoutRight} level='1'>
                <View><Icon
                    fill='#257F97'
                    style={styles.icon}
                    name='search'
                /></View>
                <Icon
                    fill='#257F97'
                    style={styles.icon}
                    name='bell'
                />
                <Icon
                    fill='#257F97'
                    style={styles.icon}
                    name='settings' />
            </Layout>
        </Layout>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        top: 30,
        margin: 20
    },
    layout: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height: 40,
        paddingLeft: 10,


    },
    layoutRight: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: "flex-end",
        height: 40,
        paddingRight: 0,
        flexDirection:"row",
        flexWrap:'wrap'

    },
    icon: {
        width: 20,
        height: 20,
        marginRight:7
    }
});
export default Header;