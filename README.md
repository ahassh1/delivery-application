# 🚀 Expo Project Setup with NativeWind (Tailwind CSS) & React Navigation

This guide documents all commands and setup processes I use in my Expo + Tailwind CSS + React Navigation workflow.

---

## 📦 1. Create a New Expo Project with NativeWind

```bash
npx rn-new@latest --nativewind
```

> This initializes a new Expo project and sets up Tailwind CSS via NativeWind.

---

## 🎨 2. Tailwind CSS Configuration (`tailwind.config.js`)

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('nativewind/preset')],
  content: [
    './App.{js,jsx,ts,tsx}',
    './screens/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

---

## 🔗 3. Install React Navigation Dependencies

```bash
# Step 1: Install core navigation
npm install @react-navigation/native

# Step 2: Install required peer dependencies
npx expo install react-native-screens react-native-safe-area-context

# Step 3: Install the native stack navigator
npm install @react-navigation/native-stack
```

---

## 🧠 4. Example App Setup (`App.js`)

```js
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import './global.css'; // Optional for styling

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

---

## 🖼️ 5. Example Screen (`screens/HomeScreen.js`)

```js
import { View, Text, Image } from 'react-native';
import React from 'react';

const HomeScreen = () => {
  return (
    <View className="relative flex-1">
      <Image
        className="absolute h-full w-full"
        source={require('../assets/images/night.jpg')}
        resizeMode="cover"
      />
      <Text className="h-24 w-32 bg-red-600 pt-4 text-center font-bold text-white">HomeScreen</Text>
      <Text className="mt-2 text-white">Polash</Text>
    </View>
  );
};

export default HomeScreen;
```

## react hero icon install

```bash
npm i react-native-heroicons react-native-svg
```

---

## 📝 Notes

- Replace `h-22` with `h-24` or use `style={{ height: 88 }}` for custom height.
- Use `text-white` to make text readable over background.
- Keep all file paths correct (like `../assets/images/...`).

---

Let me know if you want more advanced setup like:

- ✅ Authentication screens
- ✅ Splash screen
- ✅ Dark/light theme toggle

## Web version watching for install

```bash
  npx expo install react-dom react-native-web @expo/metro-runtime
```

## Web version is uninstall command

```bash
npm uninstall react-dom react-native-web @expo/metro-runtime
```
