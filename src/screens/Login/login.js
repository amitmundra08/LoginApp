import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import {strings} from '../../constants';
import {Container, Card} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Colors} from '../../Theme/colors';
import {ApiRequestStatus} from '../../Models/model';
const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;
const backgroundImage = require('../../assets/backgroundImage.jpg');

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  handleLogin = () => {
    const {email, password} = this.state;
    if (!!email && !!password) {
      this.props.loginUser(email, password);
    }
  };
  render() {
    const {errorMessage, loadingUserdataStatus} = this.props;
    const {password, email} = this.state;
    return (
      <Container>
        <ImageBackground
          source={backgroundImage}
          style={styles.fullwidthHeight}
          resizeMode="cover">
          <Card style={styles.cardStyle}>
            <View style={styles.mainContainer}>
              <Icon name="user" size={25} color="#44337A" />
              <Text style={styles.heading}>{strings.login}</Text>
              {!!errorMessage && (
                <Text style={styles.erroStyle}>{errorMessage}</Text>
              )}
              <TextInput
                placeholder="Email"
                autoCapitalize="none"
                style={styles.textInput}
                onChangeText={email => this.setState({email})}
                value={email}
              />
              <TextInput
                secureTextEntry
                placeholder="Password"
                autoCapitalize="none"
                style={styles.textInput}
                onChangeText={password => this.setState({password})}
                value={password}
              />
              {loadingUserdataStatus !== ApiRequestStatus.PENDING ? (
                <TouchableOpacity onPress={this.handleLogin}>
                  <View
                    style={[
                      styles.signupBtn,
                      !!email && !!password ? {} : styles.disabledStyle,
                    ]}>
                    <Text
                      style={
                        !!email && !!password
                          ? styles.buttonText
                          : styles.disabledText
                      }>
                      {strings.login}
                    </Text>
                  </View>
                </TouchableOpacity>
              ) : (
                <View style={styles.signupBtn}>
                  <ActivityIndicator size="small" color={'#44337A'} />
                </View>
              )}
            </View>
          </Card>
        </ImageBackground>
      </Container>
    );
  }
}
const heightConst = Dimensions.get('screen').height;
const styles = StyleSheet.create({
  container: {
    height: heightConst - 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingSection: {
    textAlign: 'center',
    alignItems: 'center',
    marginBottom: 35,
  },
  heading: {
    color: '#44337A',
    fontSize: 26,
    marginBottom: 10,
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: '#44337A',
    borderWidth: 1,
    marginTop: 8,
    color: '#44337A',
    borderRadius: 4,
    backgroundColor: '#FAF5FF',
    paddingLeft: 12,
  },
  buttonText: {
    color: '#44337A',
    textAlign: 'center',
  },
  fullwidthHeight: {
    width: width,
    height: height,
    justifyContent: 'center',
    padding: 16,
  },
  signupBtn: {
    borderRadius: 5,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#44337A',
    width: 100,
    height: 35,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 16,
  },
  cardStyle: {backgroundColor: '#FFFFF0'},
  erroStyle: {color: 'red'},
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 16,
  },
  disabledStyle: {
    backgroundColor: Colors.disabled,
    borderColor: Colors.textdarkgray,
    borderWidth: 0,
  },
  disabledText: {color: Colors.textdarkgray, textAlign: 'center'},
});
