// @flow

import React, { useState } from 'react';
import { View, Keyboard, StyleSheet } from 'react-native';

import Config from 'react-native-config';

import Style from '../../stylesheet';
import FormInput from '../../components/form.input';
import Button from '../../components/button';
import stylesheet from '../../stylesheet';
import Navigation from '../../navigation';
import { validLoginInputData } from './validation';

import { type TLoginDispatchers } from '../../store/actions/login';

type Props = {
  sendLogin: $PropertyType<TLoginDispatchers, 'sendLogin'>
}

function Form(props: Props): React$Element<typeof View> {

  const [username, setUsername] = useState(
    process.env.NODE_ENV === 'production' ? '' : Config.USERNAME_DEV
  );
  const [password, setPassword] = useState(
    process.env.NODE_ENV === 'production' ? '' : Config.PASSWORD_DEV
  );

  const fields: {
    username: FormInput | null,
    password: FormInput | null
  } = {
    username: null,
    password: null
  };

  const onRefUsername = (elem: FormInput | null): void => {
    fields['username'] = elem;
  };

  const onRefPassword = (elem: FormInput | null): void => {
    fields['password'] = elem;
  };

  const onSubmitUsername = (): void => {
    if(fields['password'] !== null) {
      fields['password'].focus();
    }
  };

  const onSubmit = () => {
    Keyboard.dismiss();

    if(validLoginInputData({ username, password })){
      props.sendLogin({ username, password });
    }
  }

  return (
    <View>
      <FormInput
        ref={onRefUsername}
        value={username}
        onChange={setUsername}
        placeholder="Usuario"
        placeholderTextColor={Style.grayColor}
        keyboardType="default"
        returnKeyType="next"
        autoCapitalize="none"
        icon="account"
        autoCorrect={false}
        onSubmit={onSubmitUsername}
        style={Style.classes.input}
      />
      <FormInput
        ref={onRefPassword}
        placeholder="Contraseña"
        placeholderTextColor={Style.grayColor}
        value={password}
        onChange={setPassword}
        keyboardType="default"
        returnKeyType="done"
        autoCorrect={false}
        icon="lock"
        secureTextEntry={true}
        onSubmit={onSubmit}
        style={Style.classes.input}
      />
      <Button text="Iniciar sesión" onPress={onSubmit} style={styles.button}/>
    </View>
  );

}

const styles = StyleSheet.create({
  button: {
    marginTop: 10
  }
});

import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import sendLogin from '../../store/actions/login';

export const mapDispatchToProps = (dispatch: typeof Dispatch) => 
  bindActionCreators(sendLogin, dispatch);

export default connect(null, mapDispatchToProps)(Form);