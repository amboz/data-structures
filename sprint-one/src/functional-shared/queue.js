var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {
  queueMethods.enqueue = function(value) {
  	var enqueuedKey = Object.keys(storage).length;
  	storage[enqueuedKey] = value;
  	return storage[enqueuedKey];
  }

  queueMethods.dequeue = function() {
  	var dequeued = storage[0];
  	delete storage[0];

  	var tempStorage = {};
  	for (var key in storage) {
  		tempStorage[key-1] = storage[key];
  	}

  	storage = tempStorage

  	return dequeued;
  }

  queueMethods.size = function() {
  	return Object.keys(storage).length;
  }
};

queueMethods.enqueue = function(value) {
  this.storage[Object.keys(this.storage).length] = value;
  return this.storage[Object.keys(this.storage).length];
};

queueMethods.dequeue = function() {
  var dequeued = this.storage[0];
  delete this.storage[0];
  var tempStorage = {};

  for (var keys in this.storage) {
    tempStorage[keys - 1] = this.storage[keys];
  }

  this.storage = tempStorage;

  return dequeued;
};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};

