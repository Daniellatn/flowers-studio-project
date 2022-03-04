import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FancyListHome from '../components/fancyList/FancyListHome';
import Header from '../components/Header';
import api from '../services/API.js';
import { options } from '../services/Endpoints';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      floresData: [],
    }
  }

  componentDidMount = () => {
    this.loadData();
  }

  loadData = () => {
    api.get(options.flores).then(result => {
      this.setState({
        floresData: result.data,
      })
      //console.log("###", this.state.floresData);
    })
  }

  loadDataFlowers = (id) => {
    api.get(options.floresId, id).then(result => {
      this.setState({
        floresDataId: result.data.id,
      })
      console.log("###", this.state.floresDataId);
    })
  }

  render() {
    return(
      <View style={styles.mainView}>
        <View style={styles.headerView}>
          <Header/>
        </View>
        <View style={styles.customListView}>
          <FancyListHome data={this.state.floresData} navigation={this.props.navigation}></FancyListHome>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    height: '100%',
    //padding: 8,
  },
  customListView: {
    flex: 7,
  },
  buttonView: {
    flex: 1,
  },
  headerView: {
    flex: 1,
    marginTop: 0,
  },
})

export default Home;