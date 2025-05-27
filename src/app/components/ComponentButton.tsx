import { Link, type Href, type RelativePathString } from "expo-router";
import React from "react";
import { Text, type ColorValue } from "react-native";
import { Button } from "@/components/ui/button";
import { Image } from "expo-image";

const googleIcon = require("@/assets/images/google-icon.png");
const appleIcon = require("@/assets/images/apple-icon.png");

export default function ComponentButton({
  label,
  type = "lightOrange",
  textColor,
  link,
}: {
  label: string;
  type: "orange" | "lightOrange" | "google" | "apple";
  textColor: ColorValue;
  link: Href;
}) {
  return (
    <Link href={link} asChild>
      <Button type={type}>
        <Text
          style={{
            color: textColor,
            fontWeight: "bold",
            width: "100%",
            textAlign: "center",
          }}
        >
          {label}
        </Text>

        {type === "apple" && (
          <Image
            source={appleIcon}
            style={{ height: 24, width: 24, position: "absolute", left: 16 }}
          />
        )}

        {type === "google" && (
          <Image
            source={googleIcon}
            style={{ height: 24, width: 24, position: "absolute", left: 16 }}
          />
        )}
      </Button>
    </Link>
  );
}
