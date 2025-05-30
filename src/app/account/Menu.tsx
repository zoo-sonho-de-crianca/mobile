import React from "react";
import { Text } from "react-native";
import AccountCard from "../components/AccountCard";
import { View } from "react-native";
import { urbanist } from "@/src/styles/typography";
import { Button } from "@/components/ui/button";
import PlusIcon from "@/assets/images/plus_icon.svg";
import Logout from "@/assets/images/logout_icon.svg";
import { colors } from "@/src/styles/colors";

export default function UserProfile() {
  return (
    <View className="flex-1 p-6 flex flex-col">
      <View className="flex flex-row justify-between items-center">
        <Text style={[urbanist.bold]} className="text-3xl">
          Contas
        </Text>

        <Button>
          <PlusIcon height={36} width={36} />
        </Button>
      </View>

      <View className="flex-1">
        <AccountCard />
      </View>

      <View className="flex flex-row items-center gap-5">
        <Logout width={24} height={24} />

        <Text
          style={[urbanist.bold, { color: colors.red }]}
          className="text-[18px]"
        >
          Sair
        </Text>
      </View>
    </View>
  );
}
