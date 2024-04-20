const makeHashSet = () => {
  let size = 16;
  let numOfStoredKeys = 0;
  const buckets = [];
  const hash = (key) => {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
    return hashCode;
  };
  const indexOfKey = (key) => {
    const hashCode = hash(key);
    return hashCode % size;
  };
  const has = (key) => {
    const index = indexOfKey(key);
    return buckets[index] !== undefined && buckets[index] === key;
  };
  const set = (key) => {
    const index = indexOfKey(key);
    if (has(key) && buckets[index] !== key) {
      throw new Error("Collision occured");
    }
    if (!has(key)) {
      numOfStoredKeys += 1;
    }
    buckets[index] = key;
  };

  const remove = (key) => {
    if (!has(key)) return false;
    buckets[indexOfKey(key)] = null;
    numOfStoredKeys -= 1;
    return true;
  };
  const length = () => numOfStoredKeys;
  const clear = () => {
    buckets.fill(null);
    numOfStoredKeys = 0;
  };
  const entries = () => {
    const allKeys = [];
    for (const bucket of buckets) {
      if (bucket === undefined || bucket === null) continue;
      allKeys.push(bucket);
    }
    return allKeys;
  };
  return { set, has, remove, length, clear, entries };
};
export default makeHashSet;
