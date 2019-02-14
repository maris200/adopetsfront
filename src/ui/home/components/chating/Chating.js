import React, { Component } from 'react';
import styles from './ChatingStyle';
import {View,} from 'react-native';
import FontAwesome, {Icons, IconTypes} from 'react-native-fontawesome';

class Chating extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View style={styles.circle}>
            <FontAwesome type={IconTypes.FAR} style={styles.icon}>{Icons.comments}</FontAwesome>
        </View>
    );
  }
};

export default Chating;