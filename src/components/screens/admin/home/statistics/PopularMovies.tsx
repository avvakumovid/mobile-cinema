import { View, Text } from 'react-native';
import React from 'react';
import { useTrending } from '@/components/screens/trending/useTrending';
import { Loader } from '@/components/ui';
import MovieItem from '@/components/ui/movie/movie-item/MovieItem';

const PopularMovies = () => {
  const { movies, isLoading } = useTrending(2);
  return (
    <View className='text-center w-full border-2 border-gray-500 rounded-2xl p-5 mt-6'>
      <Text className='text-2xl font-bold text-white text-center mb-2'>
        The most popular movies
      </Text>
      <View className='flex-row justify-between mt-2'>
        {isLoading ? (
          <Loader />
        ) : movies?.length ? (
          movies.map((movie, index) => (
            <View
              key={movie._id}
              style={{
                width: '47%',
              }}
            >
              <MovieItem index={index} movie={movie} />
              <Text className='text-white text-center mt-2 text-base'>
                Opened {movie.countOpened} times
              </Text>
            </View>
          ))
        ) : (
          <Text className='text-white text-lg'>Elements not found</Text>
        )}
      </View>
    </View>
  );
};

export default PopularMovies;
