import { View, Text, Pressable } from 'react-native';
import React, { FC, useState } from 'react';
import { IMenuItem, TypeNavigate } from './bottom-menu.interface';
import { TypeRootStackParamList } from '@/navigation/navigation.types';
import { Feather } from '@expo/vector-icons';
import { getColor } from '@/config/colors.config';

interface IMenuItemProps {
  item: IMenuItem;
  nav: TypeNavigate
  currentRoute?: string;
}

const MenuItem: FC<IMenuItemProps> = ({ item, nav, currentRoute }) => {
  const isActive = currentRoute === item.routeName;
  return (
    <Pressable
      onPress={() => {
        nav(item.routeName);
      }}
      className='items-center w-[20%]'
    >
      <Feather
        color={isActive ? getColor('primary') : getColor('gray.400')}
        name={item.icon}
        size={26}
      />
    </Pressable>
  );
};

export default MenuItem;
