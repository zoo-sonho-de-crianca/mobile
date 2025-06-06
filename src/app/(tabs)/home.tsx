import React from "react";
import { ScrollView, Text, View } from "react-native";
import Header from "../components/Header";
import AnimalsList from "../components/AnimalsList";
import PendingProcedures from "../components/PendingProcedures";
import ProceduresHistory from "../components/ProceduresHistory";
import { colors } from "@/src/styles/colors";
import NeedAttention from "../components/NeedAttention";

export default function Home() {
  return (
    <View style={{ backgroundColor: colors.white, flex: 1 }}>
      <Header type="notify" showBack={false} />

      <ScrollView>
        <View style={{ gap: 24 }}>
          <PendingProcedures label="Manejos pendentes" />

          <ProceduresHistory label="Histórico de manejos" />

          <NeedAttention label="Precisam de atenção" />

          <AnimalsList label="Animais" />
        </View>
      </ScrollView>
    </View>
  );
}
