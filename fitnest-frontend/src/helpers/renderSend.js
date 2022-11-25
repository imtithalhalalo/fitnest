import { TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../constants/colors";

const renderSend = (props) => {
  return (
      <TouchableOpacity onPress={() => {
        if (props.text && props.onSend) {
          props.onSend({ text: props.text.trim() }, true)
        }
      }
      }>
        <AntDesign name="plus" size={30} color={colors.purple} style={{ marginRight: '5%', marginBottom: '10%', }} />
      </TouchableOpacity>
  );
}

export default renderSend;