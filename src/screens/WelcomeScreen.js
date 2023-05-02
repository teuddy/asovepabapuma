import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { Button, Text, Title } from 'react-native-paper';
import Slider from '../components/Slider';


const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Slider/>
      <View style={styles.buttonContainer}>
      <Button
          mode="outlined"
          style={styles.button}
          onPress={() => navigation.navigate('signin')}
        >
          ENTRAR
        </Button>
        <Button
          mode="contained"
          style={styles.button}
          onPress={() => navigation.navigate('signup')}
        >
          REGISTRARSE
        </Button>
    
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
      height: 160,
      width: 160
  },  
  title: {
    fontSize: 24,
  },
  buttonContainer: {
    justifyContent: 'center',
    height: '30%',
    display: 'flex',
    flexDirection:'column',
    position: 'absolute',
    bottom: 0, 
    left: 0, 
    right: 0, 
    alignItems: 'center' ,
    backgroundColor:'#ffffff'
  },
  button: {
    marginBottom: 15,
    padding: 8,
    fontSize: 10 ,
    width: '80%',
    color: '#020B5C'
  },
});

export default WelcomeScreen;
