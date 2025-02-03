export const useFilter = (array,query) => {
  return array.filter(
    (item) =>
      item.name.common.toLowerCase().includes(query) ||
      item.region.toLowerCase().includes(query)
  );
};
