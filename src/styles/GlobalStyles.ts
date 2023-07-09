import {DefaultTheme} from '@react-navigation/native';
import { theme } from './theme';

export const Main = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: theme.colors.dark_surface_mixed[100],
    text: theme.colors.white,
  }
};
