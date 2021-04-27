import * as React from 'react';
import {StyleSheet,Text,View} from 'react-native';

const AllBlogs = () => {
    return(
        <View style={styles.view}>
        <Text style={styles.text}>
          All Blogs
        </Text>
      </View>
    )
}

const styles = StyleSheet.create({
    view:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
 
    },
    text:{
      fontSize:20,
      textAlign:'center',
 
    }
  })
export default AllBlogs; 