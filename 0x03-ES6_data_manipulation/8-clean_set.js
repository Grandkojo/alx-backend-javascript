export default function cleanSet(set, startString) {
  if (!startString || !set) return '';
  if (!(set instanceof Set) || typeof startString !== 'string') return '';
  return startString !== ''
    ? [...set]
      .filter((word) => word.startsWith(startString))
      .map((word) => word.slice(startString.length))
      .join('-')
    : '';
}
