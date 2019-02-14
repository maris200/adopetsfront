import { StyleSheet, Dimensions} from 'react-native';
import {Fonts} from '../../../../utils/fonts/Fonts';
import colors from '../../../../assets/colors/Colors'

const { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    searchSection:{
        marginLeft: 20,
        height: 40,
        width: width - 161,
        flexDirection: 'row',
        backgroundColor: colors.header,
        borderColor: colors.border,
        borderRadius: 4,
        borderWidth: 1,
    },
    text:{
       fontSize: 14,
        textAlign: 'left',
        color: colors.text,
        borderColor: colors.text,
        paddingHorizontal: 16,
        fontFamily: Fonts.RobotoItalic,
    },
    pin:{
        fontSize: 14,
        textAlign: 'right',
        color: colors.button,
        marginTop: 12.85,
        marginRight: 14,
        marginLeft: 5,

    }
});