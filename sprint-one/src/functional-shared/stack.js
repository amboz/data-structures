var Stack = function() {
	

	var someInstance = {};
	someInstance.storage = {};




	_.extend(someInstance, stackMethods);

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
