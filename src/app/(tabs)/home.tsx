import React from "react";
import { Text, View } from "react-native";
import Header from "../components/Header";

export default function Home() {
  return (
    <View>
      <Header type="notify" showBack={false} />
    </View>
  );
}
