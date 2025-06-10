import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import ArrowRightIcon from "@/assets/images/arrow-right_icon.svg";
import ProfileIcon from "@/assets/images/profile_icon.svg";
import { urbanist } from "@/src/styles/typography";
import InvitesIcon from "@/assets/images/invites_icon.svg";
import {
  Link,
  type ExternalPathString,
  type Href,
  type RelativePathString,
} from "expo-router";

export default function SettingsCard({
  variant,
  link,
}: {
  variant: string;
  link: Href;
}) {
  return (
    <>
      {variant === "profile" ? (
        <Link href={link} asChild>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 20 }}
            >
              <ProfileIcon width={24} height={24} />

              <Text style={[urbanist.bold, { fontSize: 18 }]}>Meu perfil</Text>
            </View>

            <ArrowRightIcon width={24} height={24} />
          </TouchableOpacity>
        </Link>
      ) : variant === "invites" ? (
        <Link href={link} asChild>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 20 }}
            >
              <InvitesIcon width={24} height={24} />

              <Text style={[urbanist.bold, { fontSize: 18 }]}>Convites</Text>
            </View>

            <ArrowRightIcon width={24} height={24} />
          </TouchableOpacity>
        </Link>
      ) : (
        <Text>Unknown</Text>
      )}
    </>
  );
}
