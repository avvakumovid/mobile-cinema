import { Text, View, StyleSheet, Pressable, Image } from 'react-native';
import React, { FC } from 'react';
import { useTypedNavigation } from '@/hooks/useTypedNavigation';
import { useTypedRoute } from '@/hooks/useTypedRoute';
import Animated from 'react-native-reanimated';
import { useMovieItemAnimation } from './useMovieItemAnimation';
import { IMovie } from '@/shared/types/movie.interface';
import cn, { clsx } from 'clsx';
import { FavoriteButton, Rating } from '@/components/ui';
import { getMediaSource } from './../../../../utils/getMediaSource';

const ReanimatedPressable = Animated.createAnimatedComponent(Pressable);

interface IMovieItem {
  index: number;
  className?: string;
  movie: IMovie;
}

const MovieItem: FC<IMovieItem> = ({ index, className, movie }) => {
  const { navigate } = useTypedNavigation();
  const { name } = useTypedRoute();
  const { styleAnimation } = useMovieItemAnimation(index);
  const isFavoritePage = name === 'Favorites';

  return (
    <ReanimatedPressable
      style={styleAnimation}
      onPress={() => navigate('Movie', { slug: movie.slug })}
      className={cn('rounded-xl overflow-hidden h-56 w-40 mr-4', className)}
    >
      {isFavoritePage && (
        <View className='absolute z-1 right-1.5 top-1.5'>
          <FavoriteButton movieId={movie._id} isSmall={true} />
        </View>
      )}
      <Image
        style={{
          resizeMode: 'cover',
          ...StyleSheet.absoluteFillObject,
        }}
        source={getMediaSource(movie.poster)}
      />

      <View
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.64)',
        }}
        className={cn(
          'absolute w-full z-1 bottom-0 left-0 right-0 items-center pt-0.5 px-2  ',
          className
        )}
      >
        <View className='-ml-2 -m-0.5'>
          <Rating rating={movie.rating} size={16} />
        </View>
        <Text
          numberOfLines={1}
          className='text-white text-l font-semibold mb-1'
        >
          {movie.title}
        </Text>
      </View>
    </ReanimatedPressable>
  );
};

export default MovieItem;
