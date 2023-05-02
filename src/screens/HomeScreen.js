import * as React from 'react';
import { StyleSheet, View, Text,Button } from 'react-native';
import useGetPokemons from '../hooks/useGetPokemons'
import {signOut} from 'firebase/auth'
import {auth} from '../config/firebase'

function HomeScreen() {
  const [pokemons,setPokemons] = React.useState([])

  const query = useGetPokemons()


  React.useEffect(()=>{
    if(query.isSuccess){
      setPokemons(query.data.data.results)
    }

  },[query.isSuccess])

  return (
    <View style={styles.container}>
      {/* {query.isLoading ? <Text>Loading Data...</Text> : ""}
      {pokemons && pokemons.map((pokemon,index)=>{
          return <Text key={index}>{pokemon.name}</Text>
      })} */}
      <Text>Welcome to the Home Screen!</Text>
      <Button
        title="Cerrar Sesion"
        onPress={() => signOut(auth)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
