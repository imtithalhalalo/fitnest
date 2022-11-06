import { StyleSheet, Text, SafeAreaView, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome, AntDesign } from "react-native-vector-icons";
import { style } from '../../../styles/style';
import colors from '../../../constants/colors';
import ProfileBox from '../../../components/ProfileBox';

const Profile = ({ navigation }) => {
    return (
        <>
            <SafeAreaView style={styles.container}>
                <View style={styles.profContainer}>
                    <View>
                        <Image source={require('../../../../assets/images/profile.jpg')} style={styles.profileImg} />
                    </View>
                </View>
                <View style={style.inputContainer}>
                    <Text style={styles.name}>Imtithal Halalo</Text>
                </View>

                <ProfileBox icon={"phone"} title={"Phone Number"} description={"10:00 AM - 9:00 PM"} />
                <ProfileBox icon={"email"} title={"Email"} description={"10:00 AM - 9:00 PM"} />
                <View>
                    <View style={styles.row}>
                        <FontAwesome
                            name="university"
                            size={20}
                            color={colors.purple} />
                        <Text style={styles.text}>Education</Text>
                    </View>
                    <Text style={styles.desc}>Lebanese Internation University</Text>
                </View>
                <ProfileBox icon={"work"} title={"Experience"} description={"N/A"} />
                <View>
                    <View style={styles.row}>
                        <AntDesign
                            name="clockcircle"
                            size={20}
                            color={colors.purple} />
                        <Text style={styles.text}>Working Hours</Text>
                    </View>
                    <Text style={styles.desc}>10:00 AM - 9:00 PM</Text>
                </View>
                <TouchableOpacity style={style.primaryBtn} onPress={() => { navigation.navigate('EditProfile') }}>
                    <Text style={style.primaryTextBtn}>Edit Profile</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </>
    )
}

export default Profile

const styles = StyleSheet.create({
})