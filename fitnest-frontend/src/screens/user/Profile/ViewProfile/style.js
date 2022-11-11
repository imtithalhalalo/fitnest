import { StyleSheet } from "react-native";
import colors from "../../../../constants/colors";

const styles = StyleSheet.create({
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
    },
    desc: {
        fontSize: 16,
        color: colors.darkGrey,
        paddingTop: '3%',
        paddingBottom: '3%',
        fontWeight: '400'
    },
    text: {
        fontSize: 18,
        color: colors.black,
        fontWeight: '500',
        paddingLeft: '4%'
    },
    title: {
        fontSize: 22,
        color: colors.black,
        fontWeight: '500'
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    profileImg: {
        width: 120,
        height: 120,
        borderRadius: 400 / 2,
    },
    profContainer: {
        display: "flex",
        alignSelf: "center",
        marginBottom: 20,
    },
    container: {
        padding: '10%',
        paddingTop: '30%',
        backgroundColor: colors.lighterPurple,
        flex: 1,
    },
})

export default styles