/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import Login from "./src/screens/auth/Login";
import Trips from "./src/screens/tabs/Trips";
import HamburgerNavigation from "./src/navigations/HamburgerNavigation";
import { AuthContext } from "./src/components/Context";
import AsyncStorage from "@react-native-community/async-storage";

const App = () => {
  // const [isLoading,setIsLoading]=React.useState(true);
  // const [userToken,setUserToken]=React.useState(null);

  initialLoginState = {

    isLoading: true,
    name: null,
    phoneNumber: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case "RETRIVE_TOKEN":
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGIN":
        return {
          ...prevState,
          userToken: action.token,
          name: action.name,
          phoneNumber: action.phoneNumber,
          isLoading: false,
        };
      case "LOGOUT":
        return {
          ...prevState,
          userToken: null,
          name: null,
          phoneNumber: null,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState
  );

  const authContext = React.useMemo(() => ({
    signIn: async (phoneNumber, password) => {
      //fetch from api
   
      const response = await fetch("http://nufastdeliveries.co.tz/?module=api&action=login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phoneNumber: phoneNumber,
          password: password,
        }),
      });

      const responseJson = await response.json();

      let userToken;
      userToken = null;
      let name;
      name = null;
      if (responseJson.status == "success") {

        try {
          userToken = responseJson.token;
          await AsyncStorage.setItem("userToken", userToken);
          await AsyncStorage.setItem("name", JSON.stringify(responseJson.name));
          await AsyncStorage.setItem("phoneNumber", responseJson.phoneNumber);
        } catch (e) {
          console.error(e);
        }
      }
      console.log("user Token: ", userToken);
      dispatch({ type: "LOGIN", token: userToken, phoneNumber: phoneNumber});
    },

    
    signOut: async () => {
      try {
        await AsyncStorage.removeItem("userToken");
        await AsyncStorage.removeItem("name");
        await AsyncStorage.removeItem("phoneNumber");
      } catch (e) {
        console.error(e);
      }

      dispatch({ type: "LOGIN" });
    },
  }));


  
  useEffect(() => {
    setTimeout(async () => {
      //  setIsLoading(false);
      let userToken;
      userToken = null;
      let name;
      name = null;
      let phoneNumber;
      phoneNumber = null;
      
      try {
        userToken = await AsyncStorage.getItem("userToken");
        name = await AsyncStorage.getItem("name");
        phoneNumber = await AsyncStorage.getItem("phoneNumber");
       
      } catch (e) {
        console.error(e);
      }

      dispatch({ type: "RETRIVE_TOKEN", token: userToken, });
    },);
  }, []);

  if (loginState.isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          backgroundColor: "#2661bf",
        }}
      >
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }
  return (
    <AuthContext.Provider value={authContext}>
      {loginState.userToken != null ? <HamburgerNavigation /> : <Login />}
    </AuthContext.Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
