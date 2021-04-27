import { NavigationHelpersContext } from '@react-navigation/core';
import * as React from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

interface HomeScreen {
    navigation:{
        navigate(value:string,{}):string
    };
    route:{params:{itemId:number,otherParam:string}}
}

const HomeScreen = (props:HomeScreen) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.detailsText}>This is my home screen</Text>
        <Button title="Details" onPress={()=>props.navigation.navigate('Details',{itemId:86,otherParam:'sometext'})}/>
      </View>
    );
  }

const styles = StyleSheet.create({
    detailsText:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})

  export default HomeScreen; 