import { View, Text } from 'react-native';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useActorEdit } from './useActorEdit';
import { Button, Layout, Loader } from '@/components/ui';
import AdminNavigation from '@/components/ui/admin/navigation/AdminNavigation';
import { IActorEditInput } from '@/shared/types/movie.interface';

const ActorEdit = () => {
  const { control, setValue, handleSubmit } = useForm<IActorEditInput>({
    mode: 'onChange',
  });

  const { isLoading, onSubmit } = useActorEdit(setValue);

  return (
    <Layout isHasPadding>
      <AdminNavigation title='Edit actor' isBackButton />
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

export default ActorEdit;
