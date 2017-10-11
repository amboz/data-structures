var Queue = function() {

  this.storage = {};
  
};

Queue.prototype.enqueue = function(value) {
  
  this.storage[Object.keys(this.storage).length] = value;
  return this.storage[Object.keys(this.storage).length];

}; 

Queue.prototype.dequeue = function() {
  var dequeued = this.storage[0];
  delete this.storage[0];

  var tempStorage = {};
  
  for (var keys in this.storage) {
    tempStorage[keys - 1] = this.storage[keys];
  }

  this.storage = tempStorage;
  return dequeued;
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};




