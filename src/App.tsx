// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AllBlogs from './components/AllBlogs';
import SingleBlog from './components/SingleBlog'



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="SingleBlog" component={SingleBlog} options={{title:'Single Blog',headerStyle:{backgroundColor:'#FFFFF0'},headerTintColor:'black',headerTitleStyle:{fontWeight:'bold'}}} />
        <Stack.Screen name="AllBlogs" component={AllBlogs} options={{title:'All Blogs',headerStyle:{backgroundColor:'#00CED1'},headerTintColor:'black',headerTitleStyle:{fontWeight:'bold'}}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;