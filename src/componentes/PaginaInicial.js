import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

export default function PaginaInicial({ navigation, route }) {
  // Lista inicial com pelo menos 3 imóveis pré-cadastrados
  const imoveis = [
    { id: '1', titulo: 'Título do anúncio', descricao: 'Breve descrição do anúncio', valor: 'R$ Valor' },
    { id: '2', titulo: 'Título do anúncio', descricao: 'Breve descrição do anúncio', valor: 'R$ Valor' },
    { id: '3', titulo: 'Título do anúncio', descricao: 'Breve descrição do anúncio', valor: 'R$ Valor' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.tituloHeader}>3 Cores Imobiliária</Text>
        <TouchableOpacity
          style={styles.btnCadastrarNovo}
          onPress={() => navigation.navigate('CadastroImovel')}
        >
          <Text style={styles.txtBtnCadastrarNovo}>Cadastrar novo imóvel</Text>
        </TouchableOpacity>
        <Text style={styles.subtitulo}>Nossos imóveis:</Text>
      </View>

      {imoveis.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.card}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('PaginaImovel', { imovel: item })}
        >
          <View style={styles.caixaImagem}>
            <Text style={styles.txtImagem}>ESPAÇO{'\n'}PARA{'\n'}IMAGEM</Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.tituloCard}>{item.titulo}</Text>
            <Text style={styles.descCard}>{item.descricao}</Text>
            <Text style={styles.valorCard}>{item.valor}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  banner: {
    height: 100,
    backgroundColor: '#cbd5e1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#EDC4B3',
    padding: 16,
    alignItems: 'center',
  },
  tituloHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  btnCadastrarNovo: {
    backgroundColor: '#545947',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  txtBtnCadastrarNovo: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  subtitulo: {
    alignSelf: 'flex-start',
    marginTop: 12,
    fontSize: 14,
    color: '#000',
  },
  card: {
    backgroundColor: '#A5DDD6',
    flexDirection: 'row',
    padding: 12,
    marginTop: 6,
    alignItems: 'center',
  },
  caixaImagem: {
    width: 105,
    height: 105,
    backgroundColor: '#d1d5db',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  txtImagem: {
    fontSize: 11,
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  infoCard: {
    flex: 1,
  },
  tituloCard: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  descCard: {
    fontSize: 12,
    color: '#000',
    marginBottom: 8,
  },
  valorCard: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});