import React from 'react';
import { Stack } from 'expo-router';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#666',
  },
});
const Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: styles.container,
        headerTitleStyle: { color: '#fff' },
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Lista de Posts' }} />
      <Stack.Screen name="dets" options={{ title: 'Detalhes do Post' }} />
    </Stack>
  );
};
export default Layout;