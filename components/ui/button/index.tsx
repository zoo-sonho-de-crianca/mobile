"use client";

import React from "react";
import { createButton } from "@gluestack-ui/button";
import { tva } from "@gluestack-ui/nativewind-utils/tva";
import {
  withStyleContext,
  useStyleContext,
} from "@gluestack-ui/nativewind-utils/withStyleContext";
import { cssInterop } from "nativewind";
import { ActivityIndicator, Pressable, Text, View } from "react-native";
import type { VariantProps } from "@gluestack-ui/nativewind-utils";
import { PrimitiveIcon, UIIcon } from "@gluestack-ui/icon";
import { colors } from "@/src/styles/colors";

const SCOPE = "BUTTON";

// =====================
// BASE COMPONENT SETUP
// =====================
const Root = withStyleContext(Pressable, SCOPE);

const UIButton = createButton({
  Root: Root,
  Text,
  Group: View,
  Spinner: ActivityIndicator,
  Icon: UIIcon,
});

// CSS Interop for icons
cssInterop(PrimitiveIcon, {
  className: {
    target: "style",
    nativeStyleToProp: {
      height: true,
      width: true,
      fill: true,
      color: "classNameColor",
      stroke: true,
    },
  },
});

// =====================
// STYLES
// =====================

// Main button style
const buttonStyle = tva({
  base: "group/button rounded flex-row items-center justify-center gap-2 data-[focus-visible=true]:web:outline-none data-[focus-visible=true]:web:ring-2 data-[disabled=true]:opacity-40",
  variants: {
    action: {
      primary:
        "bg-primary-500 data-[hover=true]:bg-primary-600 data-[active=true]:bg-primary-700",
      secondary:
        "bg-secondary-500 data-[hover=true]:bg-secondary-600 data-[active=true]:bg-secondary-700",
      positive:
        "bg-success-500 data-[hover=true]:bg-success-600 data-[active=true]:bg-success-700",
      negative:
        "bg-error-500 data-[hover=true]:bg-error-600 data-[active=true]:bg-error-700",
      default:
        "bg-transparent data-[hover=true]:bg-background-50 data-[active=true]:bg-transparent",
    },
    variant: {
      link: "px-0 bg-transparent",
      outline:
        "bg-transparent border data-[hover=true]:bg-background-50 data-[active=true]:bg-transparent",
      solid: "",
    },
  },
});

// Text style
const buttonTextStyle = tva({
  base: "text-typography-0 font-semibold",
  parentVariants: {
    action: {
      primary: "text-typography-0",
      secondary: "text-typography-800",
      positive: "text-typography-0",
      negative: "text-typography-0",
    },
    variant: {
      link: "underline",
      outline: "",
      solid: "",
    },
  },
});

// Icon style
const buttonIconStyle = tva({
  base: "fill-none",
  parentVariants: {
    action: {
      primary: "text-typography-0",
      secondary: "text-typography-800",
      positive: "text-typography-0",
      negative: "text-typography-0",
    },
    variant: {
      link: "",
      outline: "",
      solid: "",
    },
  },
});

// Group style
const buttonGroupStyle = tva({
  base: "flex-row gap-2",
  variants: {
    isAttached: {
      true: "gap-0",
    },
    flexDirection: {
      row: "flex-row",
      column: "flex-col",
      "row-reverse": "flex-row-reverse",
      "column-reverse": "flex-col-reverse",
    },
  },
});

// =====================
// COMPONENTS
// =====================

// Button
type IButtonProps = Omit<
  React.ComponentPropsWithoutRef<typeof UIButton>,
  "context"
> &
  VariantProps<typeof buttonStyle> & {
    className?: string;
    type: "orange" | "lightOrange" | "blackOrange" | "google" | "apple" | "invite" | "invitationOwner" | "invitedMember" | "outline" | "logout";
  };

const Button = React.forwardRef<
  React.ComponentRef<typeof UIButton>,
  IButtonProps
