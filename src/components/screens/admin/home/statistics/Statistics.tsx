import { View } from 'react-native';
import React, { FC } from 'react';
import CountUsers from './CountUsers';
import PopularMovies from './PopularMovies';

const Statistics: FC = () => {
  return (
    <View className='flex items-stretch'>
      <CountUsers />
      <PopularMovies />
    </View>
  );
};

export default Statistics;
