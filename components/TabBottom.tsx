import React, { ComponentProps, ReactElement } from 'react';
import { BottomNavigation, BottomNavigationTab, IconElement ,Icon,IconProps} from '@ui-kitten/components';
const PersonIcon = (props:ComponentProps<IconProps>): IconElement => (
  <Icon 
    {...props}
    name='person'
  />
);

const PeopleIcon = (props:ComponentProps<IconProps>): IconElement => (
  <Icon
  {...props}
    name='people'
  />
);

const InboxIcon = (props:ComponentProps<IconProps>): IconElement => (
  <Icon
  {...props}
    name='email'
  />
);

const MoreIcon = (props:ComponentProps<IconProps>): IconElement => (
  <Icon {...props}
    name='more-horizontal'
  />
);
const PlusIcon = (props:ComponentProps<IconProps>): IconElement => (
  <Icon {...props}
    name='plus'
    animation='shake' 
  />
);

export const TabBottom = (): React.ReactElement => {

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <BottomNavigation id='tabs'   appearance='noIndicator' style={{position:"static", bottom:"-2%"}}
      selectedIndex={selectedIndex}
      onSelect={index => setSelectedIndex(index)}
    >
      <BottomNavigationTab appearance='primary'
        icon={PersonIcon}
      />
      <BottomNavigationTab appearance='primary'
        icon={InboxIcon}
        style={{marginRight:"23%"}}
      />
      <BottomNavigationTab appearance='primary'
        icon={ PlusIcon}
         style={{width:55, height:57 , position:"absolute",left:"43%",bottom:"50%",borderRadius:50,borderColor:"#FFFFFF", borderStyle: 'solid',borderWidth:3,backgroundColor:"#257F97"}}
      />
      <BottomNavigationTab appearance='primary'
      icon={PeopleIcon}
    />
      <BottomNavigationTab appearance='primary'
        icon={MoreIcon}
      />
    </BottomNavigation>
  );
};