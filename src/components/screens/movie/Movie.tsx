import { View, Text, Animated } from 'react-native';
import React, { useRef } from 'react';
import { useMovie } from './useMovie';
import { Layout, Loader } from '@/components/ui';
import MovieHeader from './MovieHeader';
import MovieInfo from './movie-content/MovieInfo';
import MovieBackground from './MovieBackground';
import MovieContent from './movie-content/MovieContent';

const Movie = () => {
  const y = useRef(new Animated.Value(0)).current;
  const { isLoading, movie } = useMovie();

  if (isLoading) return <Loader />;
  if (!movie) return null;
  return (
    <Layout style={{ paddingTop: 0 }}>
      <MovieHeader y={y} movie={movie} />
      <MovieBackground y={y} movie={movie} />
      <MovieContent y={y} movie={movie} />
    </Layout>
  );
};

export default Movie;
