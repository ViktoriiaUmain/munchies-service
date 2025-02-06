export async function fetchRestaurantsData() {
  try {
    const response = await fetch(
      "https://food-delivery.umain.io/api/v1/restaurants",
      {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      }
    );
    const data = await response.json();
    return data.restaurants;
  } catch (error) {
    console.log(error);
  }
}
