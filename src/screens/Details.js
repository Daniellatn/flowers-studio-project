import * as React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FancyButton from '../components/buttons/FancyButton';
import Header from '../components/Header';

class Details extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let flower = this.props.route.params.data[0]
    return (
      <View style={styles.mainView}>
        <View style={styles.headerView}>
          <Header />
        </View>
        <View style={styles.customListView}>
          <View style={styles.listItem}>
            <View style={styles.viewList}>
              <View style={styles.viewImageList}>
                <ImageBackground
                  style={styles.backgroundImage}
                  source={{ uri: flower.url }}
                  resizeMode="cover">
                </ImageBackground>
              </View>
              <View style={styles.viewTitle}>
                <Text style={styles.listItemTitle}>
                  {`${flower.name}`}
                </Text>
              </View>
              <View style={styles.viewImageIcon}>
                <TouchableOpacity>
                  <Image
                    style={styles.backgroundIcon}
                    source={require('../assets/icons/icon-disfavorite.png')}>
                  </Image>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.listDescription}>
            <Text style={styles.textDescription}>
              {`Descrição: ${flower.description}`}
            </Text>
            <Text style={styles.textDescription}>
              {`Cor: ${flower.color}`}
            </Text>
            <Text style={styles.textDescription}>
              {`Tamanho: ${flower.size}`}
            </Text>
            <Text style={styles.textDescription}>
              {`Valor R$: ${flower.value}`}
            </Text>
          </View>
        </View>
        <View style={styles.buttonDetails}>
          <FancyButton
            title="VOLTAR"
            screen="Home"
            navigation={this.props.navigation}>
          </FancyButton>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainView: {
    height: '100%',
    //padding: 8,
  },
  headerView: {
    flex: 1,
    marginTop: 0,
  },
  customListView: {
    flex: 7,
  },
  listItem: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#B50070',
    borderRadius: 8,
    height: 70,
    alignItems: 'stretch',
    justifyContent: 'center',
    margin: 10,
    shadowColor: 'red',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10,
  },
  listDescription: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#B50070',
    borderRadius: 8,
    alignItems: 'stretch',
    justifyContent: 'center',
    margin: 10,
    shadowColor: 'red',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10,
    padding: 8,
  },
  viewList: {
    flexDirection: "row",
  },
  viewImageList: {
    height: 65,
    width: 65,
    //marginLeft: 5,
  },
  viewTitle: {
    height: 65,
    width: 250,
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewImageIcon: {
    height: 65,
    width: 50,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  backgroundIcon: {
    height: 30,
    width: 30,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    overflow: "hidden",
  },
  listItemTitle: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
    alignItems: 'center'
  },
  textDescription: {
    color: 'black',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 5,
  },
  buttonDetails: {
    marginBottom: 20,
  }
})

export default Details;