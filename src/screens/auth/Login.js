import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Keyboard,
  ActivityIndicator
} from "react-native";
import { Input, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Formik } from "formik";
import * as yup from "yup";
import { AuthContext } from "../../components/Context";




const phoneRegExp = /^((\\+[1-9]{1,9}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const LoginSchema = yup.object({
  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .matches(phoneRegExp, "Phone number is not valid"),
  password: yup.string().required("Password required").min(6),
});

const Login = (props) => {

  const {signIn} = React.useContext(AuthContext);

  return (
  
    <View style={styles.container}>
      <View style={styles.topColor}>
        <Text style={styles.textColor}>Trip</Text>
      </View>
      <View style={styles.loginForm}>
        <Text style={styles.headerText}>Welcome back</Text>
        <Formik
          validationSchema={LoginSchema}
          initialValues={{ phoneNumber: "", password: "" }}
          onSubmit={(values, actions) => {
            actions.resetForm();
            Keyboard.dismiss();

            signIn(values.phoneNumber,values.password);

          }}
        >
          {(props) => (
            <View>
              <Input
                inputStyle={{ margin: 5 }}
                placeholder="Phone number"
                leftIcon={<Icon name="phone" size={24} color="#174778" />}
                onChangeText={props.handleChange("phoneNumber")}
                onBlur={props.handleBlur("phoneNumber")}
                value={props.values.phoneNumber}
                errorStyle={{ color: "red" }}
                errorMessage={
                  props.touched.phoneNumber && props.errors.phoneNumber
                }
                keyboardType="phone-pad"
              />
              <Input

                placeholder="Password"
                inputStyle={{ margin: 5 }}
                leftIcon={<Icon name="lock" size={24} color="#174778" />}
                onChangeText={props.handleChange("password")}
                onBlur={props.handleBlur("password")}
                value={props.values.password}
                errorStyle={{ color: "red" }}
                errorMessage={props.touched.password && props.errors.password}
                secureTextEntry={true}
              />

              <Button
                title="Login"
                buttonStyle={styles.btnStyle}
                onPress={() => props.handleSubmit()}
              />
            </View>
          )}
        </Formik>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#edf1f2",
    height: "100%",
    flex: 1,
  },
  headerText: {
    padding: 10,
    color: "#174778",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  loginForm: {
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginLeft: 20,
    marginRight: 20,
    marginTop: -30,
    padding: 20,
  },
  btnStyle: {
    marginTop: 5,
    borderRadius: 20,
    shadowColor: "#000",
  },
  forgotPassword: {
    paddingTop: 15,
    textAlign: "right",
    color: "#174778",
    fontSize: 15,
  },
  topColor: {
    backgroundColor: "#2661bf",
    height: 250,
  },
  textColor: {
    color: "#fff",
    textAlign: "center",
    fontSize: 50,
    marginTop: "18%",
    textShadowRadius: 5,
    textShadowColor: "#555",
    fontWeight: "bold",
    fontFamily: "monospace",
  },
});

export default Login;
