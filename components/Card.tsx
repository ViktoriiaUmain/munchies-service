import { View, Text, Image, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { fetchFiltersData } from "../data/filters";
import ClockIcon from "./ui/ClockIcon";
import StarIcon from "./ui/StarIcon";

export type RestaurantProps = {
  id: string;
  image_url: string;
  name: string;
  rating: number;
  filterIds: string[];
  delivery_time_minutes: number;
};

const RestaurantCard: React.FC<RestaurantProps> = ({
  image_url: image,
  name,
  rating,
  filterIds: filters,
  delivery_time_minutes: deliveryTime,
}) => {
  const [filterNames, setFilterNames] = useState<string[]>([]);

  useEffect(() => {
    const fetchFilters = async () => {
      try {
        const filtersData = await fetchFiltersData(filters);
        const filterNames = filtersData.map((filter) => filter.name);
        setFilterNames(filterNames);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFilters();
  }, [filters]);

  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.info}>
        <View style={styles.infoContainer}>
          <Text
            style={{
              color: "rgba(31, 43, 46, 1)",
              fontFamily: "Helvetica",
              fontWeight: 400,
              fontSize: 18,
              lineHeight: 16,
            }}
          >
            {name}
          </Text>
          <Text
            style={{
              color: "rgba(153, 153, 153, 1)",
              fontFamily: "Helvetica",
              fontWeight: 700,
              fontSize: 12,
              lineHeight: 16,
            }}
          >
            {filterNames.join(" • ")}
          </Text>
          <View style={styles.deliveryTime}>
            <ClockIcon />
            <Text
              style={{
                color: "rgba(80, 85, 92, 1)",
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: 10,
                lineHeight: 12.1,
              }}
            >
              {deliveryTime} mins
            </Text>
          </View>
        </View>
        <View style={styles.rating}>
          <StarIcon />
          <Text
            style={{
              color: "rgba(80, 85, 92, 1)",
              fontFamily: "Inter",
              fontWeight: 700,
              fontSize: 10,
              lineHeight: 12.1,
            }}
          >
            {rating}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  image: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    width: "100%",
    height: 132,
  },
  infoContainer: {
    flex: 1,
    gap: 2,
  },
  info: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: 8,
  },
  rating: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },

  deliveryTime: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
});

export default RestaurantCard;
