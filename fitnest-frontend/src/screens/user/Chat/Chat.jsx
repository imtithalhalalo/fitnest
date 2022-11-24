import { View, SafeAreaView } from 'react-native'
import React, { useState, useCallback, useEffect, useContext } from 'react'
import Header from '../../../components/Header'
import { GiftedChat } from 'react-native-gifted-chat'
import { database } from '../../../../firebase'
import {
  collection,
  orderBy,
  onSnapshot,
  query,
  addDoc,
  doc,
} from "firebase/firestore";
import renderBubble from '../../../helpers/renderBubble'
import renderSend from '../../../helpers/renderSend'
import renderInputToolbar from '../../../helpers/renderInputToolbar'
import { style } from '../../../styles/style'
import { address } from '../../../variables/global'
import { UserContext } from '../../../stores/UserContext'
const Chat = ({ route }) => {
  
  const { chatID, trainer_id, name, image } = route.params;
  const [messages, setMessages] = useState([]);
  const {userData, setUserData} = useContext(UserContext); 
  useEffect(() => {
    const collectionRef = collection(doc(database, "chats", chatID), "messages");
    const q = query(collectionRef, orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(
        snapshot.docs.map((doc) => ({
          _id: doc.data()._id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: doc.data().user,

        }))
      )
    })
    return unsubscribe
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    )
    const { _id, createdAt, text, user } = messages[0]

    addDoc(collection(database, `chats/${chatID}`, "messages"), {
      _id,
      createdAt,
      text,
      user,
    })
  }, [])

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
            avatar: `${address}/${userData.image}`
          }}
          renderSend={renderSend}
          renderInputToolbar={renderInputToolbar}
          renderBubble={renderBubble}
        />

      </View>

    </SafeAreaView>

  )
}

export default Chat