import * as globalCss from "../global.css";
import Logo from '~/components/Logo';
import { Button, Layout, Text } from "@ui-kitten/components";
import { KeyboardAvoidingView, View, StyleSheet } from "react-native";
import { router } from "expo-router";
const  Page = () => {
  const styleCss = globalCss.styles;
  const goToEmpCodeLogin = async()=>{
    router.navigate("/loginPage");
  }
  const onOpenQRScanner = ()=>{
    router.navigate('/QrScanner');
  }
  return (
    <Layout style={styleCss.container}>
      <View style={styleCss.containerContent} >
        <Logo />
      </View>
      <KeyboardAvoidingView style={styleCss.innerContainer}>
        <View style={[styles.controlContainer ]}>
        <Button status="primary" size="large" style={styleCss.fullWithButton}  onPress={goToEmpCodeLogin}>Log in By Employee Code</Button>
        <Button status="basic" size="large" style={styleCss.fullWithButton} onPress={onOpenQRScanner}>Log in By QR Code</Button>
        </View>
        
      </KeyboardAvoidingView>
      <View style={styleCss.footer}>
      </View>
      <View>
        <Text category='c2' status='primary' style={{ marginBottom: "10%", justifyContent: "center", textAlign: "center" }}>
          copyright@ETP,version 2.0.2</Text>
      </View>
    </Layout>

  );
};

export default Page;
const styles = StyleSheet.create({
  controlContainer: {
    borderRadius: 4,
    marginTop: "25%",
    padding: 7,
    width:"100%" ,
    justifyContent:"flex-start"
  }
});