import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  FlatList,
  Text,
  SafeAreaView,
} from 'react-native';
import Header from '../../components/Header';
import {strings} from '../../constants';
import {Colors} from '../../Theme/colors';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  renderItem = item => {
    const itemData = item.item;
    return (
      <View style={styles.headerContainer}>
        <View style={styles.boxStyle}>
          <Text style={styles.dataFontStyle}>{itemData.name}</Text>
        </View>
        <View style={styles.boxStyle}>
          <Text style={styles.dataFontStyle}>{itemData.age}</Text>
        </View>
        <View style={styles.boxStyle}>
          <Text style={styles.dataFontStyle}>{itemData.email}</Text>
        </View>
        <View style={styles.boxStyle}>
          <Text style={styles.dataFontStyle}>{itemData.phoneNo}</Text>
        </View>
        <View style={styles.boxStyle}>
          <Text style={styles.dataFontStyle}>{itemData.gender}</Text>
        </View>
      </View>
    );
  };

  render() {
    const {loggedInUser, dashBoardData} = this.props;
    const {userName} = loggedInUser;
    return (
      <SafeAreaView>
        <ScrollView contentContainerStyle={styles.scrollStyle}>
          <View>
            <Text style={styles.titleStyle}>
              {strings.welcome} {userName}
            </Text>
          </View>
          <View style={styles.headerTitleContainer}>
            <Text style={styles.headerTitleTextStyle}>
              {strings.employee_list}
            </Text>
          </View>
          <Header />
          <FlatList
            data={dashBoardData.user}
            renderItem={this.renderItem}
            keyExtractor={item => item.id.toString()}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
  },
  boxStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    borderWidth: 0.5,
    padding: 4,
    borderColor: '#90CDF4',
    padding: 4,
  },
  scrollStyle: {marginTop: 16, padding: 16},
  containerStyle: {paddingHorizontal: 16},
  titleStyle: {fontSize: 16},
  dataFontStyle: {color: Colors.secondaryTextColor},
  headerTitleContainer: {marginTop: 16, alignItems: 'center'},
  headerTitleTextStyle: {fontSize: 16},
});
