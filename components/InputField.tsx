import React, { useCallback } from "react";
import { useFormikContext, useField } from "formik";
import { Input, Text } from "@ui-kitten/components";
import PropTypes from "prop-types";
import * as globalCss from "../global.css";
import { View, StyleSheet } from "react-native";
const styleCss = globalCss.styles;
TextField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  secure: PropTypes.bool,
};

export default function TextField({ name, label, secure = false, ...props }:any) {
  const [field, meta] = useField('name');
  const { setFieldValue, setFieldTouched, handleBlur } = useFormikContext();

  const handleType = useCallback(
    (text:string) => {
      setFieldValue('name', text);
    },
    [name]
  );

  const handleFocus = () => {
    setFieldTouched('name');
  };
  const handleCaption = () =>{
    if(meta.initialTouched){
      return renderCaption("touched");
    }
  }
  const handleStatus =() =>{
    if(meta.touched){
      return "danger";
    }else{
      return "primary"
    }
  }

  const renderCaption = (props: string): React.ReactElement => {
    return (
        <View style={styles.captionContainer}>
            <Text style={styleCss.captionText}>
                {props}
            </Text>
        </View>
    );
};
const handlePlaceholder =(label:string)=>{
  return "Please Provide "+label;
}
  return (
    <Input
      style={styles.input}
      status={()=>handleStatus}
      value={String(field.value)}
      label={label}
      caption={()=>handleCaption()}
      secureTextEntry={secure}
      onBlur={handleBlur(name)}
      onFocus={handleFocus}
      onChangeText={handleType}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
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