import { View, Text, Animated, ScrollView } from 'react-native';
import React, { FC, useRef } from 'react';
import { useScrollToTop } from '@react-navigation/native';
import MovieInfo from './MovieInfo';
import { IMovieComponent } from './../movie-page.interface';
import ActorCarousel from './ActorCarousel';
import RelatedMovies from './RelatedMovies';
import { HEADER_HEIGHT } from '../movie.constant';
import { Heading } from '@/components/ui';
import VideoPlayer from '../VideoPlayer';

const MovieContent: FC<IMovieComponent> = ({ movie, y }) => {
  const ref = useRef<ScrollView>(null);
  useScrollToTop(ref);
  return (
    <Animated.ScrollView
      scrollEnabled
      ref={ref}
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={16}
      automaticallyAdjustsScrollIndicatorInsets
      onScroll={Animated.event(
        [
          {
            nativeEvent: { contentOffset: { y } },
          },
        ],
        {
          useNativeDriver: true,
        }
      )}
      contentContainerStyle={{
        paddingTop: HEADER_HEIGHT / 1.3,
      }}
    >
      <MovieInfo movie={movie} y={y} />
      <View className='bg-[#090909] px-6 pt-1 pb-24'>
        <VideoPlayer video={movie.videoUrl} />
        <ActorCarousel actors={movie.actors} />
        <RelatedMovies
          currentMovieId={movie._id}
          genresIds={movie.genres.map(({ _id }) => _id)}
        />
      </View>
    </Animated.ScrollView>
  );
};

export default MovieContent;
