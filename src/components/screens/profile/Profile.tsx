import { View, Text, Pressable, Image } from 'react-native';
import React from 'react';
import { AuthService } from '@/services/auth/auth.service';
import { useAuth } from '@/hooks/useAuth';
import { AntDesign } from '@expo/vector-icons';
import { Heading } from '@/components/ui';
import AuthFields from '../auth/AuthFields';
import { useForm } from 'react-hook-form';
import { IAuthFormData } from './../../../shared/types/auth.interface';
import { Button, Loader } from '@/components/ui';
import { useProfile } from './useProfile';
import { useScaleOnMount } from '@/hooks/useScaleOnMount';
import Animated from 'react-native-reanimated';
import { Layout } from '@/components/ui';


const Profile = () => {
  const { setUser } = useAuth();
  const { handleSubmit, control, setValue } = useForm<IAuthFormData>();
  const { onSubmit, isLoading } = useProfile(setValue);

  const { styleAnimation } = useScaleOnMount();

  return (
    <Layout isHasPadding>
      <Heading title='Profile' />
      <Animated.View
        style={styleAnimation}
        className='my-6 items-center justify-center'
      >
        <Image
          source={require('./avatar-guest.jpg')}
          className='h-40 w-40 rounded-2xl'
        />
      </Animated.View>

      {isLoading ? (
        <Loader />
      ) : (
        <View className='mb-10'>
          <AuthFields control={control} />
          <Button icon='edit' onPress={handleSubmit(onSubmit)}>
            Update profile
          </Button>
        </View>
      )}

      <Pressable
        onPress={() => AuthService.logout().then(() => setUser(null))}
        className='opacity-40 items-center flex-row justify-end'
      >
        <AntDesign name={'logout'} size={18} color='white' />
        <Text className='text-white text-lg ml-2'>Logout</Text>
      </Pressable>
    </Layout>
  );
};

export default Profile;
