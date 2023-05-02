import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import Business from '../screens/Business';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Business" component={Business} />
        <Tab.Screen name="Calendar" component={HomeScreen} />
        <Tab.Screen name="Cuota" component={HomeScreen} />
        <Tab.Screen name="Adm" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
