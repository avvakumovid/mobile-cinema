import { View, Text, StyleSheet } from 'react-native';
import React, { FC } from 'react';

import cn from 'clsx';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useFavoriteAnimation } from './useFavoriteAnimation';
import Animated, { withSpring } from 'react-native-reanimated';
import BlurButton from '@/components/ui/blur-button/BlurButton';
import { useFavorite } from './useFavorite';

interface IFavoriteButton {
  movieId: string;
  isSmall?: boolean;
}

const FavoriteButton: FC<IFavoriteButton> = ({ isSmall, movieId }) => {
  const { isSmashed, toggleFavorites } = useFavorite(movieId);
  const { outlineStyle, fillStile, liked } = useFavoriteAnimation(isSmashed);

  return (
    <BlurButton
      onPress={() => {
        liked.value = withSpring(liked.value === 1 ? 0 : 1);
        toggleFavorites();
      }}
      isSmall={isSmall}
    >
      <Animated.View
        style={[StyleSheet.absoluteFill, outlineStyle]}
        className='items-center justify-center'
      >
        <MaterialCommunityIcons
          name='heart-outline'
          size={isSmall ? 19 : 22}
          color='white'
        />
      </Animated.View>
      <Animated.View
        style={[StyleSheet.absoluteFill, fillStile]}
        className='items-center justify-center'
      >
        <MaterialCommunityIcons
          name='heart'
          size={isSmall ? 19 : 22}
          color='#DC3F41'
        />
      </Animated.View>
    </BlurButton>
  );
};

export default FavoriteButton;
