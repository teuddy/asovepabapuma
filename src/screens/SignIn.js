import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar,KeyboardAvoidingView, Image } from "react-native";
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../config/firebase'
import { useToast } from "react-native-toast-notifications";



const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();



  const handleSignIn = async () =>{
    if (email === "" || password === "") {
        toast.show("LLéne los campos", {
            type: "danger",
            placement: "bottom",
            duration: 4000,
            offset: 30,
            animationType: "slide-in",
          });
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        switch (error.code) {
            case "auth/invalid-email":
                toast.show("Correo No valido", {
                    type: "danger",
                    placement: "bottom",
                    duration: 4000,
                    offset: 30,
                    animationType: "slide-in",
                  });
              break;
            case "auth/user-disabled":
              console.error("User account has been disabled");
              break;
            case "auth/user-not-found":
                toast.show("Usuario no encontrado", {
                    type: "danger",
                    placement: "bottom",
                    duration: 4000,
                    offset: 30,
                    animationType: "slide-in",
                  });
              break;
            case "auth/wrong-password":
                toast.show("Contraseña Incorrecta", {
                    type: "danger",
                    placement: "bottom",
                    duration: 4000,
                    offset: 30,
                    animationType: "slide-in",
                  });
              break;
            case "auth/too-many-requests":
              console.error("Too many unsuccessful sign-in attempts. Try again later or reset your password.");
              break;
            case "auth/network-request-failed":
              console.error("Network error occurred. Please check your internet connection.");
              break;
            default:
              console.error("Error signing in: ", error);
              break;
          }
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Image source={require('../../assets/logo.jpg')} style={{height:150,width:150}}/>
      <View style={styles.form}>
        <Text style={styles.heading}>INICIAR SESIÓN</Text>
        <TextInput
          style={styles.input}
          placeholder="Correo Electronico"
          onChangeText={(text) => setEmail(text)}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={styles.buttonText}>ENTRAR</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#010D5F",
    alignItems: "center",
    rowGap:30,
    justifyContent: "center",
  },   
  form: {
    width: "80%",
    maxWidth: 400,
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#010D5F",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default SignIn;
