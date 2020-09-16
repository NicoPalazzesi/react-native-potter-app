// @flow

import React, { useState, useEffect } from 'react';
import { SafeAreaView, View } from 'react-native';

import Style from '../../stylesheet';
import Loading from '../../components/loading';
import Alert from './alert';
import List from './list';

import { type TSpellsDispatchers } from '../../store/actions/spells';
import { type TSpellsStore } from '../../store/reducers/spells';

type Props = {
  spells: TSpellsStore,
  getSpells: $PropertyType<TSpellsDispatchers, 'getSpells'>
};

function Index(props: Props): React$Element<typeof SafeAreaView> {
  
  const [loading, setLoading] = useState<boolean>(false);

  // only runs on first render
  useEffect((): void => {
    props.getSpells();
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
      <List />
      {loading && <Loading />}
    </SafeAreaView>
  );
}

import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import getSpells from '../../store/actions/spells';
import { type TStore } from '../../store';

export const mapStateToProps = (spells: TStore) => {
  return spells;
};

export const mapDispatchToProps = (dispatch: typeof Dispatch) => 
  bindActionCreators(getSpells, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Index);