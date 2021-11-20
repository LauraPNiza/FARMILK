import { StatusBar } from 'expo-status-bar';
import React from 'react';
import HomePage from './pages/HomePage';
import { StyleSheet, Text, View, Button, SafeAreaView, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Coletas from './pages/Coletas';
import List from './pages/List';
import Notificacoes from './pages/Notificacoes';
import NovaColeta from './pages/NovaColeta';
import Rebanho from './pages/Rebanho';



const Stack = createNativeStackNavigator();

export default function App() {

  return (
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="HomePage"
            component={HomePage}
          />  

           <Stack.Screen
            name="NovaColeta"
            component={NovaColeta}
          />  

           <Stack.Screen
            name="Rebanho"
            component={Rebanho}
          />  

           <Stack.Screen
            name="Coletas"
            component={Coletas}
          />  
           
           <Stack.Screen
            name="Notificacoes"
            component={Notificacoes}
          />  

        </Stack.Navigator>
      </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
