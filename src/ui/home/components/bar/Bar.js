import React, { Component } from 'react';
import styles from './BarStyle';
import {View,} from 'react-native';
import {Button} from 'native-base';
import FontAwesome, {Icons, IconTypes} from 'react-native-fontawesome';
import Thumbnail from '../thumbnail/Thumbnail';

class Bar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    
    const shadowStyle={
      shadowOpacity: 0.5,
      shadowRadius: 20,
      shadowColor: 'gray',
      shadowOffset: {width: 1, height:1},
    }

    return (
          <View style={[styles.tabbar, shadowStyle]}>
            <Button transparent>
              <FontAwesome type={IconTypes.FAS} style={styles.tabIcon}>{Icons.search}</FontAwesome>
            </Button>
            <Button transparent>
              <FontAwesome type={IconTypes.FAR} style={styles.tabIcon}>{Icons.thumbsUp}</FontAwesome>
            </Button>
            <Button transparent>
              <FontAwesome type={IconTypes.FAB} style={styles.tabIcon}>{Icons.wpforms}</FontAwesome>
            </Button>
            <Button transparent>
              <FontAwesome type={IconTypes.FAR} style={styles.tabIcon}>{Icons.heart}</FontAwesome>
            </Button>
            <Thumbnail imageUri={require('../../../../assets/images/img.png')}/>
          </View> 
    );
  }
};

export default Bar;