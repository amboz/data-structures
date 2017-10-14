var Stack = function() {
  var someInstance = {};  

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    var pushedKey = Object.keys(storage).length;
    storage[pushedKey] = value;
    return storage[pushedKey];
  };
    var entries = Object.keys(storage).length;
    storage[entries] = value;
  };

  someInstance.pop = function() {
    var entries = Object.keys(storage).length;
    var temp = storage[entries-1];
    delete storage[entries-1];
    return temp;

  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
