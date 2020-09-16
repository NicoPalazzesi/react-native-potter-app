// @flow

import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import Style from '../../stylesheet';
import Item from './item';
import { listEmpty } from './list.empty';

import { type TSpells, type TSpell } from '../../api/spells';
import { type TSpellsStore } from '../../store/reducers/spells';

type Props = {
  spells: TSpellsStore
};

function List(props: Props): React$Element<typeof FlatList> | null {
  
  const [spells, setSpells] = useState<$PropertyType<TSpellsStore,'spells'>>(null);

  // run every time specificated props changes
  useEffect(() => {
    setSpells(props.spells.spells)
  }, [props.spells.spells]);

  const renderItem = ({ item }) => (
    <Item spell={item} />
  );

  const keyExtractor = (spell: TSpell): $PropertyType<TSpell,'_id'> => {
    return spell._id;
  }
  
  return (
    <FlatList 
      data={spells}
      renderItem={renderItem}
      keyExtractor={keyExtractor} 
      ListEmptyComponent={listEmpty} 
      style={Style.classes.contentContainer} />
  );
}

import { connect } from 'react-redux';

import { type TStore } from '../../store';

export const mapStateToProps = (spells: TStore) => {
  return spells;
};

export default connect(mapStateToProps, null)(List);