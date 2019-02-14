import React, { Component } from 'react';
import styles from './TitleStyle';
import {Text,} from 'native-base';

class Title extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Text style={styles.title}>{this.props.text}</Text>
    );
  }
};

export default Title;