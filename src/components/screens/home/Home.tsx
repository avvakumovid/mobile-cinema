import React from 'react';
import { useTypedNavigation } from '@/hooks/useTypedNavigation';
import { Heading, Layout, Loader } from '@/components/ui';
import { useGetAllMovies } from './useGetAllMovies';
import Carousel from './carousel/Carousel';

const Home = () => {
  const { isLoading, movies } = useGetAllMovies();

  return (
    <Layout>
      <Heading title='Home' />
      {isLoading ? <Loader /> : movies?.length && <Carousel movies={movies} />}
    </Layout>
  );
};

export default Home;
