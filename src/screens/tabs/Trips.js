import React, { useState,useEffect} from 'react';
import { Text,StyleSheet, View, ScrollView,TouchableOpacity,SafeAreaView ,ActivityIndicator,Modal} from 'react-native';
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


const  Trips=()=>  {

  const [isLoading, setIsLoading] = useState(true);
  const [trips, setTrips] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    fetch('http://nufastdeliveries.co.tz/?module=api&action=user_trips')
      .then((response) => response.json())
      .then((json) => setTrips(json))
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, []);

  
  if (isLoading) {
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
      <>
      <View style={styles.modalStyle} >
        <Modal visible={modalVisible}>
          <Text>Hello modal</Text>
           <View >
          <Button  title="Close" onPress={() => {
                setModalVisible(!modalVisible);
              }} buttonStyle={styles.btnStyle} />
           </View>
        </Modal>
      </View>

      <View style={styles.topColor}>
      <Text style={styles.textColor}></Text>
     </View>
    
     <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.items}>
        {trips.map((trip, i) => (
          <View style={styles.item}>
            <View style={styles.upperLayer}>
             <Icon name="car-hatchback" size={30} color="#27e86b" />
        <Text style={{ paddingLeft: 20, fontSize: 20 , fontWeight:'bold'}}>
                Trip # 00{trip.id}</Text>
              <Text style={{ paddingLeft:10, fontSize: 20 , fontWeight:'bold'}}>
                to {trip.location} 
              </Text>
            </View>
            <View style={styles.upperLayer}>
              <Text style={{ paddingRight: 20, fontSize: 13 }}>
                Truck # {trip.client_truck}
              </Text>
        <Text style={{paddingLeft:100,alignSelf: 'flex-end'}}>Client: {" "} {trip.client}</Text>
            </View>
            <View style={styles.upperLayer}>
              <Text style={{ paddingRight: 20, fontSize: 13 }}>
        Product : {trip.product}
              </Text>
        <Text style={{paddingLeft:90,alignSelf: 'flex-end'}}>Quantity(lts): {" "} {trip.fuel}</Text>
            </View>
            <View style={styles.upperLayer}>
              <Text style={{ paddingRight: 20, fontSize: 13 }}>
                Price(Tsh): {""}  {trip.price}
              </Text>
        <Text style={{paddingLeft:70,alignSelf: 'flex-end'}}>Attendant: {" "} {trip.attendant}</Text>
            </View>
            
            <View style={styles.pricingLayer}>
              <Text
                style={{ paddingRight: 250, fontSize: 12, fontWeight: "bold" }}
              >
                Date: {trip.trip_date}
              </Text>
              <TouchableOpacity    onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Icon name="close-circle" size={25} color="#eb4034"  />
              </TouchableOpacity>
            </View>
          </View>
     ))}
       
        </View>
      </ScrollView>
    </SafeAreaView>
      </>
    )
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  items: {
    backgroundColor: "#e8e8e8",
  },

  item: {
    marginTop:15,
    marginBottom: 10,
    paddingTop: 15,
    paddingBottom:15,
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "#f2f2f2",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingLeft: 20,
  },

  upperLayer: {
    flexDirection: "row",
    alignItems: "center",
    padding:8
    
  },
  pricingLayer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 10,
  },
  scrollView: {
    backgroundColor: "#edf1f2",
  },

  topColor: {
    backgroundColor: '#2661bf',
    height: 100,
    borderBottomRightRadius:30,
    borderBottomStartRadius:30
  },
  btnStyle:{
    width:100
  },
  modalStyle:{
   justifyContent:'center',
   backgroundColor:'#000'
  }
});

export default Trips