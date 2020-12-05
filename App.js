import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header'
import Main from './components/main'
import ImgUpload from './image-upload-example/mobile/App'

export default function App() {
  return (
    <>
    <Header />
    <Main />
    <View style={styles.container}>
      <StatusBar style="auto" />
    </View>
    <ImgUpload />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
