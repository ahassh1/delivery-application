import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { StarIcon } from 'react-native-heroicons/solid';
import { MapPinIcon } from 'react-native-heroicons/outline';

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity
      className="mr-3 rounded bg-white shadow"
      accessibilityLabel={`View details for ${title}`}
      onPress={() => console.log('Tapped restaurant', id)} // optional
    >
      <Image source={{ uri: imgUrl }} className="h-36 w-full rounded-t-md" />
      <View className="px-3 pb-4">
        <Text className="pt-2 text-lg font-bold" numberOfLines={1}>
          {title}
        </Text>

        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating}</Text>
            {' • '}
            {genre}
          </Text>
        </View>

        <View className="flex-row items-center space-x-1">
          <MapPinIcon color="gray" opacity={0.4} size={22} />
          <Text className="text-xs text-gray-500" numberOfLines={1}>
            Nearby • {address}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
