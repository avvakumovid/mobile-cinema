import { View, Text, Animated, FlatList, Platform } from 'react-native';
import React, { FC, useRef } from 'react';
import { IMovie } from '@/shared/types/movie.interface';
import CarouselItem from './CarouselItem/CarouselItem';
import { ITEM_SIZE, EMPTY_ITEM_SIZE } from './carousel.constants';

const Carousel: FC<{ movies: IMovie[] }> = ({ movies }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <View>
      <Animated.FlatList
        data={[
          { _id: 'first' } as IMovie,
          ...movies,
          { _id: 'last' } as IMovie,
        ]}
        showsHorizontalScrollIndicator={false}
        horizontal
        bounces={false}
        renderToHardwareTextureAndroid
        contentContainerStyle={{
          alignItems: 'center',
        }}
        keyExtractor={item => item._id}
        scrollEventThrottle={16}
        snapToInterval={ITEM_SIZE}
        snapToAlignment='start'
        decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
        onScroll={Animated.event(
          [
            {
              nativeEvent: { contentOffset: { x: scrollX } },
            },
          ],
          { useNativeDriver: true }
        )}
        renderItem={({ item: movie, index }) =>
          movie?.slug ? (
            <CarouselItem movie={movie} scrollX={scrollX} index={index} />
          ) : (
            <View
              style={{
                width: EMPTY_ITEM_SIZE,
              }}
            />
          )
        }
      ></Animated.FlatList>
    </View>
  );
};

export default Carousel;
