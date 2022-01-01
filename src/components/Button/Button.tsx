import React, { useState } from 'react';
import { View, Text, Button, Pressable, ViewStyle } from 'react-native';
import { styles } from './styles';

export type PropsType = {
  title: string;
  buttonStyle?: ViewStyle;
  onPressButton: () => void;
};

const CustomButton: React.FC<PropsType> = ({
  title,
  buttonStyle,
  onPressButton,
}) => {
  const [hoveredButton, setHoveredButton] = useState<boolean>(false);
  return (
    <Pressable
      onPress={onPressButton}
      onHoverIn={() => setHoveredButton(true)}
      onHoverOut={() => setHoveredButton(false)}
      style={
        hoveredButton
          ? [styles.customButtonViewHover, buttonStyle]
          : [styles.customButtonView, buttonStyle]
      }
    >
      <Text style={hoveredButton ? styles.buttonTextHover : styles.buttonText}>
        {title}
      </Text>
    </Pressable>
  );
};

export default CustomButton;
