/*import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';

import React from 'react';*/
import banner from './src/banner.png';
import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PaginaInicial from './src/componentes/PaginaInicial';
import CadastroImovel from './src/componentes/CadastroImovel';
import PaginaImovel from './src/componentes/PaginaImovel';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={banner} style={{ width: '100%', height: 150 }} resizeMode="cover" />
      <NavigationContainer>
        
        <Stack.Navigator
          initialRouteName="PaginaInicial"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="PaginaInicial" component={PaginaInicial} />
          <Stack.Screen name="CadastroImovel" component={CadastroImovel} />
          <Stack.Screen name="PaginaImovel" component={PaginaImovel} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100vh',
    width: '100%',
  },
  banner: {
    height: 100,
    backgroundColor: '#cbd5e1',
  },
});