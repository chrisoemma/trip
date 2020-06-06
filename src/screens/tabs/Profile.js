import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text
} from "react-native";

import { Avatar } from "react-native-elements";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Profile = () =>{

 return(
	 <>
	<View style={styles.topColor}>
	<Text style={styles.textColor}></Text>
   </View>
   <View style={styles.userSection}>
        <Avatar
          rounded
          source={{
            uri:
			"http://www.gravatar.com/avatar/3b3be63a4c2a439b013787725dfce802?d=mp",
          }}
          size={80}
          containerStyle={{ marginTop: -50, alignSelf: "center" }}
        />
        <Text
          style={{
            textAlign: "center",
            fontSize: 18,
            color: "#0c1e38",
            paddingBottom: 3,
            fontWeight: "bold",
          }}
        >
          Jane Doe
        </Text>
        <Text
          style={{ textAlign: "center", color: "#555", fontWeight: "bold" }}
        >
          0745234567
        </Text>
        <View style={styles.notificationSection}>
          <View style={{ padding: 10, justifyContent: "center", flex: 1 }}>
            <Text
              style={{ color: "#2b93bd", fontWeight: "bold", fontSize: 20 }}
            >
              15
            </Text>
            <Text style={styles.notificationCategory}>Trips</Text>
          </View>
          <View style={{ padding: 10, justifyContent: "center", flex: 1 }}>
            <Text
              style={{ color: "#16b52e", fontWeight: "bold", fontSize: 20 }}
            >
              5 <Icon name="star" size={20} />
            </Text>
            <Text style={styles.notificationCategory}>Closed Trips</Text>
          </View>
          <View style={{ padding: 10, justifyContent: "center", flex: 1 }}>
            <Text
              style={{ color: "#5e59c9", fontWeight: "bold", fontSize: 18 }}
            >
              9 Months
            </Text>
            <Text style={styles.notificationCategory}>Duration</Text>
          </View>
        </View>
		</View>
	</>
 );

}

const styles=StyleSheet.create({
	topColor: {
		backgroundColor: '#2661bf',
		height: 100,
		borderBottomRightRadius:30,
		borderBottomStartRadius:30
	  },

	  userSection: {
		borderRadius: 15,
		shadowColor: "#000",
		shadowOffset: {
		  width: 0,
		  height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
		marginTop: -40,
		marginLeft: 20,
		marginBottom: 20,
		marginRight: 20,
		padding: 20,
		backgroundColor: "#fff",
		position: "relative",
	  },
	  notificationSection: {
		flexDirection: "row",
		alignSelf: "center",
		paddingLeft: 30,
	  },
	  notificationCategory: {
		color: "#555",
		paddingBottom: 6,
	  },

})
export default Profile