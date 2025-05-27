import React from "react";
import { Text, View, ScrollView } from "react-native";
import Header from "../components/Header";
import { VStack } from "@/components/ui/vstack";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { Image } from "expo-image";
import { Link } from "expo-router";
import {
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
} from "@/components/ui/checkbox";
import { colors } from "@/src/styles/colors";
import { urbanist } from "@/src/styles/typography";
import ComponentButton from "../components/ComponentButton";

const eyeIcon = require("@/assets/images/eye-icon.png");
const eyeOffIcon = require("@/assets/images/eye-off-icon.png");
const lockIcon = require("@/assets/images/lock-icon.png");
const messageIcon = require("@/assets/images/message-icon.png");
const checkIcon = require("@/assets/images/check-icon.png");

export default function SignInScreen() {
  const [showPassword, setShowPassword] = React.useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <View className="flex-1 bg-white">
      <Header />

      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        className="px-6 pt-4 pb-6"
      >
        <View className="flex-1 justify-between">
          <View>
            {/* E-mail */}
            <VStack space="xs">
              <Text style={urbanist.semibold} className="text-[18px]">
                E-mail
              </Text>
              <Input className="h-[65px] rounded-[10px] bg-[#FAFAFA] border-0">
                <InputSlot className="pl-5">
                  <InputIcon
                    as={() => (
                      <Image
                        source={messageIcon}
                        style={{ height: 20, width: 20 }}
                      />
                    )}
                  />
                </InputSlot>
                <InputField
                  type="text"
                  placeholder="E-mail"
                  style={urbanist.regular}
                  className="text-[18px] pl-3"
                />
              </Input>
            </VStack>

            {/* Senha */}
            <VStack space="xs" className="mt-6">
              <Text style={urbanist.semibold} className="text-[18px]">
                Senha
              </Text>
              <Input className="h-[65px] rounded-[10px] bg-[#FAFAFA] border-0">
                <InputSlot className="pl-5">
                  <InputIcon
                    as={() => (
                      <Image
                        source={lockIcon}
                        style={{ height: 20, width: 20 }}
                      />
                    )}
                  />
                </InputSlot>
                <InputField
                  type={showPassword ? "text" : "password"}
                  placeholder="Senha"
                  style={urbanist.regular}
                  className="text-[18px] pl-3"
                />
                <InputSlot onPress={togglePasswordVisibility} className="pr-5">
                  <InputIcon
                    as={() => (
                      <Image
                        source={showPassword ? eyeIcon : eyeOffIcon}
                        style={{ height: 20, width: 20 }}
                      />
                    )}
                  />
                </InputSlot>
              </Input>
            </VStack>

            {/* Checkbox e Esqueceu */}
            <View className="mt-6">
              <Checkbox value="keep-logged" onChange={() => {}}>
                <CheckboxIndicator>
                  <CheckboxIcon as={checkIcon} />
                </CheckboxIndicator>
                <CheckboxLabel
                  style={urbanist.medium}
                  className="text-[18px] text-black"
                >
                  Mantenha-me conectado
                </CheckboxLabel>
              </Checkbox>

              <Link
                href="/auth/forgot-password"
                className="ml-auto mt-3 text-[18px]"
                style={[urbanist.semibold, { color: colors.orange }]}
              >
                Esqueceu a senha?
              </Link>
            </View>

            <View className="flex flex-col gap-5">
              {/* Divider */}
              <View className="flex-row items-center justify-between mt-8">
                <View className="h-[1px] bg-[#EEEEEE] w-[150px]" />
                <Text style={urbanist.medium} className="text-[18px]">
                  ou
                </Text>
                <View className="h-[1px] bg-[#EEEEEE] w-[150px]" />
              </View>

              <ComponentButton
                label="Continue com Google"
                link={"/"}
                type="google"
                textColor={colors.black}
              />
              <ComponentButton
                label="Continue com Apple"
                link={"/"}
                type="apple"
                textColor={colors.black}
              />
            </View>
          </View>

          {/* Botão Entrar lá embaixo */}
          <View className="mt-10">
            <ComponentButton
              label="Entrar"
              textColor={colors.white}
              type="orange"
              link={"/"}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
