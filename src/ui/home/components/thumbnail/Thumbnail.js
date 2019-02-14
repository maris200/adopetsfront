import React, { Component } from 'react';
import {TouchableOpacity, Image} from 'react-native'
import styles from './ThumbnailStyle';

class Thumbnail extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <TouchableOpacity style={styles.img}>
              <Image circular={true} source={this.props.imageUri}/>
        </TouchableOpacity>
        
    );
  }
};

export default Thumbnail;