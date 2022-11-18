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
    barContainer: {
        borderColor: colors.white,
        backgroundColor: colors.lightPurple,
        borderWidth: 0,
        borderRadius: 20,
        color: colors.purple,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: 45,
        alignSelf: 'center',
        marginTop: 18,
        paddingLeft: '5%',
        paddingRight: 7
    },

    
})


export default styles