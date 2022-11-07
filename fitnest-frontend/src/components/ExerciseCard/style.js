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
        color: colors.purple
    },
    cardSubtitle: {
        fontSize: 14,
        fontWeight: '300',
        color: colors.purple
    },
})

export { styles }