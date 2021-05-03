import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Image } from 'react-native';
import {View,Text, StyleSheet,Button, Alert} from 'react-native';
import { Card } from 'react-native-elements';
import { ListItem } from 'react-native-elements/dist/list/ListItem';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import { Icon } from 'react-native-vector-icons/Icon';
import { json } from '../utils/api';

interface AllBlogs {
    navigation:{
        navigate(a:string,{}?):string|[]; 
        push(value:string,{}):any;
        goBack():any;
        
    };
    route:{params:{id:number}}
}

const users = [
  {
     name: 'brynn',
     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  }
 ];

const SingleBlog:React.FC<AllBlogs> = (props:AllBlogs) =>{
  const[single,setSingle] = useState([{
    "id": "",
    "name": "",
    "username": "",
    "email": "",
    "address": {
      "street": "",
      "suite": "",
      "city": "",
      "zipcode": "",
      "geo": {
        "lat": "",
        "lng": ""
      }
    },
    "phone": "",
    "website": "",
    "company": {
      "name": "",
      "catchPhrase": "",
      "bs": ""
    }}])
 

  const singleUser = async () =>{
    let num = props.route.params.id
    console.log(num)
    let data = await json(`https://jsonplaceholder.typicode.com/users/${num}`)
    setSingle([data])
    
  }


  useEffect(()=>{
    singleUser()
  },[])

 const card =  ()=>{
    return single.map(a =>{
      return(
        <Card>
          <Card.Title>
            {a.name}
          </Card.Title>
          <Card.Divider/>
          <Card.Image source={{
          uri: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
        }}>
           
        </Card.Image>
        <Text style={{marginBottom:10}}>
              {a.email}
        </Text>
        <Text style={{marginBottom:10}}>
              {a.address.street}
        </Text>
        <Text style={{marginBottom:10}}>
              {a.id}
        </Text>
        <Button title={a.company.name} onPress={()=>props.navigation.navigate("SingleBlog",{id:a.id})}/>
        </Card>
      )
    })
  }



  
    
  
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
            <Text style={styles.detailsText}>Single Blogs</Text>
            {card()}
            <Button title="All Blogs" onPress={()=>props.navigation.navigate('AllBlogs')} />
            <Button title="Alert button" onPress={()=>Alert.alert("this is my alert button","It worked")} />
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
    

export default SingleBlog; 