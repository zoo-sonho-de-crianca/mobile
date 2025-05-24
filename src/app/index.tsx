import { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { hasSeenOnboarding } from "../utils/storage";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const check = async () => {
      const seen = await hasSeenOnboarding();
      router.replace(seen ? "/home" : "/onboarding");
    };
    setTimeout(check, 1500);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Meu App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  logo: { fontSize: 32, fontWeight: "bold" },
});
