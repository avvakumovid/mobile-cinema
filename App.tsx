import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from '@/components/Header/Header';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Navigation from '@/navigation/Navigation';

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
      <StatusBar style='light' />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
