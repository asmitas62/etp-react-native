import { StyleSheet } from "react-native";
import { Container } from "./components/Container";
export const color = {
    dark:"#030b17",
    primary:"#092144",
    secendory:"#0f3771",
    ternary:"#154d9e",
    success:"#caffca",
    danger:"#ffb5b5",
    warning:"#ffff9f",
    skyblue:"#bfe5f4",
    darkGreen:"#02563d",
    lightpink:"#660000",
    orangeLight:"#660000",
    white:"#ffffff"

};
export const GlobalStyle = StyleSheet.create({
    // wraper:{
    //     backgroundColor:color.secendory,
    // },
    container:{
        flex: 1,
    },
    innerContainer:{
        backgroundColor:color.secendory,
        flex:1,
        color:color.white,
        margin:16
    },
    logoImage:{
        width:50,
        height:50,
        borderRadius:3,
    },
    logoView:{
    },
    logoText:{
        color: color.primary,
        fontWeight:"500",
        // alignItems: "baseline",
        textAlign: "center",
        verticalAlign: "bottom",
        fontSize:34,
        paddingTop:18
    },
    logoTextSm:{
        fontSize:11,
   },
    inputField:{
        backgroundColor:color.primary,
        color:color.white,
        height:50,
        borderRadius:4,
        padding:6,
        fontSize:17,
        fontWeight:"700"
    }    
});