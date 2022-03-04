import * as React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import FancyButton from '../components/buttons/FancyButton';
import api from '../services/API';
import { options } from '../services/Endpoints';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      registerData: [],
    }
  }

  goToBack = () => {
    this.props.navigation.navigate("Login", { screen: "Login" })
  }

  pushRegister = () => {
    api.post(options.cadastro).then(result => {
      this.setState({
        registerData: result,
      })
      console.log("###", this.state.registerData);
      //this.props.navigation.navigate("Detalhes", {screen: "Details", data: this.state.floresDataId})
    })
  }

  render() {
    return (
      <View style={styles.viewMain}>
        <View style={styles.logoView}>
          <View style={styles.headerMain}>
            <TouchableOpacity onPress={() => this.goToBack()}>
              <Image
                style={styles.imageBack}
                source={require('../assets/icons/icon-back.png')}>
              </Image>
            </TouchableOpacity>
          </View>
          <View style={styles.header}>
            <Image
              style={styles.backgroundLogo}
              source={require('../assets/logo/logo.png')}
            ></Image>
          </View>
        </View>


        <View style={styles.viewRegister}>
          <View style={styles.titleView}>
            <Text style={styles.textTitle}>
              {`Cadastro`}
            </Text>
          </View>
          <View style={styles.fieldsView}>

            <TextInput
              style={styles.formField}
              onChangeText={text => this.onChangeText(text)}
              keyboardType="default"
              placeholder='Nome'>
            </TextInput>
            <TextInput
              style={styles.formField}
              onChangeText={text => this.onChangeText(text)}
              keyboardType="email-address"
              placeholder='E-mail'>
            </TextInput>
            <TextInput
              style={styles.formField}
              onChangeText={text => this.onChangeText(text)}
              keyboardType="phone-pad"
              placeholder='Telefone'>
            </TextInput>
            <TextInput
              style={styles.formField}
              secureTextEntry
              keyboardType="numeric"
              placeholder='Senha'>
            </TextInput>
            <FancyButton
              title="CADASTRAR"
              screen="Login"
              navigation={this.props.navigation}>
            </FancyButton>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewMain: {
    flex: 1,
    backgroundColor: "#ECD2DF",
  },
  headerMain: {
    flex: 1,
  },
  viewRegister: {
    flex: 7,
  },
  header: {
    width: '100%',
    height: 50,
  },
  imageBack: {
    height: 30,
    width: 30,
    margin: 10
  },
  logoView: {
    width: '100%',
    alignContent: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    height: 100,
  },
  backgroundLogo: {
    height: '100%',
    width: '100%',
  },
  titleView: {
    width: '100%',
    height: 50,
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    alignSelf: 'center',
    color: "#B50070",
  },
  fieldsView: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 60
  },
  formField: {
    borderColor: "#B50070",
    borderWidth: 3,
    borderRadius: 16,
    marginVertical: 8,
    marginHorizontal: 32,
    backgroundColor: 'white',
    height: 50
  }
})

export default Register;