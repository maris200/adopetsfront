import { StyleSheet, Dimensions} from 'react-native';
import {Fonts}from '../../../../utils/fonts/Fonts';
import colors from '../../../../assets/colors/Colors'

const { height, width } = Dimensions.get('window')

export default StyleSheet.create({
        
    container:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo:{
        textAlign: 'center',
        fontSize: 24, 
        marginTop: 10,
        color: colors.button,
        fontFamily: Fonts.Quicksand,
    },
    text:{
        textAlign: 'center',
        fontSize: 12, 
        marginTop: 10,
        color: colors.text,
        fontFamily: Fonts.RobotoRegular
    },
    socialMedia:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    socialMediaIcon:{
        textAlign: 'center',
        fontSize: 16,
        marginLeft: 12.5,
        marginRight: 12.5,
        color: colors.tabbar,
    },
    separator:{
        height: 1,
        width: width - 64,
        justifyContent: 'center',
        backgroundColor: colors.border,
        marginTop: 15,
    },
    footer:{
        flexDirection: 'row',
        marginTop: 15
    },
    copyright:{
        textAlign: 'left',
        fontSize: 16,
        color: colors.title,
        justifyContent: 'center',
        marginTop: 5,
        fontFamily: Fonts.RobotoBold
    },
    year:{
        textAlign: 'left',
        fontSize: 16,
        color: colors.text,
        justifyContent: 'center',
        marginTop: 5,
        fontFamily: Fonts.RobotoLight
    }

});