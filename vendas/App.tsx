import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { VideoView, useVideoPlayer } from 'expo-video';

import React from 'react';
import Texto from './components/Texto';

export default function App() {
  const player = useVideoPlayer('https://www.pexels.com/download/video/3752532/', player => {
      player.loop = true;
      player.play()
  })
  return (
    <ScrollView style={styles.container}>
      <Image source={require('./images/bubla.webp')} style={styles.imagem} resizeMode='contain' />
      <Texto estiloEspecifico={estilos.padrao}>
        Bulbasaur usou Chicote de Vinha e causou X de dano!{'\n'}
        Squirtle usou Jato d'Água e causou Y de dano!{'\n'}
        Bulbasaur venceu!</Texto>
      <StatusBar style="light" animated />
      <Image source={require('./images/gifSquirtle.webp')} style={styles.imagem} resizeMode='contain' />
      <VideoView player ={player} style={styles.video}
       allowsPictureInPicture/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  Texto: {
    
  },
  imagem: {
    height: 300,
    backgroundColor: 'transparent',
    alignSelf: 'center',
  },
  video: {
    width: 350,
    height: 275,
    alignSelf: 'center',
  }
});
