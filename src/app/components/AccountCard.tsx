import { colors } from "@/src/styles/colors";
import { urbanist } from "@/src/styles/typography";
import { Image } from "expo-image";
import React from "react";
import { Text, View } from "react-native";

const zooImage = require("@/assets/images/template-zoo-image.png");
const locationOrangeIcon = require("@/assets/images/location-orange-icon.png");
const callingOrangeIcon = require("@/assets/images/calling-orange-icon.png");
const messageOrangeIcon = require("@/assets/images/message-orange-icon.png");
const discoveryOrangeIcon = require("@/assets/images/discovery-orange-icon.png");

export default function AccountCard() {
  return (
    <View className="flex flex-row gap-4 p-4 bg-[#FAFAFA] rounded-md items-start justify-center">
      <Image source={zooImage} style={{ height: 80, width: 80 }} />

      <View className="flex flex-col gap-[14px]">
        <Text style={[urbanist.bold]} className="text-[18px]">
          Happy Tails Animal Rescue
        </Text>

        <View className="flex flex-col gap-[10px]">
          <View className="flex flex-row gap-2 items-center">
            <Image
              source={locationOrangeIcon}
              style={{ height: 16, width: 16 }}
            />
            <Text
              style={[urbanist.medium, { color: colors.gray_700 }]}
              className="text-[14px]"
            >
              123 Paws Street, NYC, NY 10001
            </Text>
          </View>
          <View className="flex flex-row gap-2 items-center">
            <Image
              source={callingOrangeIcon}
              style={{ height: 16, width: 16 }}
            />
            <Text
              style={[urbanist.medium, { color: colors.gray_700 }]}
              className="text-[14px]"
            >
              (555) 123-4567
            </Text>
          </View>
          <View className="flex flex-row gap-2 items-center">
            <Image
              source={messageOrangeIcon}
              style={{ height: 16, width: 16 }}
            />
            <Text
              style={[urbanist.medium, { color: colors.gray_700 }]}
              className="text-[14px]"
            >
              info@happytailsrescue.org
            </Text>
          </View>
          <View className="flex flex-row gap-2 items-center">
            <Image
              source={discoveryOrangeIcon}
              style={{ height: 16, width: 16 }}
            />
            <Text
              style={[urbanist.medium, { color: colors.gray_700 }]}
              className="text-[14px]"
            >
              happytailsrescue@domain.org
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
