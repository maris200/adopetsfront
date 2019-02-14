import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import PinkButton from '../components/pinkbutton/PinkButton';
import Footer from '../components/footer/Footer';
import Bar from '../components/bar/Bar';
import Header from '../components/header/Header';
import Body from '../components/body/Body';
import styles from './HomeStyle';

export default class HomeScreen extends Component{

    constructor(props) {
        super(props);
    }
    
    render() {

        console.disableYellowBox = true;
                
        return (
            <View style={styles.container}>
                <Header imageUri={require('../../../assets/images/adopets_logo_icon.png')}/>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Body imageUri={require('../../../assets/images/dog.png')}/>
                    <Bar />
                    <PinkButton action="Signup our newsletter"/>
                    <Footer
                        logo="adopets"
                        text="We built adopets to help organizations place more pets"
                        copyright="adopets"
                        year="@2018"/>  
                </ScrollView>         
            </View>    
        );
    }
}

  