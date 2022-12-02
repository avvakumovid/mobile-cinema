import { View, Text, Pressable } from 'react-native';
import React, { FC, PropsWithChildren } from 'react';
import { IBlurButton } from './blur-button.interface';
import { BlurView } from 'expo-blur';
import cn from 'clsx';
import { Feather } from '@expo/vector-icons';

const BlurButton: FC<PropsWithChildren<IBlurButton>> = ({
  children,
  style,
  color = 'white',
  icon,
  iconSize = 21,
  isSmall = false,
  ...rest
}) => {
  return (
    <Pressable {...rest}>
      <BlurView
        intensity={22}
        tint='light'
        className={cn(
          'items-center justify-center  overflow-hidden',
          isSmall ? 'w-8 h-8 rounded-lg' : 'w-12 h-12 rounded-2xl'
        )}
        style={style}
      >
        {children ? (
          children
        ) : (
          <Feather name={icon} size={iconSize} color={color} />
        )}
      </BlurView>
    </Pressable>
  );
};

export default BlurButton;