>(function Button(
  { className, type, variant = "solid", action = "primary", ...props },
  ref
) {
  return (
    <UIButton
      ref={ref}
      {...props}
      style={[
        {
          height: type === "invite" || type === "invitationOwner" || type === "invitedMember" || type === "outline" ? 40 : type === "logout" ? undefined : 56,
          backgroundColor:
            type === "orange"
              ? colors.orange
              : type === "invitationOwner"
                ? colors.invitationOwnerButtonGray
                : type === "invitedMember"
                  ? colors.orange
                  : type === "lightOrange"
                    ? colors.lightOrange
                    : type === "invite"
                      ? colors.orange
                      : type === "blackOrange"
                        ? colors.blackOrange
                        : type === "google"
                          ? colors.google
                          : type === "apple"
                            ? colors.apple
                            : undefined,
          paddingVertical: type === "invite" || type === "invitationOwner" || type === "invitedMember" || type === "outline" || type === "logout" ? 0 : 16,
          paddingHorizontal: type === "invite" || type === "invitationOwner" || type === "invitedMember" ? 12 : type === "logout" ? 0 : 16,
          borderRadius: type === "invite" || type === "invitationOwner" || type === "invitedMember" ? 8 : 1000,
          borderWidth: type === "apple" || type === "google" ? 1 : type === "outline" ? 2 : undefined,
          borderColor:
            type === "apple" || type === "google" ? "#EEEEEE" : type === "outline" ? colors.orange : undefined,
        },
      ]}
      className={buttonStyle({
        variant,
        action,
        class: className,
      })}
      context={{ variant, action }}
    />
  );
});

// Button Text
type IButtonTextProps = React.ComponentPropsWithoutRef<typeof UIButton.Text> &
  VariantProps<typeof buttonTextStyle> & {
    className?: string;
  };

const ButtonText = React.forwardRef<
  React.ComponentRef<typeof UIButton.Text>,
  IButtonTextProps
>(function ButtonText({ className, variant, action, ...props }, ref) {
  const { variant: parentVariant, action: parentAction } =
    useStyleContext(SCOPE);

  return (
    <UIButton.Text
      ref={ref}
      {...props}
      className={buttonTextStyle({
        parentVariants: {
          variant: parentVariant,
          action: parentAction,
        },
        variant,
        action,
        class: className,
      })}
    />
  );
});

// Button Spinner
const ButtonSpinner = UIButton.Spinner;

// Button Icon
type IButtonIcon = React.ComponentPropsWithoutRef<typeof UIButton.Icon> & {
  className?: string | undefined;
  as?: React.ElementType;
  height?: number;
  width?: number;
};

const ButtonIcon = React.forwardRef<
  React.ComponentRef<typeof UIButton.Icon>,
  IButtonIcon
>(function ButtonIcon({ className, ...props }, ref) {
  const { variant: parentVariant, action: parentAction } =
    useStyleContext(SCOPE);

  return (
    <UIButton.Icon
      ref={ref}
      {...props}
      className={buttonIconStyle({
        parentVariants: {
          variant: parentVariant,
          action: parentAction,
        },
        class: className,
      })}
    />
  );
});

// Button Group
type IButtonGroupProps = React.ComponentPropsWithoutRef<typeof UIButton.Group> &
  VariantProps<typeof buttonGroupStyle>;

const ButtonGroup = React.forwardRef<
  React.ComponentRef<typeof UIButton.Group>,
  IButtonGroupProps
>(function ButtonGroup(
  { className, isAttached = false, flexDirection = "row", ...props },
  ref
) {
  return (
    <UIButton.Group
      className={buttonGroupStyle({
        class: className,
        isAttached,
        flexDirection,
      })}
      {...props}
      ref={ref}
    />
  );
});

// =====================
// DISPLAY NAMES
// =====================
Button.displayName = "Button";
ButtonText.displayName = "ButtonText";
ButtonSpinner.displayName = "ButtonSpinner";
ButtonIcon.displayName = "ButtonIcon";
ButtonGroup.displayName = "ButtonGroup";

// =====================
// EXPORTS
// =====================
export { Button, ButtonText, ButtonSpinner, ButtonIcon, ButtonGroup };
