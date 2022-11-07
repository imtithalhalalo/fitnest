import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { style } from './style'
import Icon from 'react-native-vector-icons/Feather';
import colors from '../../constants/colors';
import { useNavigation } from '@react-navigation/core';
const EmptyState = (props) => {
    const navigation = useNavigation();
    return (
        <View style={style.container}>
            {props.icon ? (
                <>
                    <Icon
                        name={props.icon}
                        color={colors.lightPurple}
                        size={130}
                        style={style.icon}
                    />
                    <Text style={style.title}>{props.title}</Text>
                    <Text style={style.description}>{props.description}</Text>
                    <TouchableOpacity style={style.primaryBtn} onPress={() => { navigation.navigate('UserProfileStack') }}>
                        <Text style={style.primaryTextBtn}>Go to my profile</Text>
                    </TouchableOpacity>
                </>

            ) : <>
                <View style={style.imageContainer}>
                    <Image
                        source={props.image}
                        style={style.image}
                        resizeMode={'contain'}
                    />
                    <Text style={style.title}>{props.title}</Text>
                    <Text style={style.description}>{props.description}</Text>
                    <TouchableOpacity style={style.primaryBtn} onPress={() => { navigation.navigate('UserProfileStack') }}>
                        <Text style={style.primaryTextBtn}>Go to my profile</Text>
                    </TouchableOpacity>
                </View>

            </>

            }
        </View>

    )
}

export default EmptyState