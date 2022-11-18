import { Dimensions, StyleSheet } from 'react-native'
import colors from '../../../../constants/colors'

const styles = StyleSheet.create({
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    centered: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.lightGrey
    },
    modal: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: '5%',
        height: '60%',
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
    hoursBtn: { 
        color: colors.purple, 
        fontWeight: '500' 
    },
    btnHoursContainer: {
        backgroundColor: colors.white, 
        padding: 10, 
        borderRadius: 15,
        marginBottom: '2%',
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        marginBottom: '10%',
        backgroundColor: colors.lighterPurple
    },
    average: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.purple
    },
    btnLabel: {
        fontSize: 14,
        fontWeight: '400',
        textAlign: 'center',
        color: colors.purple
    },
})


export default styles