import { View, Text } from 'react-native';
import React, { FC } from 'react';
import { ISearchFormData } from '@/components/screens/search/search.interface';
import { Control } from 'react-hook-form';
import { Field } from '@/components/ui';
import AdmitCreateButton from './AdmitCreateButton';

interface IAdminHeader {
  onPress?: () => void;
  control: Control<ISearchFormData>;
}

const AdminHeader: FC<IAdminHeader> = ({ control, onPress }) => {
  return (
    <View className='flex-row items-center justify-between mb-3'>
      <View
        style={{
          width: onPress ? '82%' : '100%',
        }}
      >
        <Field<ISearchFormData>
          placeholder='Type something...'
          control={control}
          name='searchTerm'
          keyboardType='web-search'
        />
      </View>

      {onPress && <AdmitCreateButton onPress={onPress} />}
    </View>
  );
};

export default AdminHeader;
