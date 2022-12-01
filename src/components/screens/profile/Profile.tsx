import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { AuthService } from '@/services/auth/auth.service';
import { useAuth } from '@/hooks/useAuth';
import { AntDesign } from '@expo/vector-icons';
import { deleteItemAsync, getItemAsync } from 'expo-secure-store';
import { EnumSecureStore } from '@/shared/types/auth.interface';

const Profile = () => {
  const { setUser } = useAuth();

  return (
    <View className='mt-20 px-10'>
      <Pressable
        className='p-3'
        onPress={() => deleteItemAsync(EnumSecureStore.ACCESS_TOKEN)}
      >
        <Text className='text-white'>Clear accessToken</Text>
      </Pressable>
      <Pressable
        className='p-3'
        onPress={() => deleteItemAsync(EnumSecureStore.REFRESH_TOKEN)}
      >
        <Text className='text-white'>Clear refreshToken</Text>
      </Pressable>
      <Pressable
        className='p-3'
        onPress={() =>
          getItemAsync(EnumSecureStore.ACCESS_TOKEN).then(data =>
            console.log(data)
          )
        }
      >
        <Text className='text-white'>Show accessToken</Text>
      </Pressable>
      <Pressable
        className='p-3'
        onPress={() =>
          getItemAsync(EnumSecureStore.REFRESH_TOKEN).then(data =>
            console.log(data)
          )
        }
      >
        <Text className='text-white'>Show refreshToken</Text>
      </Pressable>

      <Pressable
        onPress={() => AuthService.logout().then(() => setUser(null))}
        className='opacity-40 items-center flex-row justify-end'
      >
        <AntDesign name={'logout'} size={18} color='white' />
        <Text className='text-white text-lg ml-2'>Logout</Text>
      </Pressable>
    </View>
  );
};

export default Profile;
