import { Link, type Href, type RelativePathString } from "expo-router";
import React from "react";
import { Text, type ColorValue } from "react-native";
import { Button } from "@/components/ui/button";
import { Image } from "expo-image";
import GoogleIcon from "@/assets/images/google_icon.svg";
import AppleIcon from "@/assets/images/apple_icon.svg";

export default function ComponentButton({
  label,
  type = "lightOrange",
  textColor,
  link,
  ...props
}: {
  label: string;
  type: "orange" | "lightOrange" | "google" | "apple";
  textColor: ColorValue;
  link: Href;
} & React.ComponentProps<typeof Button>) {
  return (
    <Link href={link} asChild>
      <Button type={type} {...props}>
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

        {type === "apple" && <AppleIcon width={24} height={24} />}

        {type === "google" && <GoogleIcon width={24} height={24} />}
      </Button>
    </Link>
  );
}
