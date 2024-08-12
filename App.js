import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { WebView } from 'react-native-webview';

// Importera din bild från assets-mappen
import angelDevilImage from './assets/AngelDevil.png';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Bild */}
      <Image 
        source={angelDevilImage} 
        style={styles.image}
      />
      
      {/* WebView för att visa webbsidan */}
      <View style={styles.webviewContainer}>
        <WebView 
          source={{ uri: 'https://chatgpt.com/g/g-I0j6Vr00z-angel-s-and-devil-s-voice' }} 
          style={styles.webview}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: 300,
    height: 150,
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: 5,
  },
  webviewContainer: {
    flex: 1,
    width: '100%',
    marginTop: -5,
  },
  webview: {
    flex: 1,
  },
});
