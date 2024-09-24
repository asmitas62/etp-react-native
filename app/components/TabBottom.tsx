import React, { ComponentProps, ReactElement } from 'react';
import {  ImageProps, StyleSheet } from 'react-native'
import { BottomNavigation, BottomNavigationTab, IconElement ,Icon,IconProps} from '@ui-kitten/components';
import * as colorTheme from './../../etp.theme.json';
import { router } from 'expo-router';
const primaryColor= colorTheme['color-primary-500'];
const shakeIconRef = React.useRef<Icon<Partial<ImageProps>>>();
const PersonIcon = (props:ComponentProps<IconProps>): IconElement => (
  <Icon
    {...props}
    style={styles.icon}
    fill={primaryColor}
    name='home'
  />
);

const InboxIcon = (props:ComponentProps<IconProps>): IconElement => (
  <Icon
  {...props}
  style={styles.icon}
  fill={primaryColor}

  name='inbox'
  />
);

const TeamIcon = (props:ComponentProps<IconProps>): IconElement => (
  <Icon
  {...props}
  style={styles.icon}
  fill={primaryColor}
  name='people'
  />
);

const MoreIcon = (props:ComponentProps<IconProps>): IconElement => (
  <Icon {...props}
    fill={primaryColor}
    style={styles.icon}
    name='more-horizontal'
  />
);
const PlusIcon = (props:ComponentProps<IconProps>): IconElement => (
  <Icon {...props}
    name='plus-outline'
    ref={shakeIconRef}
    fill='#FFFFFF'
    style={styles.icon}
    animation='shake' 
  />
);

export const TabBottom = ({navigation,state}:any): React.ReactElement => {

  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleNavigation= (index:any)=>{
    console.log('tab index', index,state.routeNames )
    navigation.navigate(state.routeNames[index]);
  }
  return (
    <BottomNavigation id='tabs'   appearance='noIndicator' 
    style={{position:"static",height:70, bottom:"-3%",}}
      selectedIndex={selectedIndex} 
      onSelect={(index) => handleNavigation(index)}>
      {/* <BottomNavigationTab title='ORDERS'  appearance='primary'/>
      <BottomNavigationTab title='USERS'  appearance='primary' /> */}

      <BottomNavigationTab appearance='primary' 
        icon={PersonIcon} style={styles.tabContainer}
        
      />
      <BottomNavigationTab appearance='primary' 
        icon={InboxIcon}
        style={[styles.tabContainer,{marginRight:"20%"}]}
      />
      <BottomNavigationTab appearance='primary' 
        icon={ PlusIcon}
         style={{width:55, height:57 , position:"absolute",left:"43%",bottom:"50%",borderRadius:50,borderColor:"#FFFFFF", borderStyle: 'solid',borderWidth:4,backgroundColor:"#1E6955"}}
      />
      <BottomNavigationTab appearance='primary' 
      icon={TeamIcon}
      style={styles.tabContainer}
    />
      <BottomNavigationTab appearance='primary' 
        icon={MoreIcon}
        style={styles.tabContainer}
      />
    </BottomNavigation>
  );
};
const styles = StyleSheet.create({
  tabContainer:{
    marginBottom:"4%", 
  },
  icon: {
    width: 25,
    height: 25,
  }
})