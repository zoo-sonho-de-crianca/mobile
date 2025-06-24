import React from "react";
import { Text, View, ScrollView } from "react-native";
import Header from "../components/Header";
import { VStack } from "@/components/ui/vstack";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { Link, router } from "expo-router";
import {
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
} from "@/components/ui/checkbox";
import { colors } from "@/src/styles/colors";
import { urbanist } from "@/src/styles/typography";
import ComponentButton from "../components/ComponentButton";
import { CustomModal } from "../components/CustomModal";
import { Spinner } from "@/components/ui/spinner";
import EyeIcon from "@/assets/images/eye_icon.svg";
import EyeOffIcon from "@/assets/images/eye-off_icon.svg";
import LockIcon from "@/assets/images/lock_icon.svg";
import MessageIcon from "@/assets/images/message_icon.svg";
import CheckIcon from "@/assets/images/check_icon.svg";
import { signInWithEmailAndPassword } from "@/auth/email-password";

export default function SignInScreen() {
  const [showPassword, setShowPassword] = React.useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const [showModal, setShowModal] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleSignIn = async () => {
    if (!email || !password) {
      alert("Por favor, preencha e-mail e senha.");
      return;
    }

    setLoading(true);
    setShowModal(true);

    try {
      const userCredential = await signInWithEmailAndPassword(email, password);
      console.log("Usuário logado:", userCredential.user.email);

      setShowModal(false);
      router.replace("/account/menu");
    } catch (error: any) {
      console.error(error);
      alert(error.message);
      setShowModal(false);
    } finally {
      setLoading(false);
    }
  };

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
              <Input className="h-[58px] rounded-[10px] bg-[#FAFAFA] border-0">
                <InputSlot className="pl-5">
                  <InputIcon
                    as={() => <MessageIcon width={20} height={20} />}
                  />
                </InputSlot>
                <InputField
                  type="text"
                  placeholder="E-mail"
                  style={urbanist.regular}
                  className="text-[18px] pl-3"
                  value={email}
                  onChangeText={setEmail}
                />
              </Input>
            </VStack>

            {/* Senha */}
            <VStack space="xs" className="mt-6">
              <Text style={urbanist.semibold} className="text-[18px]">
                Senha
              </Text>
              <Input className="h-[58px] rounded-[10px] bg-[#FAFAFA] border-0">
                <InputSlot className="pl-5">
                  <InputIcon as={() => <LockIcon width={20} height={20} />} />
                </InputSlot>
                <InputField
                  type={showPassword ? "text" : "password"}
                  placeholder="Senha"
                  style={urbanist.regular}
                  className="text-[18px] pl-3"
                  value={password}
                  onChangeText={setPassword}
                />
                <InputSlot onPress={togglePasswordVisibility} className="pr-5">
                  <InputIcon
                    as={() =>
                      showPassword ? (
                        <EyeIcon width={20} height={20} />
                      ) : (
                        <EyeOffIcon width={20} height={20} />
                      )
                    }
                  />
                </InputSlot>
              </Input>
            </VStack>

            {/* Checkbox e Esqueceu */}
            <View className="mt-6 flex flex-col gap-9">
              <Checkbox value="keep-logged" onChange={() => { }}>
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} />
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
                className="ml-auto text-[18px]"
                style={[urbanist.semibold, { color: colors.orange }]}
              >
                Esqueceu a senha?
              </Link>
            </View>

            {/* Divider + outras opções */}
            <View className="flex flex-col gap-5">
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

          {/* Botão Entrar */}
          <ComponentButton
            label="Entrar"
            textColor={colors.white}
            type="orange"
            onPress={handleSignIn}
          />

          <CustomModal
            isOpen={showModal}
            onClose={() => {
              if (!loading) setShowModal(false);
            }}
            size="md"
          >
            {loading ? (
              <Spinner size="large" color={colors.orange} />
            ) : undefined}
          </CustomModal>
        </View>
      </ScrollView>
    </View>
  );
}
