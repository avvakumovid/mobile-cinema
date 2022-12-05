import { View, Text } from 'react-native';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useMovieEdit } from './useMovieEdit';
import { Button, Layout, Loader } from '@/components/ui';
import AdminNavigation from '@/components/ui/admin/navigation/AdminNavigation';
import { IMovieEditInput } from '@/shared/types/movie.interface';

const MovieEdit = () => {
  const { control, setValue, handleSubmit } = useForm<IMovieEditInput>({
    mode: 'onChange',
  });

  const { isLoading, onSubmit } = useMovieEdit(setValue);

  return (
    <Layout isHasPadding>
      <AdminNavigation title='Edit movie' isBackButton />
      <View>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {' '}
            <Button onPress={handleSubmit(onSubmit)} icon='pen-tool'>
              Update
            </Button>
          </>
        )}
      </View>
    </Layout>
  );
};

export default MovieEdit;
