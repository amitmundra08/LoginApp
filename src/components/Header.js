import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../Theme/colors';
import React from 'react';
import {strings} from '../constants';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.boxStyle}>
        <Text style={styles.dataFontStyle}>{strings.name}</Text>
      </View>
      <View style={styles.boxStyle}>
        <Text style={styles.dataFontStyle}>{strings.age}</Text>
      </View>
      <View style={styles.boxStyle}>
        <Text style={styles.dataFontStyle}>{strings.email}</Text>
      </View>
      <View style={styles.boxStyle}>
        <Text style={styles.dataFontStyle}>{strings.phone}</Text>
      </View>
      <View style={styles.boxStyle}>
        <Text style={styles.dataFontStyle}>{strings.gender}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  boxStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    borderColor: Colors.lightGreyWithOpacity,
    borderWidth: 1,
    padding: 4,
  },
  dataFontStyle: {fontWeight: 'bold'},
});

export default Header;
