import { Link } from '@react-navigation/native';
import * as React from 'react';
import { ImageBackground, StyleSheet, Image, View, TextInput, Text, TouchableOpacity } from 'react-native';
import FancyButton from '../components/buttons/FancyButton';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    }
  }

  goToRegister = () => {
    this.props.navigation.navigate("Cadastro", {screen: "Register"})
  }

  render() {
    const { email } = this.props;
    return (
      <View style={styles.mainView}>
        <ImageBackground
          style={styles.backgroundImage}
          source={{
            uri: 'https://i.pinimg.com/736x/11/32/12/113212222d48e7f500d7ba596550265a.jpg',
          }}>
          <View style={styles.headerView}>
            <Image
              style={styles.backgroundLogo}
              source={require('../assets/logo/logo.png')}
            ></Image>
          </View>

          <View style={styles.fieldsView}>
            <TextInput
              style={styles.emailField}
              onChangeText={text => this.onChangeText(text)}
              value={email}
              keyboardType="email-address"
              placeholder='E-mail'>
            </TextInput>
            <TextInput
              style={styles.passwordField}
              secureTextEntry
              keyboardType="numeric"
              placeholder='Senha'>
            </TextInput>
            <TouchableOpacity onPress={() => this.goToRegister()}>
              <Text style={styles.textAcess}>
                {`Primeiro acesso?`}
              </Text>
            </TouchableOpacity>
            <FancyButton
              title="LOGIN"
              screen="Home"
              navigation={this.props.navigation}>
            </FancyButton>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  backgroundImage: {
    height: '120%',
  },
  headerView: {
    height: 200,
    width: '95%',
    alignContent: 'center',
    alignSelf: 'center',
    marginTop: 50,
  },
  backgroundLogo: {
    height: '30%',
    width: '100%',
  },
  fieldsView: {
    flex: 1,
  },
  emailField: {
    borderColor: "#B50070",
    borderWidth: 3,
    borderRadius: 16,
    marginVertical: 8,
    marginHorizontal: 32,
    backgroundColor: 'white'
  },
  passwordField: {
    borderColor: "#B50070",
    borderWidth: 3,
    borderRadius: 16,
    marginVertical: 8,
    marginHorizontal: 32,
    backgroundColor: 'white',
  },
  textAcess: {
    fontWeight: 'bold',
    color: 'black',
    marginHorizontal: 32,
    marginTop: 10,
    marginBottom: 20,
    
  }
})

export default Login;