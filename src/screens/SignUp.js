import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar, KeyboardAvoidingView, Image } from "react-native";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import { useToast } from "react-native-toast-notifications";


const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

    const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth,email, password);
      // Alert.alert('User account created');
      // navigation.navigate('signin');
    } catch (error) {
      switch (error.code) {
        case "auth/email-already-in-use":
          // This email is already associated with an existing user account
          toast.show("Correo electronico ya esta en uso", {
            type: "danger",
            placement: "bottom",
            duration: 4000,
            offset: 30,
            animationType: "slide-in",
          });
          break;
        case "auth/invalid-email":
          // The provided email is not a valid email address
          toast.show("Arregle el correo electronico", {
            type: "danger",
            placement: "bottom",
            duration: 4000,
            offset: 30,
            animationType: "slide-in",
          });
          break;
        case "auth/weak-password":
          // The provided password is too weak
          toast.show("Eliga mejor contraseña", {
            type: "danger",
            placement: "bottom",
            duration: 4000,
            offset: 30,
            animationType: "slide-in",
          });
          break;
        case "auth/missing-password":
            // The provided password is too weak
            toast.show("Llene los campos", {
              type: "danger",
              placement: "bottom",
              duration: 4000,
              offset: 50,
              animationType: "slide-in",
            });
            break;
        default:
          // Handle any other errors that may occur
          console.error(`Error creating user: ${error.message}`);
          break;
      }
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Image source={require('../../assets/image.jpg')} style={{height:150,width:150}}/>

      <View style={styles.form}>
        <Text style={styles.heading}>REGISTRARSE</Text>
        <TextInput
          style={styles.input}
          placeholder="Correo Electrónico"
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
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>REGISTRARSE</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    rowGap: 30,
    justifyContent: "center",
  },
  form: {
    width: "80%",
    maxWidth: 400,
    backgroundColor: "#010D5F",
    borderRadius: 10,
    padding: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#FFF",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    backgroundColor: "#FFF",
    color: "#010D5F",
  },
  button: {
    backgroundColor: "#FFF",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#010D5F",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default SignUp;


// import React, { useState ,useEffect} from 'react';
// import {TextInput, View, StyleSheet, Alert , KeyboardAvoidingView, Image} from 'react-native';
// import {  Button, Title } from 'react-native-paper';
// import {createUserWithEmailAndPassword} from 'firebase/auth';
// import {auth} from '../config/firebase'
// import { useToast } from "react-native-toast-notifications";

// const SignUp = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const toast = useToast();



//   const handleSignUp = async () => {
//     try {
//       await createUserWithEmailAndPassword(auth,email, password);
//       Alert.alert('User account created');
//       // navigation.navigate('signin');
//     } catch (error) {
//       switch (error.code) {
//         case "auth/email-already-in-use":
//           // This email is already associated with an existing user account
//           toast.show("Correo electronico ya esta en uso", {
//             type: "danger",
//             placement: "bottom",
//             duration: 4000,
//             offset: 30,
//             animationType: "slide-in",
//           });
//           break;
//         case "auth/invalid-email":
//           // The provided email is not a valid email address
//           toast.show("Arregle el correo electronico", {
//             type: "danger",
//             placement: "bottom",
//             duration: 4000,
//             offset: 30,
//             animationType: "slide-in",
//           });
//           break;
//         case "auth/weak-password":
//           // The provided password is too weak
//           toast.show("Eliga mejor contraseña", {
//             type: "danger",
//             placement: "bottom",
//             duration: 4000,
//             offset: 30,
//             animationType: "slide-in",
//           });
//           break;
//         default:
//           // Handle any other errors that may occur
//           console.error(`Error creating user: ${error.message}`);
//           break;
//       }
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <KeyboardAvoidingView behavior='padding'>
//         <View style={styles.logo}>
//           <Image source={require('../../assets/logo.jpg')} style={{height:150,width:150}}/>
//         </View>
//         <Title style={styles.title}>Sé parte de Asovepabapuma</Title>
//           <TextInput
//             label="Correo Electrónico"
//             value={email}
//             onChangeText={setEmail}
//             style={styles.input}
//             autoCapitalize="none"
//             keyboardType="email-address"
//           />
//           <TextInput
//             label="Contraseña"
//             value={password}
//             onChangeText={setPassword}
//             style={styles.input}
//             secureTextEntry
//             autoCapitalize="none"
//           />
//           <Button mode="contained" onPress={handleSignUp} style={styles.button}>
//             REGÍSTRATE
//           </Button>
//       </KeyboardAvoidingView>
//     </View>
//   );
// };


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//   },
//   title: {
//     fontSize: 24,
//     textAlign: 'center',
//     marginBottom: 40,
//   },
//   input: {
//     height: 40,
//     borderColor: "gray",
//     borderWidth: 1,
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 20,
//   },
//   logo:{
//     alignItems: 'center'
//   },  
//   button: {
//     marginTop: 10,
//     padding:8,
//     fontSize: 10 
//   },
// });

// export default SignUp;
