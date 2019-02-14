import React, { Component } from 'react';
import styles from './PinkButtonStyle';
import {View} from 'react-native'
import {Text, Button} from 'native-base';

class PinkButton extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View style={styles.action}>
          <Button style={styles.button}>
              <Text style={styles.textButton}>{this.props.action}</Text>
          </Button>
        </View>   
    );
  }
};

export default PinkButton;