import { Stack } from "expo-router";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import {
  Urbanist_700Bold,
  Urbanist_400Regular,
  useFonts,
  Urbanist_600SemiBold,
  Urbanist_500Medium,
  Urbanist_300Light,
} from "@expo-google-fonts/urbanist";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { SafeAreaView } from "react-native";
import { colors } from "../styles/colors";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [loaded, error] = useFonts({
    Urbanist_700Bold,
    Urbanist_400Regular,
    Urbanist_600SemiBold,
    Urbanist_500Medium,
    Urbanist_300Light,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <GluestackUIProvider mode="light">
        <Stack screenOptions={{ headerShown: false }} />
      </GluestackUIProvider>
    </SafeAreaView>
  );
}
