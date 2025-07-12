import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';

const FeaturedRow = ({ title, description, id }) => {
  return (
    <View>
      {/* Header */}
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="text-lg font-bold">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>

      {/* Subtext */}
      <Text className="px-4 text-sm text-gray-500">{description}</Text>

      {/* Scrollable cards */}
      <ScrollView
        horizontal // ✅ Fixed this
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4">
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="YO! Drink"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="This is Test description"
          dishes={[]}
          long={20}
          lat={0}
        />

        <RestaurantCard
          id={124}
          imgUrl="https://links.papareact.com/gn7"
          title="Sushi World"
          rating={4.7}
          genre="Japanese"
          address="456 Sushi Ave"
          short_description="Fresh sushi and more"
          dishes={[]}
          long={21}
          lat={1}
        />

        <RestaurantCard
          id={125}
          imgUrl="https://links.papareact.com/gn7"
          title="Ramen King"
          rating={4.6}
          genre="Japanese"
          address="789 Ramen Rd"
          short_description="Authentic Ramen bowls"
          dishes={[]}
          long={22}
          lat={2}
        />
        <RestaurantCard
          id={125}
          imgUrl="https://links.papareact.com/gn7"
          title="Ramen King"
          rating={4.6}
          genre="Japanese"
          address="789 Ramen Rd"
          short_description="Authentic Ramen bowls"
          dishes={[]}
          long={22}
          lat={2}
        />
        <RestaurantCard
          id={125}
          imgUrl="https://links.papareact.com/gn7"
          title="Ramen King"
          rating={4.6}
          genre="Japanese"
          address="789 Ramen Rd"
          short_description="Authentic Ramen bowls"
          dishes={[]}
          long={22}
          lat={2}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
