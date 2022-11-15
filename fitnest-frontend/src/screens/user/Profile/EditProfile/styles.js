import { Dimensions, StyleSheet } from "react-native"
import colors from "../../../../constants/colors"

const styles = StyleSheet.create({
    container: {
        padding: '10%',
        paddingTop: '20%',
        backgroundColor: colors.lighterPurple,
        flex: 1,
    },
    profileImg: {
        width: 120,
        height: 120,
        borderRadius: 400 / 2,
    },
    imgContainer: {
        alignSelf: "center",
        marginBottom: 20,
        alignItems: 'center'
    },
    choose: {
        textAlign: "center",
        paddingTop: 10,
        color: colors.purple,
        fontWeight: "700"
    },
    delete: {
        textAlign: "center",
        paddingTop: 10,
        color: colors.green,
        fontWeight: "700",
        paddingLeft: 10
    },
})

export default styles