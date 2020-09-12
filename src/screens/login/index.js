// @flow

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Image,
  KeyboardAvoidingView,
  StyleSheet
} from 'react-native';

import Navigation from '../../navigation';
import Style from '../../stylesheet'
import Loading from '../../components/loading';
import StatusBar from '../../components/status.bar';
import Alert from './alert';
import Form from './form';

import { type TLoginStore } from '../../store/reducers/login';

const IMAGE = require('../../assets/hogwarts-logo.png');

type Props = {
  login: TLoginStore
};

function Index(props: Props): React$Element<typeof SafeAreaView> {

  const [loading, setLoading] = useState(false);

  Navigation.init();

  // only runs on first render
  useEffect((): void => {
    if (props.login.jwt) {
      Navigation.replace('Home');
    };
  }, []);

  // run every time specificated props changes
  useEffect(() => {
    switch (props.login?.loginState) {
      case 'START':
        console.log('Start from component Login');
        setLoading(true);
        break;
      case 'LOGIN_SUCCESS':
        console.log('Success from component Login');
        setLoading(false);
        Navigation.replace('Home');
        break;
      case 'LOGIN_FAILURE':
        setLoading(false);
        if(props.login.error){
          Alert.loginFailure(props.login.error);
        }
      default:
        break;
    }

  }, [props.login]);

  return (
    <SafeAreaView style={Style.classes.container}>
      <StatusBar />
      <View style={Style.classes.contentContainer}>
        <Image source={IMAGE} style={styles.image} />
        <KeyboardAvoidingView behavior="padding">
          <Form />
        </KeyboardAvoidingView>
      </View>
      {loading && <Loading />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '30%',
    resizeMode: 'contain',
    marginVertical: 50
  }
});

import { connect } from 'react-redux';

import sendLogin from '../../store/actions/login';
import { type TStore } from '../../store';

export const mapStateToProps = (login: TStore) => {
  return login;
};

export default connect(mapStateToProps, null)(Index);