import { View, Text } from 'react-native';
import React from 'react';
import { Layout } from '@/components/ui';
import AdminNavigation from '@/components/ui/admin/navigation/AdminNavigation';
import { useGenres } from './useGenres';
import AdminHeader from '@/components/ui/admin/table-header/AdminHeader';
import AdminTable from '@/components/ui/admin/table/AdminTable';

const GenresList = () => {
  const { control, isLoading, data, deleteAsync, createAsync } = useGenres();

  return (
    <Layout isHasPadding>
      <AdminNavigation title='Genres' />
      <AdminHeader control={control} onPress={createAsync} />
      <AdminTable
        tableItems={data}
        isLoading={isLoading}
        headerItems={['Name', 'Slug']}
        removeHandler={deleteAsync}
      />
    </Layout>
  );
};

export default GenresList;
