import { View, Text } from 'react-native';
import React from 'react';
import { Layout, Loader } from '@/components/ui';
import MovieCatalog from '@/components/ui/movie/catalog/movie-catalog/MovieCatalog';
import { useActor } from './useActor';
import NotFound from '@/components/ui/NotFound';
const Actor = () => {
  const { isLoading, movies, actor } = useActor();

  if (isLoading) return <Loader />;

  return (
    <Layout isHasPadding>
      {actor ? (
        <MovieCatalog title={actor.name} movies={movies} isBackButton />
      ) : (
        <NotFound />
      )}
    </Layout>
  );
};

export default Actor;
