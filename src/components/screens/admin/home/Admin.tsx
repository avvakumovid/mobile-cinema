import { ScrollView, Text, View } from 'react-native';
import React, { FC } from 'react';
import { AdminNavigation, Layout } from '@/components/ui';
import Statistics from './statistics/Statistics';

const Admin: FC = () => {
  return (
    <Layout isHasPadding>
      <AdminNavigation title={'Statistics'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Statistics />
      </ScrollView>
    </Layout>
  );
};

export default Admin;
