import React from "react";
import { Text } from "react-native";
import AccountCard from "../components/AccountCard";
import { View } from "react-native";
import { urbanist } from "@/src/styles/typography";
import { Button } from "@/components/ui/button";
import PlusOrangeIcon from "@/assets/images/plus-orange_icon.svg";
import { colors } from "@/src/styles/colors";
import Logout from "../components/Logout";

export default function UserProfile() {
  return (
    <View className="flex-1 p-6 flex flex-col gap-5">
      <View className="flex flex-row justify-between items-center">
        <Text style={[urbanist.bold]} className="text-3xl">
          Contas
        </Text>

        <PlusOrangeIcon height={36} width={36} />
      </View>

      <View className="flex-1">
        <AccountCard />
      </View>

      <Logout />
    </View>
  );
}
