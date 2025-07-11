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
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
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
