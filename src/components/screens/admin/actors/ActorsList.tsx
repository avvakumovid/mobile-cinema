import { View, Text } from 'react-native';
import React from 'react';
import { Layout } from '@/components/ui';
import AdminNavigation from '@/components/ui/admin/navigation/AdminNavigation';
import { useActors } from './useActors';
import AdminHeader from '@/components/ui/admin/table-header/AdminHeader';
import AdminTable from '@/components/ui/admin/table/AdminTable';

const ActorsList = () => {
  const { control, isLoading, data, deleteAsync, createAsync } = useActors();

  return (
    <Layout isHasPadding>
      <AdminNavigation title='Actors' />
      <AdminHeader control={control} onPress={createAsync} />
      <AdminTable
        tableItems={data}
        isLoading={isLoading}
        headerItems={['Name', 'Count Movies']}
        removeHandler={deleteAsync}
      />
    </Layout>
  );
};

export default ActorsList;
