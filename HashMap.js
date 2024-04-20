const makeHashMap = () => {
  let capacity = 16;
  let numOfStoredKeys = 0;
  const buckets = [];

  const isTimeToExpand = () => {
    return numOfStoredKeys / capacity >= LOAD_FACTOR;
  };
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
    return hashCode % capacity;
  };
  const has = (key) => {
    const index = indexOfKey(key);
    return buckets[index] !== undefined && buckets[index].key === key;
  };

  const set = (key, value) => {
    const index = indexOfKey(key);
    if (has(key) && buckets[index].key !== key) {
      throw new Error("Collision occured");
    }
    if (!has(key)) {
      numOfStoredKeys += 1;
    }
    buckets[index] = { key, value };
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
  const keys = () => {
    const allKeys = [];
    for (const bucket of buckets) {
      if (bucket === undefined || bucket === null) continue;
      allKeys.push(bucket.key);
    }
    return allKeys;
  };
  const values = () => {
    const allValues = [];
    for (const bucket of buckets) {
      if (bucket === undefined || bucket === null) continue;
      allValues.push(bucket.value);
    }
    return allValues;
  };
  const entries = () => {
    const allEntries = [];
    for (const bucket of buckets) {
      if (bucket === undefined || bucket === null) continue;
      allEntries.push([bucket.key, bucket.value]);
    }
    return allEntries;
  };
  return { set, has, remove, length, clear, keys, values, entries };
};

export default makeHashMap;
