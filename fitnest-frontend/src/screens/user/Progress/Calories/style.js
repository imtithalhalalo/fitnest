import { Dimensions, StyleSheet } from 'react-native'
import colors from '../../../../constants/colors'

const styles = StyleSheet.create({
    item: {
        margin: 5,
        marginBottom: '4%',
        width: '96%',
        minHeight: (Dimensions.get('window').width - 100) / 1.8,
        borderRadius: 15,
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'column',
        padding: '5%',
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 9,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: colors.lighterPurple,
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    titleLabel: {
        fontSize: 20,
        color: colors.purple,
        fontWeight: '500'
    },
    centered: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.lightGrey
    },
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modal: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: '5%',
        height: '73%',
        width: '90%',
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    iconTitle: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '10%',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: '400',
        marginLeft: '5%',
        color: colors.purple
    },
    label: {
        fontSize: 14,
        fontWeight: '300',
        color: colors.purple
    }
    
})


export default styles