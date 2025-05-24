import { Stack } from "expo-router";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import {
  Urbanist_700Bold,
  Urbanist_400Regular,
  useFonts,
} from "@expo-google-fonts/urbanist";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [loaded, error] = useFonts({
    Urbanist_700Bold,
    Urbanist_400Regular,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return <GluestackUIProvider mode="light"><Stack screenOptions={{ headerShown: false }} /></GluestackUIProvider>;
}
