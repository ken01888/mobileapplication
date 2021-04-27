import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import {View,Text, StyleSheet,Button} from 'react-native';

interface Details {
    navigation:{
        navigate(a:string):string;
        
    };
    route:{params:{itemId:number,otherParam:string}}
}
const Details:React.FC<Details> = (props:Details) =>{
    const {itemId,otherParam} = props.route.params; 
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.detailsText}>This is my Details Page</Text>
            <Text style={styles.detailsText}>{itemId}</Text>
            <Text style={styles.detailsText}>{otherParam}</Text>

            <Button title="Go to Details Page" onPress={()=>props.navigation.push('Details',{itemId:Math.floor(Math.random()*100)})} />
            <Button title="Home" onPress={()=>props.navigation.navigate('Home')} />
            <Button title="Home" onPress={()=>props.navigation.navigate('Home')} />


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
    

export default Details; 