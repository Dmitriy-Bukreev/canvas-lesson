export default function generateArray(start = 0, stop = null, step = 1) {
	const [actualStart, actualStop] = stop === null ? [0, start] : [start, stop];
	  const actualLength = (actualStop - actualStart) / step;
	  return Array.from(
	    { length: actualLength },
	    (v, k) => (k + actualStart) * step,
	  );
}
