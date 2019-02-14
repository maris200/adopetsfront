import React, { Component } from 'react';
import styles from './HeaderStyle';
import {View, Image} from 'react-native';
import {Header, Left, Right, Body} from 'native-base';
import FontAwesome, {Icons, IconTypes} from 'react-native-fontawesome';
import Search from '../searchbarheader/SearchbarHeader';
import Chating from '../chating/Chating';

class Toolbar extends Component {

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
          <Header style={[styles.header, shadowStyle]}> 
            <Left>
                <View style={styles.viewIcon}>
                    <Image source={this.props.imageUri} style={styles.logoIcon}/>
                    <FontAwesome type={IconTypes.FAR} style={styles.headerIcon}>{Icons.chevronRight}</FontAwesome>
                </View>
            </Left>
            <Body>
              <Search />
            </Body>
            <Right>
              <Chating />
            </Right>
          </Header> 
          
    );
  }
};

export default Toolbar;