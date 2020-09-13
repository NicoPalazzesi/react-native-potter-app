// @flow

import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

import Style from '../../stylesheet';
import InfoLine from './info.line';
import InfoValues from './info.values';

import { type THousesStore } from '../../store/reducers/houses';

type Props = {
  houses: THousesStore
};

function Info(props: Props): React$Element<typeof View> | null{

  const [houseInfo, setHouseInfo] = useState<$PropertyType<THousesStore,'houseInfo'> | null>(null);

  // run every time specificated props changes
  useEffect(() => {
    setHouseInfo(props.houses.houseInfo)
  }, [props.houses.houseInfo]);

  if(!houseInfo){
    return null;
  }

  return (
    <View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <InfoLine title="Nombre" value={houseInfo.name} />
        <InfoLine title="Mascota" value={houseInfo.mascot} />
      </View>
      <View style={styles.line} />
      <InfoLine title="Fundador" value={houseInfo.founder} />
      <View style={styles.line} />
      <InfoLine title="Director/a de la casa" value={houseInfo.headOfHouse} />
      <InfoLine title="Fantasma de la casa" value={houseInfo.houseGhost} />
      <View style={styles.line} />
      <InfoValues values={houseInfo.values} />
    </View>
  );
}

const styles = StyleSheet.create({
  line: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: Style.grayColor,
    marginVertical: 8
  }
});

import { connect } from 'react-redux';

import { type TStore } from '../../store';

export const mapStateToProps = (houses: TStore) => {
  return houses;
};

export default connect(mapStateToProps, null)(Info);