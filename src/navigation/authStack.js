import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn';


const Stack = createStackNavigator();

export default AuthStack = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                cardStyle:{
                    backgroundColor: '#FFFFFF',
                },
                headerShown: false
            }}> 
                {/**ESTAS SON LAS RUTAS A LAS QUE SE PUEDE IR  */}
                <Stack.Screen name="business" component={WelcomeScreen}/>
                <Stack.Screen name="signup" component={SignUp}/>
                <Stack.Screen name="signin" component={SignIn}/>
                
            </Stack.Navigator>
      </NavigationContainer>
    )
}