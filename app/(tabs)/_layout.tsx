import { IconSymbol } from "@/components/ui/IconSymbol";
import UmainLogo from "@/components/ui/UmainLogo";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
        headerStyle: {
          backgroundColor: "white", // or any other color you want
          shadowColor: "transparent", // removes the shadow
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: () => <UmainLogo />,
          headerTitleAlign: "left",
          tabBarIcon: () => (
            <IconSymbol size={28} name="fastfood" color="black" />
          ),
          tabBarLabel: "Restaurants",
        }}
      />
    </Tabs>
  );
}
