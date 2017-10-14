var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

	this.storage = {};


};



Stack.prototype.push = function(value){
	var entries = Object.keys(this.storage).length;
    this.storage[entries] = value;
};

Stack.prototype.pop = function(){
	var entries = Object.keys(this.storage).length;
    var temp = this.storage[entries-1];
    delete this.storage[entries-1];
    return temp;
};

Stack.prototype.size = function(){
	return Object.keys(this.storage).length;
};
