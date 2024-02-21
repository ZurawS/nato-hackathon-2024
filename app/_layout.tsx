import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { SelectProvider } from "@mobile-reality/react-native-select-pro";
import DataContext from "./components/Context/DataContext";
import AppLoadingIndicator from "./components/AppLoadingIndicator/AppLoadingIndicator";
import { useTranslation } from "react-i18next";
import { CommonDrug } from "@/assets/models/drug.model";
import { infoToSend } from "@/assets/models/infoTosend";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const queryClient = new QueryClient();
  const [currentCountry, setCurrentCountry] = useState<string>();
  const [sourceCountry, setSourceCountry] = useState<string>();
  const [appLoading, setAppLoading] = useState<boolean>(false);
  const [drugsToSend, setDrugsToSend] = useState<CommonDrug[]>([]);
  const [infoToSend, setInfoToSend] = useState<infoToSend>({
    name: "",
    id: "",
    additionalInfo: "",
    drugsIds: [],
  });
  const { t } = useTranslation();

  return (
    <DataContext.Provider
      value={{
        currentCountry,
        setCurrentCountry,
        sourceCountry,
        setSourceCountry,
        appLoading,
        setAppLoading,
        drugsToSend,
        setDrugsToSend,
        setInfoToSend,
        infoToSend
      }}
    >
      <QueryClientProvider client={queryClient}>
        <SelectProvider>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="modal" options={{ presentation: "modal", title: t("modal.title") }} />
          </Stack>
          {appLoading && <AppLoadingIndicator />}
        </SelectProvider>
      </QueryClientProvider>
    </DataContext.Provider>
  );
}
