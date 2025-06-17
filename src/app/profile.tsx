import { Stack } from "expo-router";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import Header from "./components/Header";
import { urbanist } from "../styles/typography";
import { colors } from "../styles/colors";
import SquareIcon from "../../assets/images/square_icon.svg";
import { Image } from "expo-image";
import { VStack } from "@/components/ui/vstack";
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
import { ChevronDownIcon } from "@/components/ui/icon";
import ComponentButton from "./components/ComponentButton";

const FabricioAvatar = require("@/assets/images/FabricioAvatar.png");

export default function Profile() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "Meu perfil",
        }}
      />

      <View style={{ flex: 1, backgroundColor: colors.white }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <Header />

          <View className="px-6 gap-[32px] flex flex-col flex-grow">
            <View className="flex flex-col gap-2">
              <Text style={[urbanist.bold]} className="text-[32px]">
                Complete seu perfil
              </Text>
              <Text
                style={[urbanist.regular, { color: colors.gray_700 }]}
                className="text-[18px]"
              >
                Estamos quase lá! Preencha seus dados pessoais para criar um
                perfil.
              </Text>
            </View>

            <View className="w-full flex flex-col gap-[28px] flex-grow">
              <View
                className="relative mx-auto"
                style={{ alignSelf: "flex-start" }}
              >
                <Image
                  source={FabricioAvatar}
                  style={{ height: 120, width: 120 }}
                />
                <View className="absolute bottom-0 right-0">
                  <SquareIcon width={30} height={30} />
                </View>
              </View>

              <View className="flex flex-col gap-[28px]">
                <VStack space="xs">
                  <Text style={urbanist.semibold} className="text-[18px]">
                    Nome completo
                  </Text>
                  <Input className="h-[58px] rounded-[10px] bg-[#FAFAFA] border-0">
                    <InputField
                      type="text"
                      placeholder="Nome completo"
                      style={urbanist.regular}
                      className="text-[18px] pl-3"
                    />
                  </Input>
                </VStack>

                <VStack space="xs">
                  <Text style={urbanist.semibold} className="text-[18px]">
                    Número de celular
                  </Text>
                  <Input className="h-[58px] rounded-[10px] bg-[#FAFAFA] border-0">
                    <InputField
                      type="text"
                      placeholder="Número de celular"
                      style={urbanist.regular}
                      className="text-[18px] pl-3"
                    />
                  </Input>
                </VStack>

                <VStack space="xs">
                  <Text style={urbanist.semibold} className="text-[18px]">
                    Gênero
                  </Text>

                  <Select>
                    <SelectTrigger variant="outline" size="md" className="h-[58px] rounded-[10px] bg-[#FAFAFA] border-0 justify-between">
                      <SelectInput className="text-[18px]" style={urbanist.regular} placeholder="Selecione uma opção" />
                      <SelectIcon className="mr-3" as={ChevronDownIcon} />
                    </SelectTrigger>

                    <SelectPortal>
                      <SelectBackdrop />
                      <SelectContent>
                        <SelectDragIndicatorWrapper>
                          <SelectDragIndicator />
                        </SelectDragIndicatorWrapper>
                        <SelectItem label="Masculino" value="male" isDisabled={true} />
                        <SelectItem label="Feminino" value="female" />
                      </SelectContent>
                    </SelectPortal>
                  </Select>
                </VStack>
              </View>
            </View>
          </View>
        </ScrollView>

        <View className="px-6 pt-6 pb-9 border-t border-[#F5F5F5]">
          <ComponentButton
            label="Concluir"
            textColor="white"
            type="orange"
            link="/(tabs)/settings"
          />
        </View>
      </View>
    </>
  );
}

