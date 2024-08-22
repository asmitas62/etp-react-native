import { default as etptheme } from 'etp.theme.json';
import { useTheme, useStyleSheet, StyleService } from '@ui-kitten/components';
const theme = useTheme();
const themedStyles = StyleService.create({
    container:{
        flex: 1,
        flexDirection: 'column'
    },
    containerContent:{
        flex: 2, justifyContent: 'flex-end', alignItems: 'center'
    },
    containerDashboard:{
         flex: 2, justifyContent: 'space-evenly', alignItems: 'center'
    },
    containerLoginContent:{
        flex: 2, justifyContent: 'flex-end',
        textAlign:"left"
    },
    containerHeading:{
    flex: 2, 
   justifyContent: 'flex-start', 
    textAlign: "left"
    },
    innerContainer:{
        flex:3, justifyContent: 'flex-start', alignItems: 'center' ,paddingTop:"40%",position:"relative"
    },
    innerLoginContainer:{
        flex:3, justifyContent: 'flex-start', paddingTop:"30%",position:"relative"
    },
    logoImage:{
        width:100,
        height:100,
    },
    logoView:{
    },
    logoText:{
        color: 'color-primary-500',
        fontWeight:"500",
        textAlign: "center",
        verticalAlign: "bottom",
        fontSize:28,
        paddingTop:18
    },
    logoTextSm:{
        fontSize:11,
   },
    inputField:{
        backgroundColor:'color-primary-500',
        color:'color-primary-500',
        height:50,
        borderRadius:4,
        padding:12,
        fontSize:17,
        fontWeight:"600",
        
    },
    footer:{
		bottom:0,
		position:'absolute',
        left:130
    },
      captionText: {
        fontSize: 12,
        fontWeight: '400',
        color: etptheme["color-danger-500"],
      },
      bgPrimary:{
        backgroundColor:etptheme['color-primary-400'],
        color:etptheme['color-basic-100'],
        width:"100%",
        margin:10
      },
      fullWithButton:{
        width:"100%",
        marginRight:10,
        marginLeft:10,
        marginTop:10,
        justifyContent:"center",
		alignSelf:"center"
      }

});
export const styles = useStyleSheet(themedStyles);
