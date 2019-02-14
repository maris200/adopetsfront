import React, { Component } from 'react';
import styles from './SubtitleStyle';
import {Text,} from 'native-base';

class Subtitle extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Text style={styles.subtitle}>{this.props.text}</Text>
    );
  }
};

export default Subtitle;