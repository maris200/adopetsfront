import { StyleSheet, Dimensions} from 'react-native';
import colors from '../../../../assets/colors/Colors';
import {Fonts} from '../../../../utils/fonts/Fonts'

const { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    action:{
        backgroundColor: colors.button,
        width: width,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button:{
        backgroundColor: colors.header,
        borderRadius: 4,
        justifyContent: 'center',
        marginRight: 100,
        marginLeft: 100,
    },
    textButton:{
        color: colors.button,
        textAlign: 'center',
        fontSize: 14,
        fontFamily: Fonts.RobotoMedium
        
    },
});