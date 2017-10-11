var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var entries = Object.keys(storage).length;
    storage[entries] = value;
    return storage[entries];
  };

  someInstance.dequeue = function() {
    var dequeued = storage[0];
    delete storage[0];
    
    var tempStorage = {};
    
    for (var keys in storage) {
      tempStorage[keys - 1] = storage[keys];
    }

    storage = tempStorage;

    return dequeued;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
