import { View, Text, Animated, StyleSheet } from 'react-native';
import React, { FC } from 'react';
import { IMovie } from '@/shared/types/movie.interface';
import { GenreList, Rating } from '@/components/ui';
import { Entypo } from '@expo/vector-icons';
import { IMovieComponent } from '../movie-page.interface';
import { inputRange } from '../movie.constant';
import { HEADER_HEIGHT } from './../movie.constant';

const MovieInfo: FC<IMovieComponent> = ({ movie, y }) => {
  const opacity = y.interpolate({
    inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT / 3 ],
    outputRange: [1, 1, 0],
  });

  return (
    <Animated.View className='px-6 mb-3' style={{ opacity }}>
      <Text
        className='text-5xl font-semibold text-[#F9FCFC] mb-2 pr-2'
        numberOfLines={2}
      >
        {movie.title}
      </Text>
      <View className='flex-row items-center opacity-70'>
        <Rating rating={movie.rating} />
        <Entypo
          name='dot-single'
          size={18}
          color='rgba(255,255,255, .5)'
          style={{
            marginLeft: 4,
          }}
        />
        <Text style={styles.text}>{movie.parameters.duration}</Text>
        <Entypo
          name='dot-single'
          size={18}
          color='rgba(255,255,255, .5)'
          style={{
            marginLeft: 4,
          }}
        />
        <Text style={styles.text}>{movie.parameters.year}</Text>
      </View>
      <GenreList genres={movie.genres} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    marginRight: 4,
    fontSize: 18,
  },
});

export default MovieInfo;
