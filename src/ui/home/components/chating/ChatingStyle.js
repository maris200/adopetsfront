import { StyleSheet} from 'react-native';
import {Fonts} from '../../../../utils/fonts/Fonts';
import colors from '../../../../assets/colors/Colors'

export default StyleSheet.create({
    icon:{
        fontSize: 20,
        textAlign: 'right',
        color: colors.header
    },
    circle:{
        width: 40, 
        height: 40, 
        borderRadius: 100/2, 
        marginLeft: 16, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: colors.icon_messenger,
    }
});