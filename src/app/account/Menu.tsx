import React, { useState } from "react";
import { Text } from "react-native";
import AccountCard from "../components/AccountCard";
import { View } from "react-native";
import { urbanist } from "@/src/styles/typography";
import { Button, ButtonText } from "@/components/ui/button";
import { colors } from "@/src/styles/colors";
import Logout from "../components/Logout";
import ComponentButton from "../components/ComponentButton";
import { signOut } from "@/auth/email-password";
import { useRouter } from "expo-router";
import { Modal, ModalBackdrop, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader } from "@/components/ui/modal";
import { Heading } from "@/components/ui/heading";
import { CloseIcon, Icon } from "@/components/ui/icon";
import { Input, InputField } from "@/components/ui/input";

export default function UserProfile() {
  const [showModal, setShowModal] = useState(false)
  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');
  const [domain, setDomain] = useState('');

  const handleCreate = () => {
    if (!name || !slug) {
      alert('Preencha pelo menos nome e slug.');
      return;
    }

    const newZoo = {
      name,
      slug,
      domain,
      planId: 'basic', // pode ser um select se tiver planos dinâmicos
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      shouldAttachUsersByDomain: false,
      status: 'PENDING',
    };
  }

  return (
    <View className="flex-1 p-6 flex flex-col gap-5">
      <View className="flex flex-row justify-between items-center">
        <Text style={[urbanist.bold]} className="text-3xl">
          Contas
        </Text>

        <ComponentButton type="add" showModal={showModal} setShowModal={setShowModal} />
      </View>

      <View className="flex-1">
        <AccountCard />
      </View>

      <ComponentButton
        type="logout"
      />

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        size="lg"
      >
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            <Heading size="md" className="text-typography-950">
              Adicionar Zoo
            </Heading>
            <ModalCloseButton>
              <Icon
                as={CloseIcon}
                size="md"
                className="stroke-background-400 group-[:hover]/modal-close-button:stroke-background-700 group-[:active]/modal-close-button:stroke-background-900 group-[:focus-visible]/modal-close-button:stroke-background-900"
              />
            </ModalCloseButton>
          </ModalHeader>

          <ModalBody>
            <View className="flex flex-col gap-4">
              <Input variant="outline" size="md" className="h-[58px] rounded-[10px] bg-[#FAFAFA] border-0">
                <InputField
                  placeholder="Nome do Zoológico"
                  value={name}
                  onChangeText={setName}
                />
              </Input>

              <Input variant="outline" size="md" className="h-[58px] rounded-[10px] bg-[#FAFAFA] border-0">
                <InputField
                  placeholder="Slug (ex: zoo-central)"
                  value={slug}
                  onChangeText={setSlug}
                />
              </Input>

              <Input variant="outline" size="md" className="h-[58px] rounded-[10px] bg-[#FAFAFA] border-0">
                <InputField
                  placeholder="Domínio (opcional)"
                  value={domain}
                  onChangeText={setDomain}
                />
              </Input>

              <Text className="text-typography-500">
                O zoológico será criado com plano básico por padrão. Você pode alterar isso depois.
              </Text>
            </View>
          </ModalBody>


          <ModalFooter className="gap-2">
            <Button variant="outline" onPress={() => setShowModal(false)} type="create">
              <ButtonText>Cancelar</ButtonText>
            </Button>
            <Button onPress={handleCreate} type="create">
              <ButtonText>Criar</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </View>
  );
}
