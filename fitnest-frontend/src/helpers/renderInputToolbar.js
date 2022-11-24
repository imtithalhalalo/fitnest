import { InputToolbar } from "react-native-gifted-chat"
import colors from "../constants/colors"

const renderInputToolbar = (props) => {
   return <InputToolbar {...props} containerStyle={{marginTop: '40%',borderRadius: 15, borderWidth: .5, borderColor: colors.purple, borderTopColor: colors.purple}} value={''}/>
}
export default renderInputToolbar;