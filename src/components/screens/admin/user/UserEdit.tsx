import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { Control, Controller, useForm } from 'react-hook-form';
import { IUserEdit } from '@/shared/types/user.interface';
import { useUserEdit } from './useUserEdit';
import { Button, Layout, Loader } from '@/components/ui';
import AdminNavigation from '@/components/ui/admin/navigation/AdminNavigation';
import AuthFields from '../../auth/AuthFields';
import { IAuthFormData } from '@/shared/types/auth.interface';

const UserEdit = () => {
  const { control, setValue, handleSubmit } = useForm<IUserEdit>({
    mode: 'onChange',
  });

  const { isLoading, onSubmit } = useUserEdit(setValue);

  return (
    <Layout isHasPadding>
      <AdminNavigation title='Edit user' isBackButton />
      <View>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <AuthFields
              control={control as unknown as Control<IAuthFormData>}
            />
            <Controller
              control={control}
              name='isAdmin'
              render={({ field: { onChange, value } }) => (
                <Pressable
                  className='my-5 w-40'
                  onPress={() => onChange(!value)}
                >
                  <Text className='underline text-white text-base'>
                    {value ? 'Make It regular user' : 'Make it admin'}
                  </Text>
                </Pressable>
              )}
            />
            <Button onPress={handleSubmit(onSubmit)} icon='pen-tool'>
              Update
            </Button>
          </>
        )}
      </View>
    </Layout>
  );
};

export default UserEdit;
