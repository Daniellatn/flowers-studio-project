import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class FancyButtonText extends React.Component {
  render() {
    const { title } = this.props;
    return(
      <View>
        <Text style={styles.buttonText}>
          {`${title}`}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default FancyButtonText;