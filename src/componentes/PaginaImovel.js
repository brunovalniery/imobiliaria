import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

export default function PaginaImovel({ route, navigation }) {
  const { imovel } = route.params || {
    titulo: 'TÍTULO DO ANÚNCIO',
    descricao: 'Breve descrição do anúncio Breve descrição do anúncio Breve descrição do anúncio Breve descrição do anúncio Breve descrição do anúncio.',
    valor: 'R$ VALOR',
  };

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.tituloTela}>Detalhes do imóvel:</Text>

      <View style={styles.caixaImagemGrande}>
        <Text style={styles.txtImagem}>ESPAÇO{'\n'}PARA{'\n'}IMAGEM</Text>
      </View>

      <View style={styles.corpo}>
        <Text style={styles.tituloAnuncio}>{imovel.titulo.toUpperCase()}</Text>
        <Text style={styles.descricaoAnuncio}>{imovel.descricao}</Text>
        <Text style={styles.valorAnuncio}>{imovel.valor.toUpperCase()}</Text>

        <TouchableOpacity
          style={styles.btnExcluir}
          onPress={() => {
            alert('Imóvel excluído!');
            navigation.navigate('PaginaInicial');
          }}
        >
          <Text style={styles.txtBtnExcluir}>Excluir imóvel</Text>
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
  tituloTela: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 10,
  },
  caixaImagemGrande: {
    height: 200,
    backgroundColor: '#d1d5db',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtImagem: {
    fontSize: 13,
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  corpo: {
    padding: 20,
    alignItems: 'center',
  },
  tituloAnuncio: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  descricaoAnuncio: {
    fontSize: 12,
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 18,
  },
  valorAnuncio: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 25,
  },
  btnExcluir: {
    backgroundColor: '#AC3131',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 4,
  },
  txtBtnExcluir: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  btnVoltar: {
    marginTop: 20,
  },
  txtBtnVoltar: {
    color: '#000',
    textDecorationLine: 'underline',
    fontSize: 13,
  },
});