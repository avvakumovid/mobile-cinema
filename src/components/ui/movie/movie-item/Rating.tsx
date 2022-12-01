import { View, Text } from 'react-native';
import React, { FC } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { getColor } from './../../../../config/colors.config';
import cn from 'clsx';

interface IRating {
  size?: number;
  rating: number;
}
const Rating: FC<IRating> = ({ rating, size = 20 }) => {
  return (
    <View className='flex-row items-center'>
      <AntDesign name='star' size={size} color={getColor('yellow')} />
      <Text
        className={cn(
          'text-white ml-2 font-bold',
          size === 20 ? 'text-lg' : 'text-base'
        )}
      >
        {rating.toFixed(1)}
      </Text>
    </View>
  );
};

export default Rating;
