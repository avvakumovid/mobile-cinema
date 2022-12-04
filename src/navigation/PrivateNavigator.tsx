import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TypeRootStackParamList } from './navigation.types';
import { routes, userRoutes } from './user.routes';
import Screen404 from '@/components/screens/systems/Screen404';
import Auth from '@/components/screens/auth/Auth';

const Stack = createNativeStackNavigator<TypeRootStackParamList>();

const PrivateNavigator = () => {
  const { user } = useAuth();

  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {
          backgroundColor: '#090909',
        },
        headerShown: false,
        animation: 'fade',
      }}
    >
      {user ? (
        user.isAdmin ? (
          routes.map(route => <Stack.Screen key={route.name} {...route} />)
        ) : (
          userRoutes.map(route => <Stack.Screen key={route.name} {...route} />)
        )
      ) : (
        <Stack.Screen key='Auth' name='Auth' component={Auth} />
      )}
    </Stack.Navigator>
  );
};

export default PrivateNavigator;
