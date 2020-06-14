import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { createStackNavigator } from "@react-navigation/stack";
import createHomeStack from "./CreateHomeStack";
import HamburgerNav from "./HamburgerNav";
import { NavigationContainer } from "@react-navigation/native";

const HamburgerNavigation = () => {
  
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerStyle={{
          width: 240,
          paddingTop: 100 / 2,
          backgroundColor:'#f7f7f7'
          
        }}
        drawerContent={(props) => <HamburgerNav {...props} />}
        drawerContentOptions={{
          activeTintColor: "#4287f5",
          itemStyle: { marginVertical: 20 },
        }}
      >
        <Drawer.Screen name="Trips" component={createHomeStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const Drawer = createDrawerNavigator();


export default HamburgerNavigation;
