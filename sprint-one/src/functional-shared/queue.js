var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  var storage = {};
  someInstance.enqueue = queueMethods.enqueue;
  someInstance.dequeue = queueMethods.dequeue;
  someInstance.size = queueMethods.size;

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


