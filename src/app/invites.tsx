import { Stack } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function Convites() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "Convites",
        }}
      />

      <View className="flex-1">
        <Text>Invites</Text>
      </View>
    </>
  );
}
