import * as React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

class Header extends React.Component {
  render() {
    return(
      <View style={styles.mainHeader}>
        <ImageBackground
          style={styles.backgroundImage}
          source={ {uri: 'https://img.freepik.com/fotos-gratis/flores-bonitas-em-fundo-rosa-com-espaco-na-direita_23-2147691006.jpg'}}
        >
          <View style={styles.logoMain}>
            <ImageBackground
              style={styles.backgoundLogo}
              source={require('../assets/logo/logo.png')}
            ></ImageBackground>
          </View>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainHeader: {
    height: '100%',
    width: '100%',
    alignContent: 'center',
    alignSelf: 'center',
  },
  headerText: {
    alignSelf: 'flex-end',
  },
  backgroundImage: {
    height: '100%',
    justifyContent: 'center'
  },
  logoMain: {
    height: '60%',
    width: '60%',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    marginRight: 5,
  },
  backgoundLogo: {
    height: 30,
  },
  title: {
    color: "#B50070",
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'right',
    marginRight: 10,
    marginTop: 20,
  },
  subtitle: {
    color: "#C04E91",
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'right',
    marginRight: 10,
  }
})

export default Header;