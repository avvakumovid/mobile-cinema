import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import PrivateNavigator from './PrivateNavigator';

const Navigation = () => {
  return (
    <NavigationContainer>
      <PrivateNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
