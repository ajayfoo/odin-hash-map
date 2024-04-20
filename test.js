import HashTable from "./main.js";
const testHashMap = () => {
  const hashMap = HashTable.makeHashMap(1);
  const printHashMapState = () => {
    console.log(hashMap.keys());
    console.log(hashMap.values());
    console.log(hashMap.entries());
    console.log("Number Of Elements in HashMap: " + hashMap.length());
  };
  hashMap.set("1", "ajay");
  hashMap.set("1", "joe");
  hashMap.set("foo", "bar");
  printHashMapState();
  hashMap.remove("1");
  printHashMapState();
  console.log("HashMap has foo key? " + hashMap.has("foo"));
  hashMap.clear();
  hashMap.set("bin", "code");
  printHashMapState();
};

const testHashSet = () => {
  const hashSet = HashTable.makeHashSet();
  const printHashSetState = () => {
    console.log(hashSet.entries());
    console.log("Number Of Elements in HashSet" + hashSet.length());
  };
  hashSet.set("ajay");
  hashSet.set("joe");
  hashSet.set("bar");
  hashSet.set("bar");
  printHashSetState();
  hashSet.remove("bar");
  printHashSetState();
  console.log("HashSet has joe key? " + hashSet.has("joe"));
  hashSet.clear();
  hashSet.set("baz");
  printHashSetState();
};

testHashMap();
//testHashSet();
