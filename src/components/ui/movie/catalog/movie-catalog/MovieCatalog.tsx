import { View, Text, Pressable, ScrollView } from 'react-native';
import React, { FC } from 'react';
import { IMovieCatalog } from './movie-catalog.interface';
import { useTypedNavigation } from '@/hooks/useTypedNavigation';
import { Description, Heading } from '@/components/ui';
import { Ionicons } from '@expo/vector-icons';
import MovieItem from '../../movie-item/MovieItem';

const MovieCatalog: FC<IMovieCatalog> = ({
  title,
  description,
  isBackButton,
  movies = [],
}) => {
  const { goBack } = useTypedNavigation();

  return (
    <View>
      <View className='flex-row items-center, justify-between'>
        <Heading title={title} className='mb-3' />
        {isBackButton && (
          <Pressable onPress={goBack}>
            <Ionicons
              name='arrow-back-circle-outline'
              size={32}
              color='white'
            />
          </Pressable>
        )}
      </View>
      {description && <Description text={description} />}

      <ScrollView showsVerticalScrollIndicator={false}>
        <View className='flex-row flex-wrap justify-between mt-5 mb-32'>
          {movies?.length ? (
            movies.map((movie, index) => (
              <View className='mb-6' key={movie._id}>
                <MovieItem index={index} movie={movie} className='w-40' />
              </View>
            ))
          ) : (
            <Text className='text-white text-lg'>Elements not found</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default MovieCatalog;
