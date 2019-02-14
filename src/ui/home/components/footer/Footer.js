import React, { Component } from 'react';  
import {View} from 'native-base'
import {Text,} from 'native-base';
import FontAwesome, {Icons, IconTypes} from 'react-native-fontawesome';
import Card from '../cardfooter/CardFooter';
import styles from './FooterStyle';

class Footer extends Component {

  constructor(props) {    
    super(props);
  }

  render() {   
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>{this.props.logo}</Text>
            <Text style={styles.text}>{this.props.text}</Text>
            <View style={styles.socialMedia}>
                <FontAwesome type={IconTypes.FAB} style={styles.socialMediaIcon}>{Icons.facebookF}</FontAwesome>
                <FontAwesome type={IconTypes.FAB} style={styles.socialMediaIcon}>{Icons.twitter}</FontAwesome>
                <FontAwesome type={IconTypes.FAB} style={styles.socialMediaIcon}>{Icons.instagram}</FontAwesome>
            </View>
            <View style={styles.separator}/>
            <View style={styles.footer}>
                <Text style={styles.copyright}>{this.props.copyright}</Text>
                <Text style={styles.year}>{this.props.year}</Text>
                <Card type="English"/>
                <Card type="USD - $"/>
            </View>
        </View>  
    );
  }
};

export default Footer;