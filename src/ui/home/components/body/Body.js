import React, {Component} from 'react';
import {View, Image} from 'react-native';
import styles from './BodyStyle';
import Title from '../title/Title';
import Subtitle from '../subtitle/Subtitle';
import Searchbar from '../searchbar/Searchbar';

class Body extends Component{

    constructor(props) {
        super(props);
    }
    
    render() {

        console.disableYellowBox = true;
                
        return (
            <View style={styles.content}>
                <Title text="My saved pets"/>
                <View style={styles.viewContent}>
                    <Image source={this.props.imageUri}/>
                    <Title text="You didn't save any pets yet..."/>
                    <Subtitle text="Like some pet or do you want to make a list with"/>
                    <Searchbar />
                </View>
            </View>  
        );
    }
}
export default Body;