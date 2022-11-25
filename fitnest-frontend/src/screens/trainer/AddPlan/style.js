import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";

const styles = StyleSheet.create({
    dropdown: {
        borderWidth: 1,
        borderColor: colors.black,
        borderRadius: 15,
        padding: 10,
        width: '100%',
    },
    icon: {
        marginRight: 5,
    },
    placeholderStyle: {
        fontSize: 18,
    },
    selectedTextStyle: {
        fontSize: 18,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 20,
    },
    uploadImgTxt: {
        fontSize: 14,
        color: colors.darkGrey,
    },
    btnBox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 20
    },
});

export default styles;