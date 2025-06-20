import React from "react";
import { ScrollView, Text, View } from "react-native";
import Header from "../components/Header";
import ComponentButton from "../components/ComponentButton";
import { colors } from "@/src/styles/colors";

export default function Animals() {
  return (
    <>
      <Header label="Animais" type="search" />

      <ScrollView>
        <View className="px-6">
          <ComponentButton type="outline" label="Adicionar" textColor={colors.orange} />
        </View>
      </ScrollView>
    </>
  )
}
