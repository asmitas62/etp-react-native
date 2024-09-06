import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Modal,
  ActivityIndicator
} from 'react-native';
const Loader = (props:any) => {
  console.log('loader');
  const {
    loading,
    ...attributes
  } = props;
return (
  <Modal
  transparent={true}
  animationType={'none'}
  visible={loading}>
  <View style={styles.modalBackground}>
    <View style={styles.activityIndicatorWrapper}>
        <ActivityIndicator animating={true} size="large" color="#257f97" />
    </View>
  </View>
</Modal>
  )
}
const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor:"rgba(212, 249, 246, 0.32)",
    zIndex: 2
  },
  activityIndicatorWrapper: {
    backgroundColor: 'transparent',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});

export default Loader;