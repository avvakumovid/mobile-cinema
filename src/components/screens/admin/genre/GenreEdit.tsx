import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import {
  Controller,
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  useForm,
  UseFormStateReturn,
} from 'react-hook-form';
import { useGenreEdit } from './useGenreEdit';
import { Button, Field, Layout, Loader } from '@/components/ui';
import AdminNavigation from '@/components/ui/admin/navigation/AdminNavigation';
import { IGenreEditInput } from '@/shared/types/movie.interface';
import SlugWrapper from '@/components/ui/form-elements/field/SlugWrapper';
import { generateSlug } from '@/utils/generateSlug';
import TextEditor from '@/components/ui/form-elements/text-editor/TextEditor';

const GenreEdit = () => {
  const { control, setValue, handleSubmit, getValues } =
    useForm<IGenreEditInput>({
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
          <ScrollView showsHorizontalScrollIndicator={false}>
            <Field<IGenreEditInput>
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
              <Field<IGenreEditInput>
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
                <TextEditor onChange={onChange} value={value} error={error} />
              )}
              defaultValue=''
              name='description'
              rules={{
                validate: {
                  required: value => {
                    const replaceHTML = value.replace(/<(.|\n)*?>/g, '').trim();
                    const replaceWhiteSpace = replaceHTML
                      .replace(/&nbsp;/g, '')
                      .trim();

                    return (
                      replaceWhiteSpace.length > 0 || 'Description is required!'
                    );
                  },
                },
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

export default GenreEdit;
