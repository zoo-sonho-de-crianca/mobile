import { Link, type Href } from "expo-router";
import React from "react";
import { Text, View, type ColorValue } from "react-native";
import { Button } from "@/components/ui/button";
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
  const renderIcon = () => {
    if (type === "apple") return <AppleIcon width={24} height={24} />;
    if (type === "google") return <GoogleIcon width={24} height={24} />;
    return null;
  };

  return (
    <Link href={link} asChild>
      <Button
        className="relative flex-row items-center justify-center px-4 min-h-[52px]"
        type={type}
        {...props}
      >
        {/* Ícone fixo na esquerda */}
        {(type === "apple" || type === "google") && (
          <View className="absolute left-4">{renderIcon()}</View>
        )}

        {/* Texto centralizado */}
        <Text
          style={{
            color: textColor,
            fontWeight: "bold",
            textAlign: "center",
          }}
          className="flex-1 text-center"
        >
          {label}
        </Text>
      </Button>
    </Link>
  );
}
