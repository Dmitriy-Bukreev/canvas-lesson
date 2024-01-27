export default function generateArray(start = 0, stop = null, step = 1) {
  const [actualStart, actualStop] = stop === null ? [0, start] : [start, stop];
  const result = [];
  for (let i = actualStart; i < actualStop; i += step) {
    result.push(i);
  }
  return result;
}
