import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { urbanist } from "../styles/typography";
import { Button } from "@/components/ui/button";
import { colors } from "../styles/colors";
import ComponentButton from "./components/ComponentButton";

const appImage = require("../../assets/images/app_logo.png");

export default function AuthScreen() {
  return (
    <View style={styles.container}>
      <Image source={appImage} style={styles.image} />

      <View style={styles.greeting}>
        <Text style={[urbanist.bold, { fontSize: 32, textAlign: "center" }]}>
          Bem-vindo (a)!
        </Text>
        <Text style={[urbanist.regular, { fontSize: 18, textAlign: "center" }]}>
          Faça login ou cadastre-se
        </Text>
      </View>

      <View style={styles.buttonsView}>
        <ComponentButton
          label="Entrar"
          type="orange"
          textColor={colors.white}
          link="./screens/Auth/SignInScreen"
        />

        <ComponentButton
          label="Cadastre-se"
          type="lightOrange"
          textColor={colors.orange}
          link="./screens/Auth/SignUpScreen"
        />
      </View>

      <View style={styles.policies}>
        <Link href="/screens/Policy/PrivacyPolicy">
          <Text style={urbanist.regular}>Política de Privacidade</Text>
        </Link>
        <Text style={styles.circle}>·</Text>
        <Link href="/screens/Policy/ServiceTerms">
          <Text style={urbanist.regular}>Termos de Serviço</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 36,
    width: "100%",
    justifyContent: "space-between",
  },
  image: {
    width: 80,
    height: 80,
  },
  greeting: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttonsView: {
    width: "100%",
    gap: 20,
  },
  policies: {
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    paddingHorizontal: 12,
  },
});
