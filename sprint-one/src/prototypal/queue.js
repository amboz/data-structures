var Queue = function() {

  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};


  return someInstance;
};

var queueMethods = {};

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