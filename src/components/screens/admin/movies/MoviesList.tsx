import { View, Text } from 'react-native';
import React from 'react';
import { Layout } from '@/components/ui';
import AdminNavigation from '@/components/ui/admin/navigation/AdminNavigation';
import { useMovies } from './useMovies';
import AdminHeader from '@/components/ui/admin/table-header/AdminHeader';
import AdminTable from '@/components/ui/admin/table/AdminTable';

const MoviesList = () => {
  const { control, isLoading, data, deleteAsync, createAsync } = useMovies();

  return (
    <Layout isHasPadding>
      <AdminNavigation title='Movies' />
      <AdminHeader control={control} onPress={createAsync} />
      <AdminTable
        tableItems={data}
        isLoading={isLoading}
        headerItems={['Title', 'Main Genre', 'Rating']}
        removeHandler={deleteAsync}
      />
    </Layout>
  );
};

export default MoviesList;
