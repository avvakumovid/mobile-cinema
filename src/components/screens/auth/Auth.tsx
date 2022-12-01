import { StyleSheet, Text, View, Pressable } from 'react-native';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IAuthFormData } from '@/shared/types/auth.interface';
import { Button, Field, Loader } from '@/components/ui';
import AuthFields from './AuthFields';
import { DismissKeyboard } from '@/components/ui';
import { useAuthMutations } from './useAuthMutations';
import axios from 'axios';

const Auth = () => {
  const [isReg, setIsReg] = useState(false);

  const { handleSubmit, reset, control } = useForm<IAuthFormData>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<IAuthFormData> = async data => {
    if (isReg) {
      registerSync(data);
    } else {
      loginSync(data);
    }
  };

  const { isLoading, loginSync, registerSync } = useAuthMutations(reset);

  return (
    <DismissKeyboard>
      <View className='mx-2 items-center justify-center h-full'>
        <View className='w-9/12'>
          <Text className='text-center text-white text-4xl font-bold mb-2.5'>
            {isReg ? 'Register' : 'Login'}
          </Text>

          {isLoading ? (
            <Loader />
          ) : (
            <>
              <AuthFields control={control} isPassRequired={true} />
              <Button onPress={handleSubmit(onSubmit)} icon='film'>
                Go to watch
              </Button>
              <Pressable onPress={async () => setIsReg(!isReg)}>
                <Text className='text-white opacity-30 text-right text-base mt-3'>
                  {isReg ? 'Login' : 'Register'}
                </Text>
              </Pressable>
            </>
          )}
        </View>
      </View>
    </DismissKeyboard>
  );
};

export default Auth;
