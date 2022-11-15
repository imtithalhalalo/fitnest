import { SafeAreaView, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../../../components/Header'
import { GiftedChat } from 'react-native-gifted-chat'
import renderBubble from '../../../helpers/renderBubble'
import renderInputToolbar from '../../../helpers/renderInputToolbar'
import renderSend from '../../../helpers/renderSend'
import { style } from '../../../styles/style'

const Chat = ({ route }) => {

  const { chatID, trainer_id, name, image } = route.params;
  const [messages, setMessages] = useState([]);

  return (
    <SafeAreaView style={style.mainContainer}>
      <Header text={name} image={image} back="back" />
      <View style={style.chatBg}>
        <GiftedChat
          messages={messages}
          showAvatarForEveryMessage={true}
          onSend={messages => onSend(messages)}
          user={{
            _id: trainer_id,
            name: name,
            avatar: image
          }}
          renderBubble={renderBubble}
          renderInputToolbar={renderInputToolbar}
          renderSend={renderSend}
        />
      </View>
    </SafeAreaView>

  )
}

export default Chat