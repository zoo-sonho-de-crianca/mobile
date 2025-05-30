import { Link } from "expo-router";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { colors } from "@/src/styles/colors";
import { urbanist } from "@/src/styles/typography";
import AvatarZoo from "@/assets/images/avatar-zoo.svg";
import LocationIcon from "@/assets/images/location_icon.svg";
import CallingIcon from "@/assets/images/calling_icon.svg";
import MessageIcon2 from "@/assets/images/message_icon2.svg";
import DiscoveryIcon from "@/assets/images/discovery_icon.svg";

export default function AccountCard() {
  return (
    <Link href="/home" asChild>
      <Pressable className="flex flex-row p-4 bg-[#FAFAFA] rounded-md">
        <View className="flex flex-row gap-4 items-start justify-center">
          <AvatarZoo width={80} height={80} />

          <View className="flex flex-col gap-[14px]">
            <Text style={[urbanist.bold]} className="text-[18px]">
              Happy Tails Animal Rescue
            </Text>

            <View className="flex flex-col gap-[10px]">
              <View className="flex flex-row gap-2 items-center">
                <LocationIcon width={16} height={16} />
                <Text
                  style={[urbanist.medium, { color: colors.gray_700 }]}
                  className="text-[14px]"
                >
                  123 Paws Street, NYC, NY 10001
                </Text>
              </View>
              <View className="flex flex-row gap-2 items-center">
                <CallingIcon width={16} height={16} />
                <Text
                  style={[urbanist.medium, { color: colors.gray_700 }]}
                  className="text-[14px]"
                >
                  (555) 123-4567
                </Text>
              </View>
              <View className="flex flex-row gap-2 items-center">
                <MessageIcon2 width={16} height={16} />
                <Text
                  style={[urbanist.medium, { color: colors.gray_700 }]}
                  className="text-[14px]"
                >
                  info@happytailsrescue.org
                </Text>
              </View>
              <View className="flex flex-row gap-2 items-center">
                <DiscoveryIcon width={16} height={16} />
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
      </Pressable>
    </Link>
  );
}
