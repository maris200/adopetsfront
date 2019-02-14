import { StyleSheet, Dimensions} from 'react-native';
import colors from '../../../../assets/colors/Colors';

const { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    tabbar:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        width: width,
        height: 56,
        marginRight: 7.5,  
        backgroundColor: colors.header,
    },
    tabIcon:{
        fontSize: 22,
        textAlign: 'left',
        paddingHorizontal: 25.5
    },
});