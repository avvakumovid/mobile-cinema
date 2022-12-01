import React, { useEffect, useState } from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import PrivateNavigator from './PrivateNavigator';
import { BottomMenu } from '@/components/ui';
import { useAuth } from '@/hooks/useAuth';
import { useCheckAuth } from './../providers/auth/useCheckAuth';

const Navigation = () => {
  const { user } = useAuth();
  const [currentRoute, setCurrentRoute] = useState<string | undefined>();

  const navRef = useNavigationContainerRef();

  useEffect(() => {
    setCurrentRoute(navRef.getCurrentRoute()?.name);
    const listener = navRef.addListener('state', () =>
      setCurrentRoute(navRef.getCurrentRoute()?.name)
    );
    return () => {
      navRef.removeListener('state', listener);
    };
  }, []);

  useCheckAuth(currentRoute);

  return (
    <>
      <NavigationContainer ref={navRef}>
        <PrivateNavigator />
        {user && currentRoute && (
          <BottomMenu nav={navRef.navigate} currentRoute={currentRoute} />
        )}
      </NavigationContainer>
    </>
  );
};

export default Navigation;
