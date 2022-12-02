import { View, Text } from 'react-native';
import React from 'react';
import { Layout, Loader } from '@/components/ui';
import MovieCatalog from '@/components/ui/movie/catalog/movie-catalog/MovieCatalog';
import { useTrending } from './useTrending';

const Trending = () => {
  const { isLoading, movies } = useTrending();

  if (isLoading) return <Loader />;

  return (
    <Layout isHasPadding>
      <MovieCatalog title='Trending' movies={movies} />
    </Layout>
  );
};

export default Trending;
