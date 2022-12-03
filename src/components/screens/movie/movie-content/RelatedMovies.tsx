import { View, Text, ListRenderItemInfo } from 'react-native';
import React, { FC } from 'react';
import { useRelatedMovies } from './useRelatedMovies';
import { Loader } from '@/components/ui';
import HorizontalList from '@/components/ui/HorizontalList';
import { IMovie } from '@/shared/types/movie.interface';
import MovieItem from '@/components/ui/movie/movie-item/MovieItem';

interface IRelatedMovies {
  genresIds: string[];
  currentMovieId: string;
}

const RelatedMovies: FC<IRelatedMovies> = ({ genresIds, currentMovieId }) => {
  const { movie, isLoading } = useRelatedMovies(genresIds, currentMovieId);

  if (isLoading) return <Loader />;
  if (!movie) return null;

  return (
    <View className='my-8'>
      <Text className='text-white text-2xl font-semibold mb-5'>
        Related movies
      </Text>
      <HorizontalList
        data={movie}
        //@ts-ignore
        renderItem={({ item: movie, index }: ListRenderItemInfo<IMovie>) => (
          <MovieItem
            index={index}
            movie={movie}
            key={movie._id}
            className='w-36 mr-4'
          />
        )}
      />
    </View>
  );
};

export default RelatedMovies;
