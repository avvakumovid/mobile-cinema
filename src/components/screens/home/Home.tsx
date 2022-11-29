import { Pressable, Text, View } from 'react-native';
import React from 'react';
import { useTypedNavigation } from '@/hooks/useTypedNavigation';

const Home = () => {
  const { navigate } = useTypedNavigation();

  return (
    <View className='mt-10'>
      <Text>Home</Text>
      <Pressable onPress={() => navigate('Auth')}>
        <Text
          style={{
            color: 'white',
          }}
        >
          Go To Login
        </Text>
      </Pressable>
    </View>
  );
};

export default Home;
