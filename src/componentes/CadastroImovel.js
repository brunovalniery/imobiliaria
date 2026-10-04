import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function CadastroImovel({ navigation }) {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');

  return (
    <ScrollView style={styles.container}>
      <View style={styles.conteudo}>
        <Text style={styles.tituloTela}>Cadastrar Imóvel</Text>

        <Text style={styles.label}>Título:</Text>
        <TextInput
          style={styles.input}
          value={titulo}
          onChangeText={setTitulo}
        />

        <Text style={styles.label}>Descrição</Text>
        <TextInput
          style={[styles.input, styles.inputMultiline]}
          multiline
          value={descricao}
          onChangeText={setDescricao}
        />

        <Text style={styles.label}>Valor R$:</Text>
        <TextInput
          style={styles.input}
          value={valor}
          onChangeText={setValor}
          keyboardType="numeric"
        />

        <TouchableOpacity
          style={styles.btnCadastrar}
          onPress={() => {
            alert('Imóvel cadastrado com sucesso!');
            navigation.navigate('PaginaInicial');
          }}
        >
          <Text style={styles.txtBtnCadastrar}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnVoltar}
          onPress={() => navigation.navigate('PaginaInicial')}
        >
          <Text style={styles.txtBtnVoltar}>Voltar à Página Inicial</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDC4B3',
  },
  banner: {
    height: 100,
    backgroundColor: '#cbd5e1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  conteudo: {
    padding: 20,
  },
  tituloTela: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 16,
  },
  label: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 10,
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#FFF',
    borderColor: '#737373',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
    width: '85%',
    alignSelf: 'center',
    color: '#000',
  },
  inputMultiline: {
    height: 60,
    textAlignVertical: 'top',
  },
  btnCadastrar: {
    backgroundColor: '#545947',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 4,
    alignSelf: 'center',
    marginTop: 25,
  },
  txtBtnCadastrar: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  btnVoltar: {
    alignSelf: 'center',
    marginTop: 18,
  },
  txtBtnVoltar: {
    color: '#000',
    textDecorationLine: 'underline',
    fontSize: 13,
  },
});