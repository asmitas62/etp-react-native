import Toast from 'react-native-toast-message';

 const showToast = (title:any,message:any,messageType:string) => {
    Toast.show({
      type: messageType,
      text1: title,
      text2: message,
      autoHide:true
        });
  }
  export default showToast;