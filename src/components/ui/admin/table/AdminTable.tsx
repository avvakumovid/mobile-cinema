import { View, Text, ScrollView } from 'react-native';
import React, { FC } from 'react';
import { IAdminTable } from './admin-table.interface';
import AdminTableHeader from './AdminTableHeader';
import { Loader } from '@/components/ui';
import AdminTableItem from './AdminTableItem';

const AdminTable: FC<IAdminTable> = ({
  headerItems,
  isLoading,
  tableItems = [],
  removeHandler,
}) => {
  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal>
      <ScrollView className='pb-6'>
        <AdminTableHeader headerItems={headerItems} />

        {isLoading ? (
          <Loader />
        ) : tableItems?.length ? (
          tableItems.map(tableItem => (
            <AdminTableItem
              key={tableItem._id}
              removeHandler={() => removeHandler(tableItem._id)}
              tableItem={tableItem}
            />
          ))
        ) : (
          <Text className='text-white text-lg'>Elements not found</Text>
        )}
      </ScrollView>
    </ScrollView>
  );
};

export default AdminTable;
