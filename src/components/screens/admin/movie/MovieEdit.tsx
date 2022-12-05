import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useMovieEdit } from './useMovieEdit';
import { Button, Field, Layout, Loader } from '@/components/ui';
import AdminNavigation from '@/components/ui/admin/navigation/AdminNavigation';
import { IMovieEditInput } from '@/shared/types/movie.interface';
import SlugWrapper from '@/components/ui/form-elements/field/SlugWrapper';
import { generateSlug } from '@/utils/generateSlug';
import UploadField from '@/components/ui/form-elements/upload-field/UploadField';
import Dropdown from '@/components/ui/form-elements/dropdown/Dropdown';
import { useAdminActors } from './useAdminActors';
import { useAdminGenres } from './useAdminGenres';

const MovieEdit = () => {
  const { control, setValue, handleSubmit, getValues } =
    useForm<IMovieEditInput>({
      mode: 'onChange',
    });

  const { isLoading, onSubmit } = useMovieEdit(setValue);

  const { isLoading: isGenresLoading, data: genres } = useAdminGenres();
  const { isLoading: isActorsLoading, data: actors } = useAdminActors();

  return (
    <Layout isHasPadding>
      <AdminNavigation title='Edit movie' isBackButton />
      <View>
        {isLoading ? (
          <Loader />
        ) : (
          <ScrollView showsHorizontalScrollIndicator={false}>
            <Field<IMovieEditInput>
              control={control}
              name='title'
              key='name'
              placeholder='Enter title'
              rules={{
                required: 'Title is required!',
              }}
            />
            <SlugWrapper
              generate={() =>
                setValue('slug', generateSlug(getValues('title')))
              }
            >
              <Field<IMovieEditInput>
                control={control}
                name='slug'
                placeholder='Enter slug'
                rules={{
                  required: 'Slug is required!',
                }}
              />
            </SlugWrapper>
            <Field<IMovieEditInput>
              control={control}
              name='parameters.country'
              placeholder='Enter country'
              rules={{
                required: 'Country is required!',
              }}
            />
            <View className='flex-row flex-wrap justify-between'>
              <View style={{ width: '56%' }}>
                <Field<IMovieEditInput>
                  control={control}
                  name='parameters.duration'
                  placeholder='Enter duration'
                  rules={{
                    required: 'Duration is required!',
                  }}
                />
              </View>
              <View style={{ width: '40%' }}>
                <Field<IMovieEditInput>
                  control={control}
                  name='parameters.year'
                  placeholder='Enter year'
                  rules={{
                    required: 'Year is required!',
                  }}
                  keyboardType='number-pad'
                />
              </View>
            </View>
            <Controller
              control={control}
              name='genres'
              render={({ field, fieldState: { error } }) => (
                <Dropdown
                  options={genres}
                  field={field}
                  isLoading={isGenresLoading}
                  isMulti
                  error={error}
                  style={{
                    zIndex: 11,
                  }}
                />
              )}
              rules={{
                required: 'Please select at least one genre!',
              }}
            />

            <Controller
              name='actors'
              control={control}
              rules={{
                required: 'Please dropdown at least one actor!',
              }}
              render={({ field, fieldState: { error } }) => (
                <Dropdown
                  field={field}
                  options={actors}
                  isMulti
                  error={error}
                />
              )}
            />
            <Controller
              control={control}
              name='poster'
              defaultValue=''
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => (
                <UploadField
                  onChange={onChange}
                  value={value}
                  error={error}
                  folder='movies'
                  placeholder='Poster'
                />
              )}
              rules={{
                required: 'Poster is required!',
              }}
            />
            <Controller
              control={control}
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => (
                <UploadField
                  isNoImage
                  onChange={onChange}
                  value={value}
                  error={error}
                  placeholder='Video'
                  folder='movies'
                  gradient={['#4361A6', '#254584']}
                />
              )}
              name='videoUrl'
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

export default MovieEdit;
