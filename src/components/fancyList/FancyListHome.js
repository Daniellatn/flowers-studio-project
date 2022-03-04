import * as React from 'react';
import { FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import api from '../../services/API';
import { options } from '../../services/Endpoints';

class FancyListHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      floresDataId: [],
    }
  }

  

  goToDetails = (id) => {
    api.get(options.flores+'/'+id).then(result => {
      this.setState({
        floresDataId: result.data,
      })
      console.log("###", this.state.floresDataId);
      this.props.navigation.navigate("Detalhes", {screen: "Details", data: this.state.floresDataId})
    })
  }

  render() {
    const { data } = this.props;
    const renderItem = ({ item }) => {
      return (
        <View style={styles.listItem}>
          <TouchableOpacity
            style={styles.viewList}
            onPress={() => this.goToDetails(item.id)}>
            <View style={styles.viewImageList}>
              <ImageBackground
                style={styles.backgroundImage}
                source={{ uri: item.url }}
                resizeMode="cover">
              </ImageBackground>
            </View>
            <View>
              <Text style={styles.listItemTitle}>
                {`${item.name}`}
              </Text>
              <Text style={styles.listItemSubtitle}>
                {`${item.color}`}
              </Text>
              <Text style={styles.listItemSubtitle}>
                {`${item.value}`}
              </Text>
            </View>
          </TouchableOpacity>

        </View>
      );
    }
    return (
      <View>
        <FlatList data={data} renderItem={renderItem}></FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#ECD2DF',
    borderWidth: 2,
    borderColor: '#B50070',
    borderRadius: 8,
    height: 70,
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
  viewList: {
    flexDirection: "row",
  },
  viewImageList: {
    height: 65,
    width: 65,
    //marginLeft: 5,
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
    fontWeight: '600',
    marginLeft: 10,
  },
  listItemSubtitle: {
    color: 'black',
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 10,
  },
})

export default FancyListHome;