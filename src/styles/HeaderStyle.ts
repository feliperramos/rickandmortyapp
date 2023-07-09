import { theme } from "./theme";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

export const Header: NativeStackNavigationOptions = {
  headerStyle: {
    backgroundColor: theme.colors.dark_surface_mixed[100],
  },
  headerTintColor: theme.colors.primary[300],
  headerShadowVisible: false,
  headerTitleAlign: "center",
}
