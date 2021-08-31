import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {ImageBackground,SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames'
import Header from './components/Header'
import Chat from './components/Chat'
import Actions from './components/Actions';

export default function App() {
  return (
    <SafeAreaProvider>
    <SafeAreaView style={tw`flex-1 text-black`}>
      <Header />
      <ImageBackground 
        style={{
          flex: 1
        }}
        source={require('./assets/background.png')}  resizeMode="cover">
        <Chat />
        <Actions />
      </ImageBackground>
      <StatusBar 
        animated={true}
        backgroundColor="green"
       />
    </SafeAreaView>
    </SafeAreaProvider>
  );
}
