import { Dimensions, StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: '5%',
        height: '20%',
        width: '70%',
        alignItems: "center",
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 18,
    },
    button: {
        borderRadius: 15,
        width: '50%',
        marginTop: '10%',
        padding: 10,
        elevation: 2
    },
    buttonClose: {
        backgroundColor: colors.purple,
    },
    textStyle: {
        color: colors.white,
        fontWeight: "bold",
        textAlign: "center"
    },

})

export { styles }