export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new TypeError('map must be an instance of Map');
  }
  try {
    for (const [key, value] of map) {
      if (value === 1) {
        map.set(key, 100);
      }
    }
    return map;
  } catch (error) {
    throw new Error('Cannot process');
  }
}
