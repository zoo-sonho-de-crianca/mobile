import { colors } from "@/src/styles/colors";
import { Tabs } from "expo-router";
import HomeIcon from "@/assets/images/home_icon.svg";
import HomeOrangeIcon from "@/assets/images/home-orange_icon.svg";
import { Ionicons } from "@expo/vector-icons";
import PlusOutlineIcon from "@/assets/images/plus-outline_icon.svg";
import PlusOutlineOrangeIcon from "@/assets/images/plus-outline-orange_icon.svg";
import SettingsIcon from "@/assets/images/settings_icon.svg";
import SettingsOrangeIcon from "@/assets/images/settings-orange_icon.svg";
import PawIcon from "@/assets/images/paw_icon.svg";
import PawOrangeIcon from "@/assets/images/paw-orange_icon.svg";
import EyedropperIcon from "@/assets/images/eyedropper_icon.svg";
import EyedropperOrangeIcon from "@/assets/images/eyedropper-orange_icon.svg";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: String(colors.orange),
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Início",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <HomeOrangeIcon height={24} width={24} />
            ) : (
              <HomeIcon height={24} width={24} />
            ),
        }}
      />

      <Tabs.Screen
        name="procedures"
        options={{
          title: "Procedimentos",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <EyedropperOrangeIcon height={24} width={24} />
            ) : (
              <EyedropperIcon height={24} width={24} />
            ),
        }}
      />

      <Tabs.Screen
        name="animals"
        options={{
          title: "Animais",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <PawOrangeIcon height={24} width={24} />
            ) : (
              <PawIcon height={24} width={24} />
            ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: "Configurações",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <SettingsOrangeIcon height={24} width={24} />
            ) : (
              <SettingsIcon height={24} width={24} />
            ),
        }}
      />
    </Tabs>
  );
}
