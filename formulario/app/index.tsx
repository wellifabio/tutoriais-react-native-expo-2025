import { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0ffff"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 20,
    color: "#990000"
  },
  text: {
    fontSize: 16,
    color: "#333"
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
    margin: 10,
    borderRadius: 5,
    fontSize: 16,
  }
});

export default function Index() {

  // Variáveis de estado para armazenar os nomes
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");

  // Função para juntar os nomes
  function juntarNomes() {
    setNomeCompleto(`${nome} ${sobrenome}`);
  }

  return (
    <View
      style={styles.container}
    >
      <Text style={styles.title}>Juntar Nomes</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o primeiro nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite o sobrenome"
        value={sobrenome}
        onChangeText={setSobrenome}
      />
      <Button
        title="Juntar Nomes"
        color={"#990000"}
        onPress={juntarNomes}
      />
      <Text style={styles.text}>Resultado: {nomeCompleto}</Text>
    </View>
  );
}
