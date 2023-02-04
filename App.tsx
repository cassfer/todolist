import {StatusBar, StyleSheet, Text, View} from 'react-native';

import { Home } from './src/view/Home';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <LinearGradient
        colors={['#1A1A1A', '#0D0D0D',]}
        style={{'flex': 1}}
        locations={[0.8, 0.8]}
        start={{'x': 0.0, 'y': 0.7}}
        end={{'x': 0.0, 'y': 0.1}}
      >
        <Home/>
      </LinearGradient>
    </>
  );
}