import React from "react";
import { Text } from "react-native";
import AccountCard from "../components/AccountCard";
import { View } from "react-native";
import { urbanist } from "@/src/styles/typography";
import { Button } from "@/components/ui/button";
import { Image } from "expo-image";
import Feather from "@expo/vector-icons/Feather";

export default function UserProfile() {
  return (
    <View className="p-6 flex flex-col">
      <View className="flex flex-row justify-between items-center">
        <Text style={[urbanist.bold]} className="text-3xl">
          Contas
        </Text>

        <Button>
          <Feather name="plus-square" size={24} color="black" />
        </Button>
      </View>
      <AccountCard />
    </View>
  );
}
