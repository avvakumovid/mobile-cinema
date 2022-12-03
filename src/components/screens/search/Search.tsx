import { View, Text } from 'react-native';
import React from 'react';
import { useSearch } from './useSearch';
import { Field, Heading, Layout, Loader } from '@/components/ui';
import { ISearchFormData } from './search.interface';
import MovieCatalog from '@/components/ui/movie/catalog/movie-catalog/MovieCatalog';

const Search = () => {
  const { searchTerm, movies, isLoading, control } = useSearch();

  return (
    <Layout isHasPadding>
      <Heading title='Search' />
      <View className='mt-3'>
        <Field<ISearchFormData>
          placeholder='Type something...'
          control={control}
          name='searchTerm'
          keyboardType='web-search'
        />
      </View>
      {!!searchTerm ? (
        <View className='mt-3'>
          {isLoading ? <Loader /> : <MovieCatalog title='' movies={movies} />}
        </View>
      ) : null}
    </Layout>
  );
};

export default Search;
