import { View, Text, Pressable } from 'react-native';
import React, { FC, PropsWithChildren } from 'react';
import { IBlurButton } from './blur-button.interface';
import { BlurView } from 'expo-blur';
import cn from 'clsx';
import { Feather } from '@expo/vector-icons';

const BlurButton: FC<PropsWithChildren<IBlurButton>> = ({
  children,
  className,
  color = 'white',
  icon,
  iconSize = 21,
  ...rest
}) => {
  return (
    <Pressable {...rest}>
      <BlurView
        intensity={22}
        tint='light'
        className={cn(
          'w-12 h-12 items-center justify-center rounded-2xl overflow-hidden ',
          className
        )}
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
