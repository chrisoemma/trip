import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {Header} from 'react-native-elements';
import {createStackNavigator} from '@react-navigation/stack';
import Trips from '../screens/tabs/Trips';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon2 from "react-native-vector-icons/FontAwesome5";
import Profile from '../screens/tabs/Profile';
import ClosedTrips from './ClosedTrips';



const HomeStackScreen = ({navigation}) => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#2661bf',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <HomeStack.Screen
        name="Trips"
        component={BottomTabs}
        options={{
          headerStyle: {
            elevation: 0,
            backgroundColor: '#2661bf', 
          },
          headerLeft: () => (
            <TouchableOpacity>
              <Icon
                name="menu"
                color="#fff"
                size={40}
                onPress={() => navigation.openDrawer()}
                iconStyle={{marginLeft:30}}
              />
            </TouchableOpacity>
          ),
          
        }}
      />
     
    </HomeStack.Navigator>
  );
};



const BottomTabs = ({ navigation, route }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  }, [navigation, route]);

  return (
    <Tab.Navigator
    activeColor="#f0edf6"
 
    barStyle={{ backgroundColor: '#2661bf', color:"#fff" }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Trips") {
            iconName = focused ? "truck-moving" : "truck-moving";
          } else if (route.name === "Profile") {
            iconName = focused ? "user-alt" : "user-alt";
          }else if (route.name === "Closed Trips") {
            iconName = focused ? "lock" : "lock";
          }

          // You can return any component that you like here!
          return <Icon2 name={iconName} size={20} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Trips" component={Trips} />
      <Tab.Screen name="Closed Trips" component={ClosedTrips} />
      <Tab.Screen name="Profile" component={Profile} />
    
    </Tab.Navigator>
  );
};

const getHeaderTitle = (route) => {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : route.params?.screen || "Trips";

  switch (routeName) {
    case "Trips":
      return "Trips";
    case "Profile":
      return "Profile";
    case "Closed Trips":
      return "Closed Trips";   
  }
};



const HomeStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const styles = StyleSheet.create({});

export default HomeStackScreen;
