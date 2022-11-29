import { TextInput, View, Text } from 'react-native';
import React from 'react';
import { IField } from './field.interface';
import cn from 'clsx';
import { Controller } from 'react-hook-form';

const Field = <T extends Record<string, any>>({
  control,
  rules,
  name,
  className,
  ...rest
}: IField<T>): JSX.Element => {
  return (
    <Controller 
      control={control}
      rules={rules}
      name={name}
      render={({
        field: { onChange, value, onBlur },
        fieldState: { error },
      }) => {
        return (
          <>
            <View
              className={cn(
                'bg-[#232323] w-full border rounded-lg pb-4 pt-2.5 px-4 my-1.5',
                error ? 'border-red' : 'border-transparent'
              )}
            >
              <TextInput
                autoCapitalize='none'
                onChangeText={onChange}
                onBlur={onBlur}
                value={(value || '').toString()}
                className='text-white text-base'
                {...rest}
              />
            </View>
            {error && <Text className='text-red'>{error.message}</Text>}
          </>
        );
      }}
    />
  );
};

export default Field;
