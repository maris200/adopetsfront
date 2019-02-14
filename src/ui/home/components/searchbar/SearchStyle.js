import { StyleSheet, Dimensions} from 'react-native';
import {Fonts} from '../../../../utils/fonts/Fonts';
import colors from '../../../../assets/colors/Colors'

const { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    searchSection:{
        height: 40,
        width: width - 48,
        flexDirection: 'row',
        backgroundColor: colors.header,
        borderColor: colors.border,
        borderRadius: 4,
        borderWidth: 1,
        marginTop: 32,
        marginBottom: 55,
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
        marginTop: 13,
        marginRight: 14,
        marginLeft: 60,

    }
});