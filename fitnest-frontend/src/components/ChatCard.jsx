import { Image } from 'react-native'
import React from 'react'
import colors from '../constants/colors'
import { Card } from 'react-native-paper';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const ChatCard = (props) => {
    return (
        <Card.Title
            title={props.title}

            style={{ backgroundColor: colors.lightPurple, borderRadius: 15 , marginTop: '5%'}}

            left={ 
                () =>
                    <Image
                        source={{uri: props.image}}
                        style={{ width: 35, height: 35, borderRadius: 400 / 2 }} />
            }

            right={
                () => 
                    <MaterialCommunityIcons
                    name="message-outline"
                    size={20} color={colors.purple}
                    style={{ paddingRight: '5%'}}
                    onPress={props.createChat}/>
                }
        />

    )
}

export default ChatCard