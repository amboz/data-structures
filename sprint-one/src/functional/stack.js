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

  someInstance.pop = function() {
    var popped = storage[Object.keys(storage).length - 1];
    delete storage[Object.keys(storage).length - 1];
    return popped;
  };

  someInstance.size = function() {
    return Object.keys(storage).length
  };

  return someInstance;
};
