import { View, Text } from 'react-native';
import React, { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AdminService } from '@/services/admin.service';
import { useScaleOnMount } from '@/hooks/useScaleOnMount';
import { Loader } from '@/components/ui';
import Animated from 'react-native-reanimated';

const CountUsers: FC = () => {
  const { isLoading, data } = useQuery(['get users count'], () =>
    AdminService.getCountUsers()
  );

  const { styleAnimation } = useScaleOnMount();

  return (
    <View className='items-center justify-center text-center w-full border-2 border-gray-500 rounded-2xl p-5'>
      {isLoading ? (
        <Loader />
      ) : (
        <Animated.Text
          className='text-7xl mb-1 font-medium text-white'
          style={styleAnimation}
        >
          {data}
        </Animated.Text>
      )}
      <Animated.Text
        className='text-xl opacity-70 text-white'
        style={styleAnimation}
      >
        Users
      </Animated.Text>
    </View>
  );
};

export default CountUsers;
