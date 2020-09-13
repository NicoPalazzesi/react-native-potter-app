// @flow

import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';

import Style from '../../stylesheet';
import Navigation from '../../navigation';
import Alert from './alert';
import StatusBar from '../../components/status.bar';
import Options from './options';
import Button from '../../components/button';

import { type TLoginDispatchers } from '../../store/actions/login';

type Props = {
  logout: $PropertyType<TLoginDispatchers, 'logout'>
}

function Index(props: Props): React$Element<typeof SafeAreaView> {

  const logout = (): void => {
    Alert.confirmLogout( onConfirmLogout );
  }

  const onConfirmLogout = (): void => {
    props.logout();
    Navigation.replace('Login');
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={[Style.classes.contentContainer, styles.contentContainer]}>
        <Options />
      </View>
      <Button text="Cerrar sesión" onPress={logout} style={styles.button} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainer: {
    justifyContent: 'center'
  },
  button: {
    marginHorizontal: 18,
    marginVertical: 5
  }
});


import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import logout from '../../store/actions/login';

export const mapDispatchToProps = (dispatch: typeof Dispatch) => 
  bindActionCreators(logout, dispatch);

export default connect(null, mapDispatchToProps)(Index);