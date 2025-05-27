import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type HeaderProps = {
  showBack?: boolean;
};

export default function Header({ showBack = true }: HeaderProps) {
  return (
    <View
      style={{
        height: 72,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 24,
        paddingVertical: 12,
      }}
    >
      {showBack ? (
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={28} />
        </TouchableOpacity>
      ) : (
        <View style={{ width: 50 }} />
      )}
      <View style={{ width: 50 }} />
    </View>
  );
}
