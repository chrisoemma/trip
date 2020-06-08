/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState,useEffect} from 'react';
import {
 ActivityIndicator,
  StyleSheet,
  View
} from 'react-native';
import Login from './src/screens/auth/Login';
import Trips from './src/screens/tabs/Trips';
import HamburgerNavigation from './src/navigations/HamburgerNavigation';
import { AuthContext } from './src/components/Context';


const App=() => {

const [isLoading,setIsLoading]=React.useState(true);
const [userToken,setUserToken]=React.useState(null);

const authContext = React.useMemo(()=>({
 signIn : ()=>{
 setUserToken('45tr');
 setIsLoading(false);
 },
 signOut : () =>{
  setUserToken(null);
 setIsLoading(false);
 }

}));

useEffect(()=>{
  setTimeout(()=>{
    setIsLoading(false);
  },1000)
},[])

  if(isLoading){

    return(<View style={{flex:1,justifyContent:'center',backgroundColor:'#2661bf'}}>
      <ActivityIndicator size="large" color="#00ff00"/>
    </View>)
    }
  return (
    <AuthContext.Provider value={authContext}>
   { userToken != null?
   (
   <HamburgerNavigation />
   )
   :
   <Login />
}
   </AuthContext.Provider>
  );
};

const styles = StyleSheet.create({
});

export default App;
