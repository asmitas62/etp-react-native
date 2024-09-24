import { View, StyleSheet, Platform } from 'react-native'
import React, { Component, useEffect } from 'react'
import * as globalCss from "global.css";
import { Button, Icon, Input, Layout, Text } from '@ui-kitten/components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router, useNavigation } from 'expo-router';
import { Form, Formik, FormikErrors, FormikFormProps,FormikHelpers } from 'formik';
import * as Yup from 'yup';
import FooterMain from './FooterMain';

const ValidationSchema = Yup.object({
    // add .url() to check valid url
    domainUrl: Yup.string().url()
        .required('Please enter Domain url')
});
const RenderDomainURLLayout = () => {
    const navigation = useNavigation();
    const styleCss = globalCss.styles;

    useEffect(() => {
        navigation.setOptions({ headerTitle: '',headerBackTitle:"Back", headerTransparent: true });
    }, [navigation]);

    const OnPressSetUrl = async (values: any) => {
        console.log("pressed", values.domainUrl);
        AsyncStorage.setItem("apiUrl", values.domainUrl);
        router.navigate('/loginScreen');
    };

    const renderCaption = (props: any): React.ReactElement => {
        console.log("cption set");
        return (
            <View style={styles.captionContainer}>
                <Text style={styleCss.errorText}>
                    {props.domainUrl}
                </Text>
            </View>
        );
    };

    return (<Formik initialValues={{ domainUrl: 'https://testapi.etpcloud.in' }}
        validationSchema={ValidationSchema}
        onSubmit={(values,FormikAction)=>OnPressSetUrl(values)}>
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
            const { domainUrl } = values;
            console.log("formik values", values.domainUrl);
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
                                label='Domain URL'
                                autoFocus={true}
                                onChangeText={handleChange('domainUrl')}
                                onBlur={handleBlur('domainUrl')}
                                textStyle={{ fontSize: 14 }}
                                caption={errors.domainUrl ? renderCaption(errors) : ''}
                                placeholder='Please Provide API Url'
                                textContentType='URL'
                                value={values.domainUrl}
                                size='large'
                            />
                            {/* {errors.domainUrl ? renderCaption(errors) : null} */}
                            <Button status="primary" onPress={submitForm} disabled={!isValid } size="large" style={styles.button} >Submit</Button>
                        </View>
                    </View>
            <FooterMain/>
                </Layout>
            </>)
        }}
    </Formik>
    )
}
export default RenderDomainURLLayout;

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