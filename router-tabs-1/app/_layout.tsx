import React from 'react';
import { Tabs } from 'expo-router';
import { StyleSheet, Image } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerStyle: styles.container,
        headerTitleStyle: { color: '#000' },
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#888',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 0,
          elevation: 0,
        },
      }}
    >
      <Tabs.Screen name="index" options={{
        title: 'Principal', headerShown: false, tabBarIcon: () => {
          return (
            <Image
              source={{ uri: 'https://dog.ceo/img/dog-api-logo.svg' }}
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
            />
          );
        },
      }} />
      <Tabs.Screen
        name="contents"
        options={{
          title: 'Conteúdo',
          headerShown: false,
          tabBarIcon: () => {
            return (
              <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/12/12638.png' }}
                style={{ width: 24, height: 24 }}
                resizeMode="contain"
              />
            );
          },
        }}
      />
    </Tabs>
  );
};
export default Layout;
