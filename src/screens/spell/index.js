// @flow

import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';

import Style from '../../stylesheet';
import Card from './card';
import InfoLine from '../../components/info.line';

import { type TSpell } from '../../api/spells';

const SPELL_IMAGE = require('../../assets/spell.png');

type TRoute = { params: { spell: TSpell } };

type Props = {
  route: TRoute
}

function Index(props: Props): React$Element<typeof SafeAreaView> {
  const { spell, type, effect } = props.route.params.spell;

  return (
    <SafeAreaView style={Style.classes.container}>
      <View style={[Style.classes.contentContainer, styles.container]}>
        <Card imageSource={SPELL_IMAGE}>
          <InfoLine 
            title="Hechizo"
            value={spell}
            valueSize={Style.fontSizeHuge}
            centerText={true} />
          <View style={[styles.line, Style.classes.line]} />
          <View style={styles.twoColumnsContainer}>
            <View style={styles.columnContainer}>
              <InfoLine title="Tipo" value={type} />
            </View>
            <View style={styles.columnContainer}>
            <InfoLine title="Efecto" value={effect} />
            </View>
          </View>
        </Card>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  twoColumnsContainer: {
    flexDirection: 'row',
    marginBottom: 10
  },
  columnContainer: {
    width: '50%'
  },
  line: {
    marginVertical: 10
  }
});

export default Index;