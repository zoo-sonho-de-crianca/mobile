import {
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@/components/ui/modal";
import { urbanist } from "@/src/styles/typography";
import { AntDesign } from "@expo/vector-icons";
import type { ReactNode } from "react";
import { Text } from "react-native";

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

export const CustomModal = ({
  isOpen,
  onClose,
  size = "md",
  children,
}: CustomModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={size}>
      <ModalBackdrop />
      <ModalContent>
        {/* <ModalHeader>
          <ModalCloseButton onPress={onClose}>
            <AntDesign
              name="close"
              size={24}
              className="stroke-background-400 group-[:hover]/modal-close-button:stroke-background-700 group-[:active]/modal-close-button:stroke-background-900 group-[:focus-visible]/modal-close-button:stroke-background-900"
            />
          </ModalCloseButton>
        </ModalHeader> */}
        <ModalBody>{children}</ModalBody>
        <ModalFooter className="flex items-center justify-center">
          <Text style={[urbanist.semibold]} className="text-xl">
            Entrando
          </Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
