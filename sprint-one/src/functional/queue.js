var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
  	var enqueuedKey = Object.keys(storage).length;
  	storage[enqueuedKey] = value;
  	return storage[enqueuedKey];
  };

  someInstance.dequeue = function() {
  	var dequeued = storage[0];
  	delete storage[0];

  	var tempStorage = {};
  	for (var key in storage) {
  		tempStorage[key-1] = storage[key];
  	}

  	storage = tempStorage

  	return dequeued;
  };

  someInstance.size = function() {
  	return Object.keys(storage).length;
  };

  return someInstance;
};