import { View, Text, StyleSheet, Animated } from 'react-native';
import React, { FC } from 'react';
import { IMovie } from '@/shared/types/movie.interface';
import { useTypedNavigation } from '@/hooks/useTypedNavigation';
import BlurButton from './../../ui/blur-button/BlurButton';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FavoriteButton, Rating } from '@/components/ui';
import { IMovieComponent } from './movie-page.interface';
import { inputRange } from './movie.constant';

const MovieHeader: FC<IMovieComponent> = ({ movie, y }) => {
  const { goBack } = useTypedNavigation();

  const { top } = useSafeAreaInsets();

  return (
    <View
      className='absolute left-0 top-0 w-full z-1 flex-row justify-between items-center px-6 pb-4'
      style={{ marginTop: -top, paddingTop: top + 10 }}
    >
      <Animated.View
        style={{
          ...StyleSheet.absoluteFillObject,
          opacity: y.interpolate({
            inputRange,
            outputRange: [0, 0, 2.2],
          }),
        }}
        className='bg-[#0D0404]'
      />
      <BlurButton onPress={goBack} icon='chevron-left' iconSize={23} />
      <Animated.View
        className='items-center w-2/3'
        style={{
          opacity: y.interpolate({
            inputRange,
            outputRange: [0, 0, 2.2],
          }),
        }}
      >
        <Text
          className='text-white font-semibold text-xl mb-0.5 px-2 '
          numberOfLines={1}
        >
          {movie.title}
        </Text>
        <Rating rating={movie.rating} size={14} />
      </Animated.View>
      <FavoriteButton movieId={movie._id} />
    </View>
  );
};

export default MovieHeader;
