import { Dimensions, StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({

    gridItem: {
        margin: 5,
        marginBottom: '4%',
        width: '47%',
        minHeight: (Dimensions.get('window').width - 100) / 1.8,
        maxWidth: (Dimensions.get('window').width - 30) / 2,
        borderRadius: 15,
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'column',
        padding: '5%',
        marginTop: '6%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
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
        marginBottom: 2,
        marginTop: 7,
        fontWeight: '500'
    },


})

export { styles }