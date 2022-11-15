import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({

    cardBox: {
        marginTop: '5%',
        backgroundColor: colors.lighterPurple,
        borderRadius: 15,
        width: '98%',
        alignSelf: 'center'
    },
    cardCover: {
        padding: '0%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    p4: {
        padding: '4%'
    },
    cardTitle: {
        fontSize: 22,
        fontWeight: '500',
        color: colors.purple
    },
    cardSubtitle: {
        fontSize: 14,
        fontWeight: '300',
        color: colors.purple
    }
})

export { styles }