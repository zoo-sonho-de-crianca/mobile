import { Link } from "expo-router";
import React from "react";
import { Text, type ColorValue } from "react-native";
import { Button } from "@/components/ui/button";

export default function ComponentButton({
  label,
  type,
  textColor,
}: {
  label: string;
  type: "orange" | "lightOrange" | undefined;
  textColor: ColorValue;
}) {
  return (
    <Link href="/screens/Auth/SignUpScreen">
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
      </Button>
    </Link>
  );
}
