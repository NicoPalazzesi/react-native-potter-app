// @flow

import React, { useState } from 'react';
import { View, Keyboard, StyleSheet } from 'react-native';

import Style from '../../stylesheet';
import FormInput from '../../components/form.input';
import Button from '../../components/button';
import stylesheet from '../../stylesheet';
import Navigation from '../../navigation';
import { validLoginInputData } from './validation';

function Form(): React$Element<typeof View> {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
      console.log('entra');
      Navigation.replace("Home");
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

export default Form;