import { Text, View, Image } from "react-native";
import { StyleSheet } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import React from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
});

export default function Index() {
  const params = useLocalSearchParams();
  console.log('params', params);
  return (
    <View
      style={styles.container}
    >
      <Image
        source={{ uri: Array.isArray(params.image) ? params.image[0] : params.image }}
        style={{ width: 300, height: 300, marginBottom: 20 }}
        resizeMode="cover"
      />
      <Text style={styles.title}>{params.title}</Text>
      <Text style={styles.text}>{params.content}</Text>
    </View>
  );
}
