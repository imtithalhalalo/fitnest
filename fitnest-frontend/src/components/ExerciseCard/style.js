import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({

    cardBox: {
        marginTop: '5%',
        backgroundColor: colors.lighterPurple,
        borderRadius: 20,
        width: '98%',
        alignSelf: 'center',

    },
    box: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cardCover: {
        padding: '0%',
        width: '50%',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,

    },
    p4: {
        padding: '4%'
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: '500',
        color: colors.purple,
        textTransform: 'uppercase'
    },
    cardSubtitle: {
        fontSize: 14,
        fontWeight: '300',
        color: colors.purple
    },
    primaryBtn: {
        width: '30%',
        padding: '2%',
        backgroundColor: colors.purple,
        borderRadius: 15,
    },
    primaryTextBtn: {
        fontSize: 18,
        color: colors.white,
        textAlign: 'center'
    },
    titlesContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '50%'
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    rowSpace: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})

export { styles }