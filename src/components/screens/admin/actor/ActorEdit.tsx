import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useActorEdit } from './useActorEdit';
import { Button, Field, Layout, Loader } from '@/components/ui';
import AdminNavigation from '@/components/ui/admin/navigation/AdminNavigation';
import {
  IActorEditInput,
  IGenreEditInput,
} from '@/shared/types/movie.interface';
import SlugWrapper from '@/components/ui/form-elements/field/SlugWrapper';
import { generateSlug } from '@/utils/generateSlug';
import TextEditor from '@/components/ui/form-elements/text-editor/TextEditor';
import UploadField from '@/components/ui/form-elements/upload-field/UploadField';

const ActorEdit = () => {
  const { control, setValue, handleSubmit, getValues } =
    useForm<IActorEditInput>({
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
          <ScrollView showsHorizontalScrollIndicator={false}>
            <Field<IActorEditInput>
              control={control}
              name='name'
              key='name'
              placeholder='Enter name'
              rules={{
                required: 'Name is required!',
              }}
            />
            <SlugWrapper
              generate={() => setValue('slug', generateSlug(getValues('name')))}
            >
              <Field<IActorEditInput>
                control={control}
                name='slug'
                key='slug'
                placeholder='Enter slug'
                rules={{
                  required: 'Slug is required!',
                }}
              />
            </SlugWrapper>
            <Controller
              control={control}
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => (
                <UploadField
                  onChange={onChange}
                  value={value}
                  error={error}
                  placeholder='Photo'
                  folder='actors'
                />
              )}
              name='photo'
              rules={{
                required: true,
              }}
            />
            <Button onPress={handleSubmit(onSubmit)} icon='pen-tool'>
              Update
            </Button>
          </ScrollView>
        )}
      </View>
    </Layout>
  );
};

export default ActorEdit;
