import { View, Text } from 'react-native';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useGenreEdit } from './useGenreEdit';
import { Button, Layout, Loader } from '@/components/ui';
import AdminNavigation from '@/components/ui/admin/navigation/AdminNavigation';
import { IGenreEditInput } from '@/shared/types/movie.interface';

const GenreEdit = () => {
  const { control, setValue, handleSubmit } = useForm<IGenreEditInput>({
    mode: 'onChange',
  });

  const { isLoading, onSubmit } = useGenreEdit(setValue);

  return (
    <Layout isHasPadding>
      <AdminNavigation title='Edit genre' isBackButton />
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

export default GenreEdit;
