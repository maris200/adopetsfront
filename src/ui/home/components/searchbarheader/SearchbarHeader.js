import React, { Component } from 'react';
import styles from './SearchbarHeaderStyle';
import {TextInput, View} from 'react-native';
import FontAwesome, {Icons, IconTypes} from 'react-native-fontawesome';

class SearchbarHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {text: 'Search for an address...' };
      }

  render() {

    const shadowStyle={
      shadowOpacity: 0.5,
      shadowRadius: 5,
      shadowColor: 'gray',
      shadowOffset: {width: 1, height:1},
    }

    return (
            <View style={[styles.searchSection, shadowStyle]}>
              <TextInput 
                  style={styles.text} 
                  onChangeText={(text) => this.setState({text})} 
                  value={this.state.text}/>
              <FontAwesome type={IconTypes.FAR} style={styles.pin}>{Icons.mapPin}</FontAwesome>
            </View>
    );
  }
};

export default SearchbarHeader;