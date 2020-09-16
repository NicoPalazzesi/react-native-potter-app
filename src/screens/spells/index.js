// @flow

import React, { useState, useEffect } from 'react';
import { SafeAreaView, View } from 'react-native';

import Style from '../../stylesheet';
import NavBar from '../../components/nav.bar';
import Loading from '../../components/loading';
import Alert from './alert';
import List from './list';

import { type TSpellsDispatchers } from '../../store/actions/spells';
import { type TSpellsStore } from '../../store/reducers/spells';

type Props = {
  spells: TSpellsStore,
  getSpells: $PropertyType<TSpellsDispatchers, 'getSpells'>,
  clear: $PropertyType<TSpellsDispatchers, 'clear'>
};

function Index(props: Props): React$Element<typeof SafeAreaView> {
  
  const [loading, setLoading] = useState<boolean>(false);

  useEffect((): () => void => {
    props.getSpells(); // mount

    return () => props.clear(); // unmount
  }, []);

  // run every time specificated props changes
  useEffect(() => {
    switch (props.spells?.spellsState) {
      case 'START':
        setLoading(true);
        break;
      case 'GET_SPELLS_SUCCESS':
        setLoading(false);
        break;
      case 'GET_SPELLS_FAILURE':
        setLoading(false);
        if(props.spells.error){
          Alert.spellsFailure(props.spells.error);
        }
      default:
        break;
    }
  }, [props.spells]);

  return (
    <SafeAreaView style={Style.classes.container}>
      <NavBar title="Hechizos" />
      <List />
      {loading && <Loading />}
    </SafeAreaView>
  );
}

import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import getSpells from '../../store/actions/spells';
import clear from '../../store/actions/spells';
import { type TStore } from '../../store';

export const mapStateToProps = (spells: TStore) => {
  return spells;
};

export const mapDispatchToProps = (dispatch: typeof Dispatch) => 
  bindActionCreators(
    Object.assign({}, getSpells, clear),
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Index);