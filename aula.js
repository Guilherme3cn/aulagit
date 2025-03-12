import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

class MeuApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '', // Variável que armazena o texto digitado
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Digite seu nome:</Text>
        <TextInput
          style={styles.input}
          placeholder="Seu nome aqui"
          placeholderTextColor="#888"
          onChangeText={(texto) => this.setState({ nome: texto })} // Atualiza o estado ao digitar
        />
        <Text style={styles.resultado}>Olá, {this.state.nome}!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
    paddingLeft: 10,
    marginBottom: 20,
  },
  resultado: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default MeuApp;
