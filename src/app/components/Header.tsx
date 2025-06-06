import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import PawFilledIcon from "@/assets/images/paw-filled_icon.svg";
import NotificationIcon from "@/assets/images/notification_icon.svg";
import EllipseIcon from "@/assets/images/ellipse_icon.svg";
import { urbanist } from "@/src/styles/typography";
import PawFilledOrangeIcon from "@/assets/images/paw-filled-orange_icon.svg";
import VerticalEllipsis from "@/assets/images/vertical-ellipsis_icon.svg";

type HeaderProps = {
  showBack?: boolean;
  type?: string;
  label?: string | undefined;
};

export default function Header({ showBack = true, type, label }: HeaderProps) {
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
      ) : undefined}

      {type === "notify" ? (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <PawFilledIcon height={28} width={28} />

          <Text style={[urbanist.bold, { fontSize: 24 }]}>Zoo</Text>

          <View
            style={{
              borderWidth: 1,
              borderColor: "#EEEEEE",
              padding: 10,
              borderRadius: "100%",
              position: "relative",
            }}
          >
            <NotificationIcon height={28} width={28} />
            <EllipseIcon
              height={8}
              width={8}
              style={{ position: "absolute", top: 12, right: 12 }}
            />
          </View>
        </View>
      ) : undefined}

      {type === "settings" ? (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            flex: 1,
          }}
        >
          <PawFilledOrangeIcon width={28} height={28} />

          <Text style={[urbanist.bold, { fontSize: 24 }]}>{label}</Text>

          <VerticalEllipsis />
        </View>
      ) : undefined}
    </View>
  );
}
