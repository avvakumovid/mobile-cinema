import { View, Text, Pressable } from 'react-native';
import React, { FC } from 'react';
import { INavItem } from './admin-navigation.interface';
import { useTypedNavigation } from '@/hooks/useTypedNavigation';
import { useTypedRoute } from '@/hooks/useTypedRoute';
import { MaterialIcons } from '@expo/vector-icons';
import clsx from 'clsx';

const AdminNavItem: FC<{ item: INavItem }> = ({
  item: { icon, routeName, title },
}) => {
  const { navigate } = useTypedNavigation();
  const { name } = useTypedRoute();

  return (
    <Pressable
      //@ts-ignore
      onPress={() => navigate(routeName)}
      className='flex-row items-center mb-1'
    >
      <MaterialIcons
        name={icon}
        size={18}
        color={name === routeName ? '#D73033' : '#666'}
      />
      <Text
        className={clsx('text-xl text-[#D1D1D1] ml-2', {
          'text-[#D73033] font-medium': name === routeName,
        })}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default AdminNavItem;
