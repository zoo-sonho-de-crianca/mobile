import React from "react";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import PendingProcedureBackground from "@/assets/images/pending-procedure-background.svg";
import HeaderSection from "./HeaderSection";
import { urbanist } from "@/src/styles/typography";
import { colors } from "@/src/styles/colors";
import { Image } from "expo-image";
import PinOrangeIcon from "@/assets/images/pin-orange_icon.svg";

const AvatarImage01 = require("@/assets/images/animal-01.jpg");
const AvatarImage02 = require("@/assets/images/animal-02.jpg");
const AvatarImage03 = require("@/assets/images/animal-03.jpg");
const AvatarImage04 = require("@/assets/images/animal-04.jpg");
const AvatarImage05 = require("@/assets/images/animal-05.jpg");

const { width } = Dimensions.get("window");
const CARD_WIDTH = width * 0.8; // 80% da tela
const CARD_SPACING = 16;

const data = [
  {
    id: "1",
    name: "Sasa",
    species: "Espécie 1",
    procedure: "Vacina",
    date: new Date(),
    image: AvatarImage01,
    enclosure: "Recinto #05",
  },
  {
    id: "2",
    name: "Babu",
    species: "Espécie 2",
    procedure: "Vermifugação",
    date: new Date(),
    image: AvatarImage02,
    enclosure: "Recinto #09",
  },
  {
    id: "3",
    name: "Bibo",
    species: "Espécie 3",
    procedure: "Cirurgia",
    date: new Date(),
    image: AvatarImage03,
    enclosure: "Recinto #08",
  },
];

export default function NeedAttention({ label }: { label: string }) {
  return (
    <View
      style={{
        alignContent: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 16,
      }}
    >
      <HeaderSection label={label} />

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH + CARD_SPACING}
        decelerationRate="fast"
        contentContainerStyle={{ paddingHorizontal: 24 }}
        ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
        renderItem={({ item }) => (
          <View style={{ gap: 4 }}>
            <Image
              source={item.image}
              style={{ height: 140, width: 140, borderRadius: 6 }}
            />

            <View style={{ flexDirection: "column", gap: 4 }}>
              <Text style={[urbanist.semibold, { fontSize: 16 }]}>
                {item.name}
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                <PinOrangeIcon style={{ height: 12, width: 12 }} />

                <Text style={[urbanist.regular, { fontSize: 10 }]}>
                  {item.enclosure}
                </Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});
