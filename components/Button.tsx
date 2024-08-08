import { forwardRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps,View } from 'react-native';
import { endAsyncEvent } from 'react-native/Libraries/Performance/Systrace';
import { color, GlobalStyle } from '~/global.css';

type ButtonProps = {
  onPress?: TouchableOpacityProps['onPress'];
  title?: string;
} & TouchableOpacityProps;

export const Button = forwardRef<TouchableOpacity, ButtonProps>(({ onPress, title }, ref) => {
  return (
    <View style={styles.buttonContainer} id='buttonContainer'>
      <TouchableOpacity ref={ref} style={styles.buttonNext} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
    </View>
  );
});

const styles = StyleSheet.create({
  buttonContainer:{
    paddingTop:10
  },
  buttonNext:{
    backgroundColor: color.secendory,
    width:113,
    height:40,
    left:205,
    borderRadius:7,
    padding:10,
   
},
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 17,
    textTransform:'uppercase'
  }
});
