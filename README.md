# Expo All Command and Process To I Use

## 1. npx rn-new@latest --nativewind

### this 1 no. process expo and taiwind css added

### (tailwind.config.js file)

<!-- /** @type {import('tailwindcss').Config} \*/
module.exports = {
// NOTE: Update this to include the paths to all of your component files.
content: ['./app/**/_.{js,jsx,ts,tsx}', './components/\*\*/_.{js,jsx,ts,tsx}'],
presets: [require('nativewind/preset')],
theme: {
extend: {
colors: {
primary: '#333333',
accent: '#767676',
link: '#137cec',
purplePrimary: '#6200EE',
purpleAccent: '#AB67BC',
purpleButton: '#9654F4',
customBlack: '#111111',
},
borderColor: {
primary: '#A1A1A1',

},
boxShadow: {
ios: '0px 1px 2px rgba(0, 0, 0, 0.16)',
android: '0px 1px 4px rgba(0, 0, 0, 0.40)',
'ios-secondary': '0px 1px 4px rgba(0, 0, 0, 0.30)',
'android-secondary': '0px 1px 4px rgba(0, 0, 0, 0.40)',
'ios-tertiary': '0px 8px 8px 0px #00000033',
'android-tertiary': '0px 8px 8px 0px #050505',
'ios-quaternary': '0px 2px 2px 0px #00000026',
'android-quaternary': '0px 2px 8px 0px #00000026',
},
},
},
plugins: [],
}; -->

## react navigaition install process and dependency

### 1 npm install @react-navigation/native

### 2 npx expo install react-native-screens react-native-safe-area-context

### 3 npm install @react-navigation/native-stack

### (App.js file)

<!-- import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from 'screens/HomeScreen';

import './global.css'; 🔥

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
} -->

### (screens/HomeScreen.js file)

import { View, Text, Image } from 'react-native';
import React from 'react';

const HomeScreen = () => {
return (
<View className="relative flex-1">
<Image className="absolute h-full w-full " source={require('../assets/images/night.jpg')} />
<Text className="h-22 w-32 bg-red-600 font-bold">HomeScreen</Text>
<Text>Polash</Text>
</View>
);
};

export default HomeScreen;
