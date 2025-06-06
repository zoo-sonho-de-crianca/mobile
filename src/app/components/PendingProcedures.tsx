import React from "react";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import PendingProcedureBackground from "@/assets/images/pending-procedure-background.svg";
import HeaderSection from "./HeaderSection";
import { urbanist } from "@/src/styles/typography";
import { colors } from "@/src/styles/colors";

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
  },
  {
    id: "2",
    name: "Babu",
    species: "Espécie 2",
    procedure: "Vermifugação",
    date: new Date(),
  },
  {
    id: "3",
    name: "Bibo",
    species: "Espécie 3",
    procedure: "Cirurgia",
    date: new Date(),
  },
];

export default function PendingProcedures({ label }: { label: string }) {
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
          <View style={[styles.card, { position: "relative" }]}>
            <View
              style={{
                flexDirection: "column",
                position: "absolute",
                zIndex: 10,
                top: 0,
                left: 0,
                padding: 16,
              }}
            >
              <View>
                <Text
                  style={[urbanist.bold, { fontSize: 24, color: colors.white }]}
                >
                  {item.name}
                </Text>

                <Text
                  style={[
                    urbanist.regular,
                    { color: colors.white, fontSize: 12 },
                  ]}
                >
                  Espécie
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                position: "absolute",
                zIndex: 10,
                bottom: 0,
                left: 0,
                padding: 16,
                gap: 16,
              }}
            >
              <View>
                <Text
                  style={[
                    urbanist.light,
                    { fontSize: 12, color: colors.white },
                  ]}
                >
                  Procedimento
                </Text>

                <Text
                  style={[urbanist.bold, { color: colors.white, fontSize: 12 }]}
                >
                  {item.procedure}
                </Text>
              </View>

              <View
                style={{
                  height: "100%",
                  width: 1,
                  backgroundColor: colors.white,
                }}
              ></View>

              <View>
                <Text
                  style={[
                    urbanist.light,
                    { fontSize: 12, color: colors.white },
                  ]}
                >
                  Data
                </Text>

                <Text
                  style={[urbanist.bold, { color: colors.white, fontSize: 12 }]}
                >
                  {`${item.date.toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "2-digit",
                  })} • ${item.date
                    .toLocaleTimeString("pt-BR", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                    .replace(":", "h")}`}
                </Text>
              </View>
            </View>

            <PendingProcedureBackground style={{ height: 150, width: 332 }} />
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
