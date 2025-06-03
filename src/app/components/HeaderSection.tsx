import React from "react";
import { Text } from "react-native";
import { View } from "react-native";
import ArrowRightOrangeIcon from "@/assets/images/arrow-right-orange_icon.svg";
import { urbanist } from "@/src/styles/typography";
import { colors } from "@/src/styles/colors";

export default function HeaderSection({ label }: { label: string }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 24,
      }}
    >
      <Text style={[urbanist.bold, { fontSize: 20 }]}>{label}</Text>

      <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
        <Text style={[urbanist.bold, { fontSize: 16, color: colors.orange }]}>
          Ver tudo
        </Text>

        <ArrowRightOrangeIcon style={{ height: 24, width: 24 }} />
      </View>
    </View>
  );
}
