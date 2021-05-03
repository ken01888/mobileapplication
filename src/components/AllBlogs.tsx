import { NavigationHelpersContext } from '@react-navigation/core';
import * as React from 'react';
import { useState } from 'react';
import { Alert } from 'react-native';
import { View, Text, StyleSheet,Button } from 'react-native';
import {Card,ListItem,Icon} from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import {json} from '../utils/api';

interface AllBlogsScreen {
    navigation:{
        navigate(value:string,{}):string
    };
    route:{params:{itemId:number,otherParam:string,name:string}}
}

const AllBlogs = (props:AllBlogsScreen) => {
  const [blogs,setBlogs] = useState([{
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

  const users = async () => {
    let user = await json(`https://jsonplaceholder.typicode.com/users`);
    setBlogs(user)
  }

  React.useEffect(()=>{
    users()
  },[])

  let renderBlogs = () => {
   return blogs.map(a =>{
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
      <ScrollView>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.detailsText}>This is my AllBlogs screen</Text>
        {renderBlogs()}
      </View>
      </ScrollView>
     
    )
  }

const styles = StyleSheet.create({
    detailsText:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})

  export default AllBlogs;