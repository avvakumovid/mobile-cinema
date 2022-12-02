import { View, Text } from 'react-native';
import React from 'react';
import { useFavorites } from './useFavorites';
import { Heading, Layout, Loader } from '@/components/ui';
import MovieCatalog from '@/components/ui/movie/catalog/movie-catalog/MovieCatalog';

const Favorites = () => {
  const { isLoading, favoriteMovies } = useFavorites();

  if (isLoading) return <Loader />;

  return (
    <Layout isHasPadding>
      <MovieCatalog title='Favorites' movies={favoriteMovies} />
    </Layout>
  );
};

export default Favorites;
