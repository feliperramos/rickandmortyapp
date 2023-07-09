import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { ThemeProvider } from 'styled-components/native';
import { ApolloProvider } from '@apollo/client';
import Routes from './src/Routes';
import { theme } from './src/styles/theme';
import { GraphQLClient } from './src/config/GraphQLClient';

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
      <ApolloProvider client={GraphQLClient}>
        <Routes />
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
