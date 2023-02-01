import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Products from '../pages/Products';
import Details from '../pages/Details';
import Login from '../components/Login';

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{}}>
        <Stack.Screen
          name="LoginPage"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProductsPage"
          component={Products}
          options={{
            title: 'Dükkan',
            headerStyle: {backgroundColor: 'aqua'},
            headerTitleStyle: {color: 'red'},
          }}
        />
        <Stack.Screen
          name="DetailPage"
          component={Details}
          options={{
            title: 'Ürün Detayı',
            headerStyle: {backgroundColor: 'aqua'},
            headerTitleStyle: {color: 'red'},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
