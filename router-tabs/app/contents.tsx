import { useEffect, useState } from "react";
import { Text, View, Image, FlatList } from "react-native";
import { StyleSheet } from "react-native";
import React from 'react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 35,
    height: 35,
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  const [lista, setList] = useState<string[]>([]);

  async function fetchData() {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await response.json();
    console.log(data);
    setList(Object.keys(data.message));
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}
    >
      <Text style={styles.title}>Lista de Biuxinhos</Text>
      <FlatList
        style={{ width: '100%' }}
        data={lista}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item.charAt(0).toUpperCase() + item.slice(1)}</Text>
            <Image
              source={{ uri: `https://cdn-icons-png.flaticon.com/512/12/12638.png` }}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
        )}
      />
      <Text style={styles.text}>Total de raças: {lista.length}</Text>
      <Text style={styles.text}>Atualizado em: {new Date().toLocaleString()}</Text>
      <Text style={styles.text}>Fonte: Dog CEO API</Text>
      <Text style={styles.text}>https://dog.ceo/dog-api/</Text>
    </View>
  );
}
