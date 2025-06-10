import React from "react";
import { ScrollView, Text, View } from "react-native";
import Header from "../components/Header";
import { Image } from "expo-image";
import ArrowRightIcon from "@/assets/images/arrow-right_icon.svg";
import Logout from "../components/Logout";
import { colors } from "@/src/styles/colors";
import { urbanist } from "@/src/styles/typography";
import SettingsCard from "../components/SettingsCard";

const FabricioAvatar = require("@/assets/images/fabricio_avatar_profile.png");

export default function Settings() {
  return (
    <View style={{ backgroundColor: colors.white, flex: 1 }}>
      <Header label="Configurações" showBack={false} type="settings" />

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "space-between",
          paddingHorizontal: 24,
          paddingBottom: 32, // para evitar que o botão fique grudado em borda inferior
        }}
      >
        {/* Conteúdo principal */}
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                gap: 16,
                alignItems: "center",
              }}
            >
              <Image
                source={FabricioAvatar}
                style={{ width: 60, height: 60 }}
              />

              <View style={{ flexDirection: "column", gap: 4 }}>
                <Text style={[urbanist.bold, { fontSize: 18 }]}>
                  Fabrício Liotti
                </Text>
                <Text
                  style={[
                    urbanist.medium,
                    { fontSize: 14, color: colors.gray_700 },
                  ]}
                >
                  fabricio@gmail.com
                </Text>
              </View>
            </View>

            <ArrowRightIcon />
          </View>

          <View
            style={{
              height: 1,
              width: "100%",
              marginVertical: 24,
              backgroundColor: "#EEEEEE",
            }}
          />

          <View className="flex flex-col gap-[32px]">
            <SettingsCard variant="profile" link="/profile" />
            <SettingsCard variant="invites" link="/invites" />
          </View>
        </View>

        {/* Botão fixado ao fim do conteúdo */}
        <Logout />
      </ScrollView>
    </View>
  );
}
