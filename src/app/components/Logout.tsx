import { colors } from "@/src/styles/colors";
import { urbanist } from "@/src/styles/typography";
import React from "react";
import { Text, View } from "react-native";
import LogoutIcon from "@/assets/images/logout_icon.svg";

export default function Logout() {
  return (
    <View className="flex flex-row items-center gap-5">
      <LogoutIcon width={24} height={24} />

      <Text
        style={[urbanist.bold, { color: colors.red }]}
        className="text-[18px]"
      >
        Sair
      </Text>
    </View>
  );
}
