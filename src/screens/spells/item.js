// @flow

import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import Style from '../../stylesheet';
import Navigation from '../../navigation';

import { type TSpell } from '../../api/spells';

type Props = {
  spell: TSpell
};

function Item(props: Props): React$Element<typeof TouchableOpacity> {
  const { spell } = props;

  const goToSpell = (): void => {
    Navigation.push('Spell', { spell });
  }

  return (
    <TouchableOpacity onPress={goToSpell}>
      <Text style={styles.text}>{spell.spell}</Text>
      <View style={Style.classes.line} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    paddingVertical: 10
  }
});

export default Item;