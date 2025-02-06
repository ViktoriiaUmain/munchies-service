import { ScrollView, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import RestaurantCard, { RestaurantProps } from "@/components/Card";
import { fetchRestaurantsData } from "@/data/restaurants";

export default function HomeScreen() {
  const [restaurants, setRestaurants] = useState<RestaurantProps[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchRestaurantsData();
        setRestaurants(data);
      } catch (error) {
        console.error("Error fetching restaurants data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <View
      style={{
        backgroundColor: "white",
      }}
    >
      <ScrollView style={styles.container}>
        {restaurants.map((restaurant) => (
          <RestaurantCard
            id={restaurant.id}
            key={restaurant.name}
            image_url={restaurant.image_url}
            name={restaurant.name}
            rating={restaurant.rating}
            filterIds={restaurant.filterIds}
            delivery_time_minutes={restaurant.delivery_time_minutes}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 15,
  },
});
