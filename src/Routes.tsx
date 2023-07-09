import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Main } from './styles/GlobalStyles';
import { Header } from './styles/HeaderStyle';

import { Home, SearchScreen } from './pages';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer theme={Main}>
      <Stack.Navigator screenOptions={Header} initialRouteName='Home'>
        <Stack.Screen options={() => ({ headerShown: false })} name="Home" component={Home} />
        <Stack.Screen options={() => ({ title: 'Busca' })} name="SearchScreen" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
