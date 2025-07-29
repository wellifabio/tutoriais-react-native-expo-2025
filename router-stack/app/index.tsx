import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { StyleSheet } from 'react-native';
import React from 'react';

import { posts } from './posts';
import { router } from 'expo-router';

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
  list: {
    width: '100%',
    paddingHorizontal: 20,
  },
  listItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default function Index() {
  const verDetalhes = (id: number, title: string, content: string, image: string) => {
    router.push(`/dets?id=${id}&title=${title}&content=${content}&image=${image}`); // Use router.push to navigate to the details page with parameters
  }
  return (
    <View style={styles.container}>
      <FlatList style={styles.list}
        data={posts}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.listItem} onPress={() => verDetalhes(item.id, item.title, item.content, item.image)}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.text}>{item.content}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
