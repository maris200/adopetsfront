import React, { Component } from 'react';
import {CardItem, Text} from 'native-base';
import FontAwesome, {Icons, IconTypes} from 'react-native-fontawesome';
import styles from './CardFooterStyle';

class CardFooter extends Component {
  
    render() {
  
        return (
            <CardItem style={styles.card}>
                <Text style={styles.text}>{this.props.type}</Text>
                <FontAwesome type={IconTypes.FAS} style={styles.icon}>{Icons.angleDown}</FontAwesome>
            </CardItem>
    );
  }
}
export default CardFooter;