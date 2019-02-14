import { StyleSheet} from 'react-native';
import {Fonts} from '../../../../utils/fonts/Fonts';
import colors from '../../../../assets/colors/Colors'

export default StyleSheet.create({
        
    card:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: colors.border,
        marginLeft: 12,
    },
    icon:{
        textAlign: 'right',
        fontSize: 12, 
        color: colors.tabbar,
        marginLeft: 10
    },
    text:{
        textAlign: 'left',
        fontSize: 12, 
        color: colors.title,
        fontFamily: Fonts.RobotoMedium,

    },
});