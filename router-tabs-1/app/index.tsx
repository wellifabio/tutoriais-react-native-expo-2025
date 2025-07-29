import { useEffect, useState } from "react";
import { Text, View, Image, Button } from "react-native";
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
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  text: {
    fontSize: 18,
    color: '#333',
  }
});

export default function Index() {
  const [img, setImg] = useState('https://images.dog.ceo/breeds/terrier-russell/iguet3.jpg');
  const [nome, setNome] = useState('terrier-russell');

  async function fetchData() {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    setImg(data.message);
    //Deixando a primeira letra maiúscula e formatando o nome
    setNome(data.message.split('/')[4].split('-').join(' ').charAt(0).toUpperCase() + data.message.split('/')[4].split('-').join(' ').slice(1));
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}
    >
      <Image source={{ uri: img }} style={styles.image} />
      <Text style={styles.title}>Biuxinhos fofos</Text>
      <Text style={styles.text}>{nome}</Text>
      <Button
        title="Clique para ver mais"
        onPress={fetchData}
      />
    </View>
  );
}
