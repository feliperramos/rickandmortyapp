import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import Routes from './src/Routes';
import { theme } from './src/styles/theme';
import { Main } from './src/styles/GlobalStyles';
import { ThemeProvider } from 'styled-components/native';

import { Text } from 'react-native'

function App(): JSX.Element {
  useEffect(() => {
    async function prepare() {
      try {
        // eslint-disable-next-line no-new
        new Promise(resolve => setTimeout(resolve, 6000));
      } catch (e) {
        console.warn(e);
      } finally {
        SplashScreen.hide();
      }
    }
    prepare();
  });

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
