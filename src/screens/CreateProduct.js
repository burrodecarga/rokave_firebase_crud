import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const CreateProduct = () => {
const initialStat={
  name:'',
  color:'',
  numero:0
}

const [state, setState] = useState(initialStat)

const handleChageText = (value, name) => {
  setState({...state, [name]:value})
}

const saveProduct = ()=>{

}

  return (
    <ScrollView>
      <View style={{ margin:30 }}>
      <Text>Agregar</Text>
      <View >
        <TextInput placeholder="name" onChangeText={(value)=>handleChageText(value, 'name')} value={state.name}/>
      </View>
      <View>
        <TextInput placeholder="color" onChangeText={(value)=>handleChageText(value, 'color')} value={state.color}/>
      </View>
    
      <View>
        <TextInput placeholder="numero" onChangeText={(value)=>handleChageText(value, 'numero')} value={state.numero}/>

      </View>
      </View>
    <TouchableOpacity onPress={saveProduct}>
      <Text>Agregar</Text>
    </TouchableOpacity>
    
    </ScrollView>
  )
}

export default CreateProduct

const styles = StyleSheet.create({})