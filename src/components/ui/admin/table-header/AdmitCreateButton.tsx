import { View, Text, Pressable } from 'react-native';
import React, { FC } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';

const AdmitCreateButton: FC<{ onPress: () => void }> = ({ onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <LinearGradient
        start={{ x: 0, y: 0.75 }}
        end={{ x: 1, y: 0.25 }}
        colors={['#DC3F41', '#A6282B']}
        className='w-12 h-12 rounded-2xl items-center justify-center'
      />
      <Feather name='plus' size={24} color='#fff' />
    </Pressable>
  );
};

export default AdmitCreateButton;
