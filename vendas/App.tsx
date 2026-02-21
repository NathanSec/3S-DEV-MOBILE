import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Image source={require('./images/bubla.webp')} style={styles.imagem} resizeMode='contain' />
      <Text style={styles.textStyle}>
        Bulbasaur usou Chicote de Vinha e causou X de dano!{'\n'}
        Squirtle usou Jato d'Água e causou Y de dano!{'\n'}
        Bulbasaur venceu!</Text>
      <StatusBar style="light" animated />
      <Image source={require('./images/gifSquirtle.webp')} style={styles.imagem} resizeMode='contain' />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  textStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    lineHeight: 24,
    paddingVertical: 12,
  },
  imagem: {
    height: 300,
    backgroundColor: 'transparent',
    alignSelf: 'center',
  },
});
