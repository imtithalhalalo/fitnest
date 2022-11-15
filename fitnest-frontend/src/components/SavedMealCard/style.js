import { StyleSheet } from "react-native";
import colors from "../../constants/colors";


const styles = StyleSheet.create({

    cardBox: {
        marginTop: '2%',
        backgroundColor: colors.white,
        borderRadius: 20,
        width: '98%',
        alignSelf: 'center',
    },
    box: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
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
        textAlign: 'center',
        width: '50%'
    },
})

export { styles }