import * as React from 'react';
import { StyleSheet, View, TouchableOpacity, TouchableHighlight, Pressable } from 'react-native';
import FancyButtonText from './FancyButtonText';

class FancyButton extends React.Component {
  constructor() {
    super();
    this.state = {
      background: '#B50070'
    }
  }

  render() {
    const { title, screen, navigation } = this.props;
    return (
      <TouchableOpacity
        style={[styles.touchArea, { backgroundColor: this.state.background }]}
        onPress={() => navigation.navigate(screen, { screen: title })}>
        <FancyButtonText title={title}></FancyButtonText>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  touchArea: {
    height: 40,
    width: 250,
    backgroundColor: "#EACDE1",
    borderWidth: 2,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
});

export default FancyButton;