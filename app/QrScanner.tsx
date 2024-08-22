import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { CameraView, Camera } from "expo-camera";
import { Link, router } from "expo-router";
import { useAuth } from "~/context/AuthContext";

const QrScanner =(props: { navigation: any; route: any; })=> {
  const { navigation } = props;
  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [domainURl, setDomainURL] = useState(null);
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin');
  const [companyCode,setCompanyCode] = useState('admin');
  const { authState } = useAuth();
  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(()=>status === "granted");
    };
    getCameraPermissions();
  }, [authState]);

  const handleBarCodeScanned = ({ data }: any) => {
    setScanned(true);
    router.setParams({query:data});
    setDomainURL(data.apiUrl);
    console.log(data,"---qr");
    setCompanyCode(data.clientDomain);
    setUsername(data.loginId)
    //{"apiUrl":"https://testapi.etpcloud.in/","clientDomain":"TEST","loginId":"av0123"}
    router.navigate({pathname:"/loginPage",params:{userData:data}})
  };

  const goToLoginPage = async()=>{
    console.log("login ");
  }

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <CameraView
        onBarcodeScanned={scanned ? goToLoginPage : handleBarCodeScanned}
        barcodeScannerSettings={{
          barcodeTypes: ["qr"],
        }}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
    </View>
  );
}
export default QrScanner;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});