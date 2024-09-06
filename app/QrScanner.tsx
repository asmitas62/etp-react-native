import React, { useState, useEffect, ComponentProps } from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { CameraView, Camera } from "expo-camera";
import { Link, router, useNavigation } from "expo-router";
import { useAuth } from "~/context/AuthContext";
import { Button, IconElement, IconProps, Input,Layout,Text } from "@ui-kitten/components";
import * as globalCss from "../global.css";
import Icon from "react-native-vector-icons/FontAwesome";
import * as Yup from 'yup';
import { Formik } from "formik";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FooterMain from "./FooterMain";
const ValidationSchema = Yup.object({
  password: Yup.string()
      .required('Please enter Password')
});

const QrScanner =(props: { navigation: any; route: any; })=> {
  const loginDetails = {
    apiUrl:'',
    clientDomain:'',
    loginId:''
  }
  // const { navigation } = props;
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState('');
  const { onLogin } = useAuth();
    const styleCss = globalCss.styles;
    const [passwordVisible, setPasswordVisible] = useState(false);
    useEffect(() => {
        navigation.setOptions({ headerTitle: '',headerBackTitle:"Back", headerTransparent: true });
    }, [navigation]);
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const renderIcon = (props: ComponentProps<IconProps>): IconElement => (
        <TouchableWithoutFeedback onPress={togglePasswordVisibility}>
            <Icon
                {...props}
                name={passwordVisible ? 'eye-slash' : 'eye'} style={{ marginTop: 3 }}
            />
        </TouchableWithoutFeedback>
    );
    const renderCaption = (props: any): React.ReactElement => {
        return (
            <View style={styleCss.captionContainer}>
                <Text style={styleCss.errorText}>
                    {props}
                </Text>
            </View>
        );
    };
  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(()=>status === "granted");
    };
    getCameraPermissions();
  }, []);

  const OnPressSubmit =(values:any) =>{
    const userData = JSON.parse(scannedData);
    console.log('scanned data', JSON.parse(scannedData));
    const domainUrl = AsyncStorage.setItem('apiUrl',userData.apiUrl);
    console.log("sent data",userData.loginId, values.password, userData.clientDomain, userData.apiUrl);
    onLogin!(userData.loginId, values.password, userData.clientDomain, userData.apiUrl);

  }
  const handleBarCodeScanned = ({ data }: any) => {
    console.log('camra started');
    setScanned(true);
    router.setParams({query:data});
    console.log(data,"---qr");
    setScannedData(data);
    //{"apiUrl":"https://testapi.etpcloud.in/","clientDomain":"TEST","loginId":"av0123"}
    // router.navigate({pathname:"/loginPage",params:{userData:data}})
  };

  const RenderOnlyPassword = () => {
    return (<Formik initialValues={{ password: '' }}
      validationSchema={ValidationSchema}
      onSubmit={(values,FormikAction)=>OnPressSubmit(values)}>
      {({
          values,
          errors,
          isValid,
          dirty,
          isSubmitting,
          submitForm,
          handleChange,
          handleBlur,
      }) => {
          const { password } = values;
          console.log("formik values", values.password);
        return (<>
      <Input style={styles.input}
        placeholder="Password"
        label='Password'
        textStyle={{ fontSize: 14 }}
        secureTextEntry={!passwordVisible}
        accessoryRight={renderIcon}
        value={password}
        onBlur={handleBlur('passowrd')}
        onChangeText={handleChange('password')}
        caption={errors.password ? renderCaption(errors.password) : ''}
      />
      <Button status="primary" size="large" style={styles.button} disabled={!isValid} onPress={submitForm}>Submit</Button>
      </>)
      }}
      </Formik>
      )
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  if(scanned){
    return (<><Layout style={styleCss.container}>
      <View style={styleCss.containerLoginContent} >
          <Text status='primary' category='h1' style={{ textAlign: "left", marginTop: 40 }}>
              Welcome !</Text>
          <Text category='h4' status='primary' style={{ margin: "3%", textAlign: "left" }}>
              Continue To Sign in <Icon name='arrow-right' style={{ fontSize: 20, width: 40, height: 40 }} /></Text>
      </View>

      <View style={styleCss.innerLoginContainer}>
          <View style={{ flex: 1 }}>
              <RenderOnlyPassword/>
          </View>
      </View>
      <FooterMain/>
  </Layout></>)
  }else {
  return (

    <View style={styles.container}>
      <CameraView
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
        
        barcodeScannerSettings={{
          barcodeTypes: ["qr"],
        }}
        style={StyleSheet.absoluteFillObject}
      />
    </View>
  );
}
}
export default QrScanner;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  controlContainer: {
    borderRadius: 4,
    marginTop: "25%",
    padding: 7,
    width: "100%",
    justifyContent: "flex-start"
},
icon: {
    width: 32,
    height: 32,
},
input: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 15
},
button: {
    justifyContent: "flex-start",
    alignSelf: "flex-end",
    marginRight: 10,
    top: 10
},
captionContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
}
});