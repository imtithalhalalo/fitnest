import { StyleSheet, Text,Image, View, TouchableOpacity, } from 'react-native'
import React from 'react'
import { style } from '../../styles/style'
import { useNavigation } from '@react-navigation/native'
import colors from '../../constants/colors';
import { EvilIcons } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from '@gorhom/bottom-sheet';

const Header = (props) => {

    const navigation = useNavigation();

    return (
        <View style={style.bar}>
            {props.back ? (
                <TouchableWithoutFeedback onPress={() => {navigation.pop()}}>
                    <EvilIcons name="arrow-left" size={50} color={colors.purple} />
                </TouchableWithoutFeedback>
                
            ):
            <></>
            }
            <Text style={{ fontSize: 24, fontWeight: '500', marginRight: '10%' }}>{props.text}</Text>

            {props.image ?  (
                <Image source={{ uri: props.image }} style={{ width: 35, height: 35, borderRadius: 400 / 2 }} />
            ): <></>          
            }
                

        </View>
    )
}

export default Header