import { Bubble } from 'react-native-gifted-chat'
import colors from '../constants/colors'
const renderBubble = (props) =>{
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: colors.purple
          },
          left: {
            backgroundColor: colors.white
          }
        }}
      />
    )
  }
export default renderBubble