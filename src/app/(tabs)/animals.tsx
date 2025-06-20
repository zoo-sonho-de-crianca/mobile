import React from "react";
import { Dimensions, ScrollView, Text, View } from "react-native";
import Header from "../components/Header";
import ComponentButton from "../components/ComponentButton";
import { colors } from "@/src/styles/colors";
import { Image } from "expo-image";
import { urbanist } from "@/src/styles/typography";
import { Ionicons } from "@expo/vector-icons";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

const animalAvatar01 = require("@/assets/images/animal-01.jpg");

const windowWidth = Dimensions.get("window").width
const animalCardDimensions = (windowWidth - 56) / 2

export default function Animals() {
  return (
    <>
      <Header label="Animais" type="search" />

      <View className="px-6 flex flex-col gap-4">
        <View>
          <ComponentButton type="outline" label="Adicionar" textColor={colors.orange} />
        </View>

        <ScrollView>
          <View className="flex flex-row flex-wrap gap-4">
            <View className="flex flex-col gap-2">
              <Image source={animalAvatar01} style={{ height: animalCardDimensions, width: animalCardDimensions, borderRadius: 6 }} />

              <View className="flex flex-col">
                <View className="flex flex-row items-center gap-1">
                  <Text style={[urbanist.semibold]} className="text-lg leading-none">Teco</Text>
                  <Text style={[urbanist.medium]} className="text-xs leading-none">(Espécie)</Text>
                </View>

                <View className="flex flex-row items-center gap-1">
                  <Ionicons name="location-outline" size={16} />

                  <Text style={[urbanist.regular]} className="text-[10px]">Recinto #15</Text>
                </View>
              </View>
            </View>

            <View className="flex flex-col gap-2">
              <Image source={animalAvatar01} style={{ height: animalCardDimensions, width: animalCardDimensions, borderRadius: 6 }} />

              <View className="flex flex-col">
                <View className="flex flex-row items-center gap-1">
                  <Text style={[urbanist.semibold]} className="text-lg leading-none">Teco</Text>
                  <Text style={[urbanist.medium]} className="text-xs leading-none">(Espécie)</Text>
                </View>

                <View className="flex flex-row items-center gap-1">
                  <Ionicons name="location-outline" size={16} />

                  <Text style={[urbanist.regular]} className="text-[10px]">Recinto #15</Text>
                </View>
              </View>
            </View>

            <View className="flex flex-col gap-2">
              <Image source={animalAvatar01} style={{ height: animalCardDimensions, width: animalCardDimensions, borderRadius: 6 }} />

              <View className="flex flex-col">
                <View className="flex flex-row items-center gap-1">
                  <Text style={[urbanist.semibold]} className="text-lg leading-none">Teco</Text>
                  <Text style={[urbanist.medium]} className="text-xs leading-none">(Espécie)</Text>
                </View>

                <View className="flex flex-row items-center gap-1">
                  <Ionicons name="location-outline" size={16} />

                  <Text style={[urbanist.regular]} className="text-[10px]">Recinto #15</Text>
                </View>
              </View>
            </View>

            <View className="flex flex-col gap-2">
              <Image source={animalAvatar01} style={{ height: animalCardDimensions, width: animalCardDimensions, borderRadius: 6 }} />

              <View className="flex flex-col">
                <View className="flex flex-row items-center gap-1">
                  <Text style={[urbanist.semibold]} className="text-lg leading-none">Teco</Text>
                  <Text style={[urbanist.medium]} className="text-xs leading-none">(Espécie)</Text>
                </View>

                <View className="flex flex-row items-center gap-1">
                  <Ionicons name="location-outline" size={16} />

                  <Text style={[urbanist.regular]} className="text-[10px]">Recinto #15</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  )
}
