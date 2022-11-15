import { StyleSheet } from "react-native";
import colors from "../../../../constants/colors";


const styles = StyleSheet.create({
    column: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 18,
        color: colors.black,
        fontWeight: '700',
        textAlign: 'center'
    },
    value: {
        fontSize: 16,
        fontWeight: '400',
        color: colors.purple,
        marginTop: '5%',
        textAlign: 'center'
    },
    dash: {
        width: '100%',
        height: 1,
        marginTop: '5%',
        color: colors.lightGrey,
        backgroundColor: colors.lightGrey
    },
    ingredientsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    img: {
        width: 250,
        height: 250,
        alignSelf: 'center',
    },
    txt: {
        color: colors.purple,
        fontSize: 14,
        fontWeight: '400'
    }

})

export { styles }