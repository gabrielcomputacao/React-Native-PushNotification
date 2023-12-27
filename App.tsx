import { StatusBar } from "react-native";
import { NativeBaseProvider } from "native-base";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { Routes } from "./src/routes";

import { THEME } from "./src/theme";
import { Loading } from "./src/components/Loading";

import { CartContextProvider } from "./src/contexts/CartContext";
import { OSNotification, OneSignal } from "react-native-onesignal";
import { tagUserEmailCreate } from "./src/notifications/notificationsTags";
import { useEffect, useState } from "react";
import { Notification } from "./src/components/Notification";

OneSignal.initialize("1d935d9f-e08b-46c7-937e-19216a1488b8");
OneSignal.User.addEmail("gabrielcomputacao@outlook.com");

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  const [notification, setNotification] = useState<OSNotification>();

  tagUserEmailCreate("gabrielcomputacao@outlook.com");

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" />
      <CartContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </CartContextProvider>

      <Notification title="Mensagem de notificação" onClose={() => {}} />
    </NativeBaseProvider>
  );
}
