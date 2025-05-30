import { colors } from "@/src/styles/colors";
import { Tabs } from "expo-router";
import HomeIcon from "@/assets/images/home_icon.svg";
import HomeOrangeIcon from "@/assets/images/home-orange_icon.svg";
import { Ionicons } from "@expo/vector-icons";
import PlusOutlineIcon from "@/assets/images/plus-outline_icon.svg";
import PlusOutlineOrangeIcon from "@/assets/images/plus-outline-orange_icon.svg";
import SettingsIcon from "@/assets/images/settings_icon.svg";
import SettingsOrangeIcon from "@/assets/images/settings-orange_icon.svg";

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
        name="enrichment"
        options={{
          title: "Enriquecimento",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name="extension-puzzle-outline"
              color={focused ? color : String(colors.gray)}
              size={24}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="procedures"
        options={{
          title: "Procedimentos",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <PlusOutlineOrangeIcon height={24} width={24} />
            ) : (
              <PlusOutlineIcon height={24} width={24} />
            ),
        }}
      />

      <Tabs.Screen
        name="food"
        options={{
          title: "Alimentação",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name="fish-outline"
              color={focused ? color : String(colors.gray)}
              size={24}
            />
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
