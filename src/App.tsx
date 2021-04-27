// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/Home';
import Details from './components/Details'



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Details" component={Details} options={{title:'Overview'}} />
        <Stack.Screen name="Home" component={HomeScreen} options={{title:'My HomePage'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;