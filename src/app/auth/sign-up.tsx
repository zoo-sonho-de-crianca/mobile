import React from "react";
import { Text, View, ScrollView } from "react-native";
import Header from "../components/Header";
import { VStack } from "@/components/ui/vstack";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { Image } from "expo-image";
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
import { createUserWithEmailAndPassword } from "@/auth/email-password";

export default function SignUpScreen() {
  const [showPassword, setShowPassword] = React.useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const [showModal, setShowModal] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleSignUp = async () => {
    if (!email || !password) {
      alert("Por favor, preencha e-mail e senha.");
      return;
    }

    setLoading(true);
    setShowModal(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(email, password);
      console.log("Usuário criado:", userCredential.user.email);

      // ✅ aqui você decide: navegar ou fechar modal
      setShowModal(false);
      // exemplo: navegar para menu
      router.replace("/account/menu"); // ou use Link, dependendo do roteador
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
            <View className="mt-6 flex flex-col gap-9 items-center">
              <Checkbox value="keep-logged" onChange={() => { }}>
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel
                  style={urbanist.medium}
                  className="text-[18px] text-black"
                >
                  Eu concordo com os{" "}
                  <Link
                    style={[{ color: colors.orange }]}
                    href={"/policy/terms-conditions"}
                  >
                    Termos & Condições
                  </Link>
                  .
                </CheckboxLabel>
              </Checkbox>

              <Text className="text-[18px]">
                Já tem uma conta?
                <Link
                  href="/auth/sign-in"
                  className="ml-auto mt-3 text-[18px]"
                  style={[urbanist.semibold, { color: colors.orange }]}
                >
                  {" "}
                  Entrar
                </Link>
              </Text>
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

          <ComponentButton
            label="Cadastre-se"
            textColor={colors.white}
            type="orange"
            onPress={handleSignUp}
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
