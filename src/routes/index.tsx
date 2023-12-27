import { useTheme } from "native-base";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";

import { AppRoutes } from "./app.routes";

/* configurando deep linking, quando clica em uma notificação o app abre a aplicação passando parametro ou não */

const linking = {
  prefixes: [
    "igniteshoesapp://",
    "com.rocketseat.igniteshoesapp://",
    "exp+igniteshoesapp://",
  ],
  config: {
    screens: {
      details: {
        path: "details/:productId",
        parse: {
          productId: (productId: string) => productId,
        },
      },
    },
  },
};

export function Routes() {
  const { colors } = useTheme();

  const theme = DefaultTheme;
  theme.colors.background = colors.gray[700];

  return (
    <NavigationContainer theme={theme} linking={linking}>
      <AppRoutes />
    </NavigationContainer>
  );
}
