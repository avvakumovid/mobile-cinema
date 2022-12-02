import { View, Text } from 'react-native';
import React from 'react';
import { Layout, Loader } from '@/components/ui';
import MovieCatalog from '@/components/ui/movie/catalog/movie-catalog/MovieCatalog';
import { useGenre } from './useGenre';
import NotFound from '@/components/ui/NotFound';

const Genre = () => {
  const { isLoading, movies, genre } = useGenre();

  if (isLoading) return <Loader />;

  return (
    <Layout isHasPadding>
      {genre ? (
        <MovieCatalog
          title={genre.name}
          movies={movies}
          description={genre.description}
          isBackButton
        />
      ) : (
        <NotFound />
      )}
    </Layout>
  );
};

export default Genre;
