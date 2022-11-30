import { View, Text, Pressable } from 'react-native';
import React, { FC, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useTypedNavigation } from '@/hooks/useTypedNavigation';
import cn from 'clsx';
import { TypeRootStackParamList } from '@/navigation/navigation.types';
import { BottomMenuItems } from './bottom-menu.data';
import { TypeNavigate } from './bottom-menu.interface';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MenuItem from './MenuItem';

interface IBottomMenu {
  nav: TypeNavigate;
  currentRoute?: string;
}

const BottomMenu: FC<IBottomMenu> = ({ nav, currentRoute }) => {
  const { bottom } = useSafeAreaInsets();

  const { navigate } = useTypedNavigation();
  const [active, setActive] = useState<keyof TypeRootStackParamList>();

  return (
    <View
      className='pt-5 px-2 flex-row justify-between items-center w-full border-t border-t-solid border-t-[#929292] bg-[#090909]'
      style={{
        paddingBottom: bottom + 5,
      }}
    >
      {BottomMenuItems.map(item => (
        <MenuItem
          key={item.routeName}
          item={item}
          currentRoute={currentRoute}
          nav={nav}
        />
      ))}
    </View>
  );
};

export default BottomMenu;
