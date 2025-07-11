import { StatusBar } from 'expo-status-bar';

import './global.css';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <>
      <View>
        <Text className="h-23 w-7 bg-red-500 font-bold">Home</Text>
      </View>
    </>
  );
}
