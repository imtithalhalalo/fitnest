import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../constants/colors";
import { StyleSheet, View, Text } from "react-native";
import React, { useMemo, useRef } from 'react';
import { FontAwesome } from "@expo/vector-icons";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  TouchableWithoutFeedback,
} from '@gorhom/bottom-sheet';
import TrainerProfileStack from "./ProfileStack/TrainerProfileStack";
import TrainerChatStack from "./ChatStack/TrainerChatStack";


const BottomTabsTrainer = ({ navigation }) => {

  const ref = useRef(null);
  const snapPoints = useMemo(() => [400], []);

  const onClick = () => {
    ref.current.present();
  };

  const BottomTabsNav = createBottomTabNavigator();

  return (

    <>
      <BottomSheetModalProvider>
       
        <BottomSheetModal
          ref={ref}
          snapPoints={snapPoints}
        >
          <View style={styles.contentContainer}>

            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('AddPlan')}
            >
              <View style={styles.btnBox}>
                <FontAwesome name="plus-circle" size={30} color={colors.purple} style={{ paddingLeft: 20 }} />
                <Text style={styles.btnText}>Add Plan</Text>
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('AddStep')}>
              <View style={styles.btnBox}>
                <FontAwesome name="plus-circle" size={30} color={colors.purple} style={{ paddingLeft: 20 }} />
                <Text style={styles.btnText}>Add Step</Text>
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => navigation.navigate('AddMeal')}>
              <View style={styles.btnBox}>
                <FontAwesome name="plus-circle" size={30} color={colors.purple} style={{ paddingLeft: 20 }} />
                <Text style={styles.btnText}>Add Meal</Text>
              </View>

            </TouchableWithoutFeedback>
          </View>
        </BottomSheetModal>

        <BottomTabsNav.Navigator
          initialRouteName="ProfileStack"
          screenOptions={{
            headerShown: false,
            tabBarStyle: styles.tabBar
          }}
        >
          <>
            <BottomTabsNav.Screen
              name="ProfileStack"
              component={TrainerProfileStack}
              options={{
                tabBarLabel: "Profile",
                tabBarIcon: ({ color, size }) => (
                  <FontAwesome name="user" size={size} color={color} />
                ),
              }}
            />
            <BottomTabsNav.Screen
              name="TrainerProfileStack"
              component={TrainerProfileStack}
              options={{
                tabBarLabel: "Profile",
                tabBarIcon: () => (
                  <FontAwesome name="plus-circle" size={35} color={colors.purple} onPress={onClick} />
                ),
              }}
            />
            <BottomTabsNav.Screen
              name="TrainerChatStack"
              component={TrainerChatStack}
              options={{
                tabBarLabel: "Chat",
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="chat"
                    color={color}
                    size={size}
                  />
                ),
              }}
            />
          </>
        </BottomTabsNav.Navigator>
      </BottomSheetModalProvider>
    </>
  )

}
export default BottomTabsTrainer;

const styles = StyleSheet.create({

  contentContainer: {
    flex: 1,
    padding: 10,
    marginTop: 10
  },
  btnText: {
    padding: 15,
    fontSize: 20,
    fontWeight: '400',
    color: colors.purple
  },
  btnBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  tabBar:{
    borderTopRadius:10,
    width:'100%',
    position:'absolute',
},
});