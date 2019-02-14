import { StyleSheet} from 'react-native';
import {Fonts} from '../../../../utils/fonts/Fonts';
import colors from '../../../../assets/colors/Colors'

export default StyleSheet.create({
    title:{
        fontSize: 24,
        textAlign: 'left',
        marginTop: 10,
        color: colors.title,
        fontFamily: Fonts.RobotoBold,
    },
});