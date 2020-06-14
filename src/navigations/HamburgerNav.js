import React,{useEffect,useState} from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  Linking,
} from "react-native";

import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";

import { Header } from "react-native-elements";
import { DrawerItem, DrawerContentScrollView } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { AuthContext } from "../components/Context";
import AsyncStorage from "@react-native-community/async-storage";

const supportNumber = '+255785181718';




const HamburgerNav = (props) => {

  const {signOut}= React.useContext(AuthContext);

  const [phoneNumber,setNumber] = React.useState(0);
  const [name,setName] = React.useState("");


  useEffect(() => {

    const bootstrapAsync = async () => {
      //  setIsLoading(false);
      
      try {

       // userToken = await AsyncStorage.getItem("userToken");
       const  userName = await AsyncStorage.getItem("name");
         setName(JSON.parse(userName));
       const userPhoneNumber = await AsyncStorage.getItem("phoneNumber");
          setNumber(userPhoneNumber);
        
        
      } catch (e) {
        console.error(e);
      }
    };
    
    bootstrapAsync();
  }, []);


 
 
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
          <Avatar.Image
            source={{
              uri:
              "http://www.gravatar.com/avatar/3b3be63a4c2a439b013787725dfce802?d=mp",
            }}
            size={50}
          />
          <Title style={styles.title}>{name}</Title>
          <Caption style={styles.caption}>{phoneNumber}</Caption>
        </View>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({ size }) => (
              <Icon name="account" color="#2661bf" size={size} />
            )}
            label="Profile"
            onPress={() => props.navigation.navigate("Profile")}
          />

           <DrawerItem
            icon={({ size }) => (
              <Icon name="close-circle" color="#2661bf" size={size} />
            )}
            label="Closed Trips"
            onPress={() => props.navigation.navigate("Closed Trips")}
          />
       
          <DrawerItem
            icon={({ size }) => (
              <Icon name="phone" color="#2661bf" size={size} />
            )}
            label="Support"
            onPress={() => Linking.openURL(`tel:${supportNumber}`)}
          />
          
          <DrawerItem
            icon={({ size }) => (
              <Icon name="logout" color="#2661bf" size={size} />
            )}
            label="Sign Out"
            onPress={() => {signOut()}}
          />

    
        </Drawer.Section>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    marginTop: 20,
    fontWeight: "bold",
    marginBottom:10,
    marginLeft:10
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    marginLeft:10
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

export default HamburgerNav;
