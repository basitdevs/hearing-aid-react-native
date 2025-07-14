import React from "react";
import { ViewStyle } from "react-native";
import { Switch } from "react-native-switch";

type CustomSwitchProps = {
  value?: boolean;
  onValueChange: (value: boolean) => void;
  disabled?: boolean;
  size?: number;
  activeColor?: string;
  thumbColor?: string;
  bgInactive?: string;
  style?: ViewStyle;
};

export const CustomSwitch: React.FC<CustomSwitchProps> = ({
  value,
  onValueChange,
  disabled = false,
  size = 20,
  activeColor = "#10B981",
  thumbColor = "#00E0B6",
  bgInactive = "#ffffff",
  style = {},
}) => {
  return (
    <Switch
      value={value}
      onValueChange={onValueChange}
      disabled={disabled}
      circleSize={size}
      barHeight={22}
      circleBorderWidth={0}
      backgroundActive={activeColor}
      backgroundInactive={bgInactive}
      circleActiveColor={thumbColor}
      circleInActiveColor={thumbColor}
      changeValueImmediately={true}
      innerCircleStyle={{
        alignItems: "center",
        justifyContent: "center",
      }}
      renderActiveText={false}
      renderInActiveText={false}
      switchLeftPx={2}
      switchRightPx={2}
      switchWidthMultiplier={2.1}
      switchBorderRadius={size}
      containerStyle={style}
    />
  );
};
