import React from "react";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import AvatarImage01 from "@/assets/images/animal-01.jpg";
import AvatarImage02 from "@/assets/images/animal-02.jpg";
import AvatarImage03 from "@/assets/images/animal-03.jpg";
import AvatarImage04 from "@/assets/images/animal-04.jpg";
import AvatarImage05 from "@/assets/images/animal-05.jpg";
import { Image } from "expo-image";
import HeaderSection from "./HeaderSection";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width * 0.8; // 80% da tela
const CARD_SPACING = 16;

const data = [
  {
    id: "1",
    title: "Card 1",
    image: AvatarImage01,
    name: "Simba",
  },
  {
    id: "2",
    title: "Card 2",
    image: AvatarImage02,
    name: "Zeca",
  },
  {
    id: "3",
    title: "Card 3",
    image: AvatarImage03,
    name: "Lemu",
  },
  {
    id: "4",
    title: "Card 4",
    image: AvatarImage04,
    name: "Lilo",
  },
  {
    id: "5",
    title: "Card 5",
    image: AvatarImage05,
    name: "Bart",
  },
];

export default function ProceduresHistory() {
  return (
    <View style={{ flexDirection: "column", gap: 16 }}>
      <HeaderSection label="Animais" />
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
          <View style={[styles.card, { flexDirection: "column" }]}>
            <Image
              source={item.image}
              style={[styles.image, { height: 72, width: 72 }]}
            />

            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  image: {
    borderRadius: 1000,
    borderWidth: 1.5,
    borderColor: "#EEEEEE",
  },
});
