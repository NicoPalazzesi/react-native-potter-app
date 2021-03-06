// @flow

import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';

import Style from '../../stylesheet';
import NavBar from '../../components/nav.bar';
import Loading from '../../components/loading';
import Alert from './alert';
import Logo from './logo';
import Info from './info';

import { type THouseId } from '../../api/houses';
import { type THousesDispatchers } from '../../store/actions/houses';
import { type THousesStore } from '../../store/reducers/houses';

type TRoute = { params: { houseId: THouseId } };

type Props = {
  route: TRoute,
  houses: THousesStore,
  getHouse: $PropertyType<THousesDispatchers, 'getHouse'>,
  clear: $PropertyType<THousesDispatchers, 'clear'>
};

function Index(props: Props): React$Element<typeof SafeAreaView> {
  const { houseId } = props.route.params;

  const [loading, setLoading] = useState<boolean>(false);

  useEffect((): () => void => {
    props.getHouse(houseId); // mount

    return () => props.clear(); // unmount
  }, []);

  // run every time specificated props changes
  useEffect(() => {
    switch (props.houses?.housesState) {
      case 'START':
        setLoading(true);
        break;
      case 'GET_HOUSE_SUCCESS':
        setLoading(false);
        break;
      case 'GET_HOUSE_FAILURE':
        setLoading(false);
        if(props.houses.error){
          Alert.housesFailure(props.houses.error);
        }
      default:
        break;
    }

  }, [props.houses]);

  return(
    <SafeAreaView style={Style.classes.container}>
      <NavBar title="Detalles" />
      <View style={Style.classes.contentContainer}>
        <Logo houseId={houseId} />
        <Info />
      </View>
      {loading && <Loading />}
    </SafeAreaView>
  );
}

import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import getHouse from '../../store/actions/houses';
import clear from '../../store/actions/houses';
import { type TStore } from '../../store';

export const mapStateToProps = (houses: TStore) => {
  return houses;
};

export const mapDispatchToProps = (dispatch: typeof Dispatch) => 
bindActionCreators(
  Object.assign({}, getHouse, clear),
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Index);