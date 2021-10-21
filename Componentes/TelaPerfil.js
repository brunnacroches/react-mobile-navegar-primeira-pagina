import React from 'react';
import { Text, View } from 'react-native';
import estilo from './styles';

export default function TelaPerfil () {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>
        Tela do Perfil
      </Text>
    </View>
  );
}