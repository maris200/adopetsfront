import { StyleSheet} from 'react-native';
import colors from '../../../../assets/colors/Colors'

export default StyleSheet.create({
    header:{
        justifyContent: 'center', 
        alignItems: 'center',
        paddingBottom: 12,
        backgroundColor: colors.header,
    },
    viewIcon:{
        flexDirection: 'row',
        justifyContent: 'center', 
        alignItems: 'center'
    },
    logoIcon:{
        marginHorizontal: 10,
        paddingTop: 12,
        paddingBottom: 12 
    },
    headerIcon:{
        alignItems: 'flex-start',
        fontSize: 24,
        color: colors.tabbar
    },
});