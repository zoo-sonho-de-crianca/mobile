import PagerView from "react-native-pager-view";
import { View, Text, StyleSheet, Button } from "react-native";
import { useRouter } from "expo-router";
import { markOnboardingSeen } from "@/src/utils/storage";

export default function OnboardingScreen() {
  const router = useRouter();

  const handleFinish = async () => {
    await markOnboardingSeen();
    router.replace("/login");
  };

  return (
    <PagerView style={styles.pagerView} initialPage={0}>
      <View key="1" style={styles.page}>
        <Text style={styles.text}>Bem-vindo ao app!</Text>
      </View>
      <View key="2" style={styles.page}>
        <Text style={styles.text}>Veja nossos recursos.</Text>
      </View>
      <View key="3" style={styles.page}>
        <Text style={styles.text}>Vamos começar?</Text>
        <Button title="Continuar" onPress={handleFinish} />
      </View>
    </PagerView>
  );
}

const styles = StyleSheet.create({
  pagerView: { flex: 1 },
  page: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 22, textAlign: "center" },
});
