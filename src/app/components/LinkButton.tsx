import { Link, type RelativePathString } from "expo-router";
import React from "react";
import { StyleSheet, Text } from "react-native";

export default function LinkButton({
  label,
  link,
  variant = "orange",
}: {
  label: string;
  link: RelativePathString;
  variant?: string;
}) {
  return (
    <Link
      style={[
        styles.link,
        variant === "lightOrange" ? styles.lightOrange : styles.orange,
      ]}
      href={link}
    >
      <Text style={{ fontSize: 16, fontWeight: "bold" }}>{label}</Text>
    </Link>
  );
}

const styles = StyleSheet.create({
  link: {
    padding: 16,
    borderRadius: 1000,
    width: "100%",
    textAlign: "center",
  },
  orange: {
    backgroundColor: "#FF8B3E",
    color: "white",
  },
  lightOrange: {
    backgroundColor: "#FDF6EE",
    color: "#FF8B3E",
  },
});
