import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import ListProducts from './src/screens/ListProducts';
import CreateProduct from './src/screens/CreateProduct';
import ShowProducts from './src/screens/ShowProducts';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="List" component={ListProducts} />
    <Stack.Screen name="Products" component={ShowProducts} />
    <Stack.Screen name="Create" component={CreateProduct} />    
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
