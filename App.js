import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, LogBox, Text, View } from 'react-native';
import Header from './components/header';
import Main from './components/main';
import ImgUpload from './components/imgUpload';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { LogBox } from 'react-native';
export default function App() {
  const Stack = createStackNavigator();
  LogBox.ignoreLogs(['Setting a timer']);
  // this is comment
  return (
    <>
      <NavigationContainer>
        {/* <Header /> */}
        <Stack.Navigator>
          <Stack.Screen name="Home " component={Main} />
          <Stack.Screen name="Proof" component={ImgUpload} />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <Main /> */}
      {/* <View style={styles.container}>
      <StatusBar style="auto" />
    </View> */}

      {/* <ImgUpload /> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
