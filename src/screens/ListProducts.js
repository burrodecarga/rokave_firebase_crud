import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ListProducts = (props) => {
  return (
    <ScrollView>
   <TouchableOpacity style={styles.button} onPress={()=>props.navigation.navigate('Create')}>
    <Text>ListProducts</Text>
    </TouchableOpacity>
    </ScrollView>
    
  )
}

export default ListProducts

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'white',
  },
  button:{
    backgroundColor:'cyan',
    borderColor:'black',
    borderWidth:1,
    height:35
  }
})