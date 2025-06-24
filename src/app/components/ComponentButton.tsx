import { Link, useRouter, type Href } from "expo-router";
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
import { Ionicons } from "@expo/vector-icons";
import Logout from "./Logout";
import { signOut } from "@/auth/email-password";
import PlusOrangeIcon from "@/assets/images/plus-orange_icon.svg";

export default function ComponentButton({
  label,
  type = "lightOrange",
  textColor,
  link,
  showModal,
  setShowModal,
  ...props
}: {
  label?: string;
  type: "orange" | "lightOrange" | "google" | "apple" | "invite" | "invitationOwner" | "invitedMember" | "outline" | "logout" | "add" | "create";
  textColor?: ColorValue;
  link?: Href;
  showModal?: boolean;
  setShowModal?: (show: boolean) => void;
} & React.ComponentProps<typeof Button>) {
  const renderIcon = () => {
    if (type === "apple") return <AppleIcon width={24} height={24} />;
    if (type === "google") return <GoogleIcon width={24} height={24} />;
    return null;
  };

  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut();
      // Após sign out, garante que volta pro login, sem voltar pra tela de conta:
      router.replace("/auth/sign-in");
    } catch (error: any) {
      console.error(error);
      alert("Erro ao sair. Tente novamente.");
    }
  };

  const excludedTypes = [
    "invite",
    "invitationOwner",
    "invitedMember",
    "outline",
    "logout",
    "add",
    "create"
  ];

  return (
    <View className="cursor-pointer">
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
          {type === "invite" && (
            <Button type={type}>
              <Text style={[urbanist.semibold]} className="text-xs">{label}</Text>

              <SendIcon />
            </Button>
          )}

          {type === "invitationOwner" && (
            <Button type={type}>
              <Text style={[urbanist.semibold]} className="text-xs">{label}</Text>
            </Button>
          )}

          {type === "invitedMember" && (
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
          )}

          {type === "outline" && (
            <Button type="outline">
              <Ionicons name="add-outline" size={20} color={colors.orange} />

              <Text style={[urbanist.bold, { color: colors.orange }]}>{label}</Text>
            </Button>
          )}

          {type === "logout" && (
            <Button type="logout" className="flex justify-start" onPress={handleSignOut} {...props}>
              <Logout />
            </Button>
          )}

          {type === "add" && (
            <Button type={type} onPress={() => setShowModal && setShowModal(true)}>
              <PlusOrangeIcon height={36} width={36} />
            </Button>
          )}

          {type === "create" && (
            <Button
              type={type}
              className="justify-center items-center"
              {...props}
            >
              <Text
                style={{ color: textColor }}
                className="text-center font-bold"
              >
                {label}
              </Text>
            </Button>
          )}


          {!link && !excludedTypes.includes(type) && (
            <Button type={type} {...props}>
              {(type === "apple" || type === "google") && (
                <View className="absolute left-4">{renderIcon()}</View>
              )}
              <Text
                style={{ color: textColor }}
                className="flex-1 text-center font-bold"
              >
                {label}
              </Text>
            </Button>
          )}
        </>
      )}
    </View>
  );
}
