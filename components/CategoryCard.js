import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="mr-2 items-center">
      <Image
        source={{
          uri: imgUrl, // ✅ Corrected here
        }}
        className="h-20 w-20 rounded"
      />
      <Text className="mt-1 text-sm font-semibold">{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
