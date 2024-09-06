import { default as etptheme } from 'etp.theme.json';
import { useTheme, useStyleSheet, StyleService } from '@ui-kitten/components';
const theme = useTheme();
const themedStyles = StyleService.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        backgroundColor:"#FFFFFF",
    },
    containerheader:{
      flex: 1,
      flexDirection: 'row'
  },
    containerContent:{
        flex: 2, justifyContent: 'flex-end', alignItems: 'center'
    },
    containerDashboard:{
         flex: 4,
         justifyContent: 'space-evenly'
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
        flex:3, justifyContent: 'flex-start', paddingTop:"10%",position:"relative"
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
        color: etptheme["color-basic-400"],
      },
      captionContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
      errorText: {
        fontSize: 12,
        fontWeight: '400',
        color: etptheme["color-danger-500"],
        textTransform:"capitalize"
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
      },
      headerRight:{
        flex:1,
        flexDirection:"row",
        justifyContent:"flex-end"
      },
      calenderView:{
        flex:2,
        top:-14,
        margin:20,
        height:350,
        width:400
      },
      dotSuccess: {
        height: 9,
        width:9,
        marginRight:6,
        backgroundColor:etptheme['color-success-500'],
      borderRadius: 50

    },
    dotWarning: {
      height: 9,
      width:9,
      borderRadius: 50,
      marginRight:6,
      backgroundColor:etptheme['color-warning-500']
  },
  dotDanger: {
    height: 9,
    width:9,
    borderRadius: 50,
    marginRight:6,
    backgroundColor:etptheme['color-danger-500']
},
  dotPrimary: {
    height: 9,
    width:9,
    borderRadius: 50,
    marginRight:6,
    backgroundColor:etptheme['color-primary-500']
},
dotError: {
  height: 5,
  width: 5,
  borderRadius: 50,
  marginRight:6,
  backgroundColor:etptheme['color-basic-500']
},

});
export const styles = useStyleSheet(themedStyles);
