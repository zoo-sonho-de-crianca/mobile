import { Stack } from "expo-router";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import Header from "./components/Header";
import { colors } from "../styles/colors";
import { Input, InputField } from "@/components/ui/input";
import {
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
} from "@/components/ui/select";
import { urbanist } from "../styles/typography";
import ChevronDownIcon from "@/assets/images/chevron-down_icon.svg";
import ComponentButton from "./components/ComponentButton";
import { Image } from "expo-image";

const inviteAvatar = require('@/assets/images/invite_avatar.png')
const inviteAvatar02 = require('@/assets/images/invite_avatar02.png')

export default function Convites() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "Convites",
        }}
      />

      <View
        style={{ backgroundColor: colors.white }}
        className="flex-1"
      >
        <Header label="Convidar" />

        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }} // 🚀 faz o conteúdo ocupar toda a tela
        >
          <View
            style={{ backgroundColor: colors.newGray }}
            className="flex-1 p-6 gap-6" // 🚀 garante altura mínima igual à tela
          >
            {/* 📌 Card de E-mail */}
            <View
              style={{ backgroundColor: colors.white }}
              className="rounded-2xl p-4 flex flex-col gap-4"
            >
              <Text
                className="text-xs"
                style={[urbanist.regular, { color: colors.black }]}
              >
                E-mail
              </Text>

              <View className="flex-row gap-4">
                <View
                  style={{
                    borderColor: colors.defaultBorder,
                    borderWidth: 1,
                  }}
                  className="flex-row flex-1 justify-between rounded-lg"
                >
                  <Input className="h-10 w-1/2 rounded-[10px] border-0">
                    <InputField
                      type="text"
                      placeholder="Digite um e-mail"
                      style={urbanist.semibold}
                      className="text-xs pl-[14px]"
                    />
                  </Input>

                  <Select className="w-fit pr-[14px]">
                    <SelectTrigger
                      variant="outline"
                      size="md"
                      className="gap-1 min-h-10 rounded-[10px] border-0 justify-between flex-wrap flex-1"
                      style={{ flexShrink: 1 }}
                    >
                      <SelectInput
                        placeholder="Função"
                        className="text-xs p-0"
                        style={[urbanist.semibold, { flexWrap: 'wrap', flexShrink: 1 }]}
                      />
                      <SelectIcon
                        as={ChevronDownIcon}
                        height={14}
                        width={14}
                      />
                    </SelectTrigger>

                    <SelectPortal>
                      <SelectBackdrop />
                      <SelectContent>
                        <SelectDragIndicatorWrapper>
                          <SelectDragIndicator />
                        </SelectDragIndicatorWrapper>
                        <SelectItem
                          label="Educador ambiental"
                          value="environment-educator"
                        />
                        <SelectItem
                          label="Veterinária"
                          value="veterinary"
                        />
                        <SelectItem
                          label="Biólogo"
                          value="biologist"
                        />
                        <SelectItem
                          label="Auxiliar de veterinária"
                          value="veterinary-assistant"
                        />
                        <SelectItem
                          label="Tratador"
                          value="animal-handler"
                        />
                        <SelectItem
                          label="Auxiliar geral"
                          value="general-assistant"
                        />
                      </SelectContent>
                    </SelectPortal>
                  </Select>
                </View>

                <ComponentButton
                  label="Convidar"
                  textColor={colors.white}
                  type="invite"
                />
              </View>
            </View>

            {/* 📌 Card Lista de Membros */}
            <View
              style={{ backgroundColor: colors.white }}
              className="rounded-2xl p-4 flex flex-col gap-6"
            >
              <Text style={[urbanist.regular]} className="text-xs">Lista de Membros</Text>

              <View className="flex flex-col gap-6">
                <View className="flex flex-row items-center justify-between">
                  <View className="flex flex-row items-center gap-3">
                    <Image source={inviteAvatar} style={{ height: 32, width: 32 }} />

                    <Text style={[urbanist.medium]} className="text-sm">Marvin McKinney</Text>
                  </View>

                  <ComponentButton textColor={colors.black} type="invitationOwner" label="Admin" />
                </View>

                <View className="flex flex-row items-center justify-between">
                  <View className="flex flex-row items-center gap-3">
                    <Image source={inviteAvatar02} style={{ height: 32, width: 32 }} />

                    <Text style={[urbanist.medium]} className="text-sm">Marvin McKinney</Text>
                  </View>

                  <ComponentButton textColor={colors.black} type="invitedMember" label="Admin" />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
}
