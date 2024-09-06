import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import React, { ComponentProps, useEffect, useState } from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { router, useNavigation } from 'expo-router';
import * as globalCss from "../global.css";
import { Button, IconElement, IconProps, Input, Layout, Text } from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useAuth } from '~/context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FooterMain from './FooterMain';

const ValidationSchema = Yup.object({
    username: Yup.string()
        .trim()
        .min(2, 'Please provide valid username')
        .required('username is required!'),
    password: Yup.string()
        .trim()
        .required('Password is required!'),
    companyCode: Yup.string()
        .trim()
        .required('CompanyCode is required!')
});
export default function loginScreen() {
    const { onLogin } = useAuth();
    const styleCss = globalCss.styles;
    const navigation = useNavigation();
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
            <View style={styles.captionContainer}>
                <Text style={styleCss.errorText}>
                    {props}
                </Text>
            </View>
        );
    };

    const loginCredential = {
        username: 'DA5',
        password: 'DA5',
        companyCode: 'Test',
    };
    const onSignInPress = async (values: any) => {
        console.log("data submit", values.username, values.password, values.companyCode);
        const domainUrl = await AsyncStorage.getItem('apiUrl')
        if(domainUrl){
        onLogin!(values.username, values.password, values.companyCode, domainUrl);
        }
    };
    return (
        <Formik  initialValues={loginCredential}
            validationSchema={ValidationSchema}
            onSubmit={(values, FormikAction) => onSignInPress(values)}>
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
                const { username, password, companyCode } = values;
                console.log("formik valuesioio", values);
                return (<>
                    <Layout style={styleCss.container}>
                        <View style={styleCss.containerLoginContent} >
                            <Text status='primary' category='h1' style={{ textAlign: "left", marginTop: 40 }}>
                                Welcome !</Text>
                            <Text category='h4' status='primary' style={{ margin: "3%", textAlign: "left" }}>
                                Continue To Sign in <Icon name='arrow-right' style={{ fontSize: 20, width: 40, height: 40 }} /></Text>
                        </View>

                        <View style={styleCss.innerLoginContainer}>
                            <View style={{ flex: 1 }}>
                                <Input style={styles.input}
                                    label='UserName'
                                    textStyle={{ fontSize: 14 }}
                                    placeholder='Please Provide UserName'
                                    value={username}
                                    size='large'
                                    status='primary'
                                    onChangeText={handleChange('username')}
                                    onBlur={handleBlur('username')}
                                    caption={errors.username ? renderCaption(errors.username) : ''}
                                />

                                <Input style={styles.input}
                                    placeholder="Password"
                                    label='Password'
                                    status='primary'
                                    textStyle={{ fontSize: 14 }}
                                    secureTextEntry={!passwordVisible}
                                    accessoryRight={renderIcon}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={password}
                                    caption={errors.password ? renderCaption(errors.password) : ''}
                                />
                                <Input style={styles.input}
                                    label='Company Code'
                                    textStyle={{ fontSize: 14 }}
                                    placeholder='Please Provide Domain'
                                    value={companyCode}
                                    size='large'
                                    status='primary'
                                    onChangeText={handleChange('companyCode')}
                                    onBlur={handleBlur('companyCode')}
                                    caption={errors.companyCode ? renderCaption(errors.companyCode) : ''}
                                />
                                <Button status="primary" onPress={submitForm} disabled={!isValid} size="large" style={styles.button} >Submit</Button>
                            </View>
                        </View>
            <FooterMain/>
                    </Layout>
            </>)
            }}
            </Formik>
        
    )
}
const styles = StyleSheet.create({
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
