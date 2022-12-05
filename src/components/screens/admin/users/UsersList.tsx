import { View, Text } from 'react-native';
import React from 'react';
import { Layout } from '@/components/ui';
import AdminNavigation from '@/components/ui/admin/navigation/AdminNavigation';
import { useUsers } from './useUsers';
import AdminHeader from '@/components/ui/admin/table-header/AdminHeader';
import AdminTable from '@/components/ui/admin/table/AdminTable';

const UsersList = () => {
  const { control, isLoading, data, deleteAsync } = useUsers();

  return (
    <Layout isHasPadding>
      <AdminNavigation title='Users' />
      <AdminHeader control={control} />
      <AdminTable
        tableItems={data}
        isLoading={isLoading}
        headerItems={['Email', 'Date Register']}
        removeHandler={deleteAsync}
      />
    </Layout>
  );
};

export default UsersList;
