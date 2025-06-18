import { Link, type Href } from "expo-router";
import React from "react";
import { Text, View, type ColorValue } from "react-native";
import { Button } from "@/components/ui/button";
import GoogleIcon from "@/assets/images/google_icon.svg";
import AppleIcon from "@/assets/images/apple_icon.svg";
import { colors } from "@/src/styles/colors";
import { urbanist } from "@/src/styles/typography";
import SendIcon from '@/assets/images/send-01.svg'
import { Select, SelectBackdrop, SelectContent, SelectDragIndicator, SelectDragIndicatorWrapper, SelectIcon, SelectInput, SelectItem, SelectPortal, SelectTrigger } from "@/components/ui/select";
import InvitedChevronDownIcon from "@/assets/images/invited-chevron-down.svg";

export default function ComponentButton({
  label,
  type = "lightOrange",
  textColor,
  link,
  ...props
}: {
  label: string;
  type: "orange" | "lightOrange" | "google" | "apple" | "invite" | "invitationOwner" | "invitedMember";
  textColor: ColorValue;
  link?: Href;
} & React.ComponentProps<typeof Button>) {
  const renderIcon = () => {
    if (type === "apple") return <AppleIcon width={24} height={24} />;
    if (type === "google") return <GoogleIcon width={24} height={24} />;
    return null;
  };

  return (
    <>
      {link ? (

        <Link href={link} asChild>
          <Button
            className="relative flex-row items-center justify-center px-4 min-h-[52px]"
            type={type}
            {...props}
          >
            {(type === "apple" || type === "google") && (
              <View className="absolute left-4">{renderIcon()}</View>
            )}

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
      ) : (
        <>
          {type === "invite" ? (
            <Button type={type}>
              <Text style={[urbanist.semibold]} className="text-xs">{label}</Text>

              <SendIcon />
            </Button>
          ) : undefined}

          {type === "invitationOwner" ? (
            <Button type={type}>
              <Text style={[urbanist.semibold]} className="text-xs">{label}</Text>
            </Button>
          ) : undefined}

          {type === "invitedMember" ? (
            <Button type={type}>
              <Select className="w-fit">
                <SelectTrigger
                  variant="outline"
                  size="md"
                  className="gap-1 min-h-10 rounded-[10px] border-0 justify-between flex-wrap flex-1"
                  style={{ flexShrink: 1 }}
                >
                  <SelectInput
                    value="Veterinário"
                    className="text-xs p-0"
                    style={[urbanist.semibold, { flexWrap: 'wrap', flexShrink: 1 }]}
                  />
                  <SelectIcon
                    as={InvitedChevronDownIcon}
                    height={14}
                    width={14}
                  />
                </SelectTrigger>

                <SelectPortal>
                  <SelectBackdrop />
                  <SelectContent>
                    <SelectDragIndicatorWrapper>
                      <SelectDragIndicator />
                    </SelectDragIndicatorWrapper>
                    <SelectItem
                      label="Educador ambiental"
                      value="environment-educator"
                    />
                    <SelectItem
                      label="Veterinária"
                      value="veterinary"
                    />
                    <SelectItem
                      label="Biólogo"
                      value="biologist"
                    />
                    <SelectItem
                      label="Auxiliar de veterinária"
                      value="veterinary-assistant"
                    />
                    <SelectItem
                      label="Tratador"
                      value="animal-handler"
                    />
                    <SelectItem
                      label="Auxiliar geral"
                      value="general-assistant"
                    />
                  </SelectContent>
                </SelectPortal>
              </Select>
            </Button>
          ) : undefined}
        </>
      )}
    </>
  );
}
