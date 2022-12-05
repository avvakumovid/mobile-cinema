import { View, Text, Pressable } from 'react-native';
import React, { FC, PropsWithChildren } from 'react';

const SlugWrapper: FC<PropsWithChildren<{ generate: () => void }>> = ({
  generate,
  children,
}) => {
  return (
    <View>
      {children}
      <Pressable
        onPress={generate}
        className='absolute top-5 right-3 cursor-pointer rounded-lg py-0.5 px-2 border-gray-500 bg-gray-500'
      >
        <Text className='uppercase text-white'>generate</Text>
      </Pressable>
    </View>
  );
};

export default SlugWrapper;
