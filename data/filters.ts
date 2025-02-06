type FilterProps = {
  id: string;
  name: string;
  image_url: string;
};

export async function fetchFiltersData(
  filterIds: string[]
): Promise<FilterProps[]> {
  try {
    const filterDataPromises = filterIds.map(async (id) => {
      const response = await fetch(
        `https://food-delivery.umain.io/api/v1/filter/${id}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        }
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error(`Failed to fetch filter data for id: ${id}`);
      }
      return data;
    });
    const filters = await Promise.all(filterDataPromises);
    return filters;
  } catch (error) {
    console.log(error);
    return [];
  }
}
