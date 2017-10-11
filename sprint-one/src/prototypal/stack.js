var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

	var someInstance = Object.create(stackMethods);
	someInstance.storage = {};


	return someInstance;

};

var stackMethods = {};


stackMethods.push = function(value){
	var entries = Object.keys(this.storage).length;
    this.storage[entries] = value;
};

stackMethods.pop = function(){
	var entries = Object.keys(this.storage).length;
    var temp = this.storage[entries-1];
    delete this.storage[entries-1];
    return temp;
};

stackMethods.size = function(){
	return Object.keys(this.storage).length;
};


