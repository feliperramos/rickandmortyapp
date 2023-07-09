import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Main } from './styles/GlobalStyles';

import { Home, CharacterScreen } from './pages';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer theme={Main}>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen options={() => ({ headerShown: false })} name="Home" component={Home} />
        <Stack.Screen name="CharacterScreen" component={CharacterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
