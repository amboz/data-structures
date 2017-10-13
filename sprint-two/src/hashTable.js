

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  //hashing function will generate an accepted index for the provided key
  var index = getIndexBelowMaxForKey(k, this._limit);
  //create tuple to add
  var inserted = [k, v];
  //check if hash (index) already exists in storage
  if (this._storage[index] !== undefined) {
  	//at existing hash, check if k already exists
  	var existingK = false;
  	var existingKLoc = 0;
  	for (var i = 0; i < this._storage[index].length; i++) {
  		if (this._storage[index][i][0] === k) {
  			existingK = true;
  			existingKLoc = i; 
  		}
  	}

  	//overwrite existing k with new v. push new tuple if new k
  	if (existingK) {
  		this._storage[index][existingKLoc][1] = v;
  	} else {
  		this._storage[index].push(inserted);
  	}
  } else {
    //create a array of tuples at the hash/index if hash does not already exist
  	this._storage[index] = [inserted];
  }
};

HashTable.prototype.retrieve = function(k) {
  //hashing function will generate an accepted index for the provided key
  var index = getIndexBelowMaxForKey(k, this._limit);
    //if hash (index) exists in storage
	if (this._storage[index] !== undefined) {
	    //iterate over each tuple at this index
		for (var i = 0; i < this._storage[index].length; i++) {
			//return v if k exists
			if (this._storage[index][i][0] === k) {
				return this._storage[index][i][1];
			}
		}
	//return undefined if hash (index) does not exist in storage
	} else {
		return undefined;
	}
};

HashTable.prototype.remove = function(k) {
  //hashing function will generate an accepted index for the provided key
  var index = getIndexBelowMaxForKey(k, this._limit);
    //if hash (index) exists in storage
	if (this._storage[index] !== undefined) {
	    //iterate over each tuple at this index
		for (var i = 0; i < this._storage[index].length; i++) {
			//remove existing tuple if k exists
			if (this._storage[index][i][0] === k) {
				this._storage[index].splice(i, 1);
			}
		}
	} else {
		//return undefined if hash (index) does not exist in storage
		return undefined;
	}
};

//Notes: Limited array looks like this: [[key, value], [key value], [[key, value], [colliding key, colliding value]]
// ^^ each tuple is associated with an index (produced by hashing function); 


/*
 * Complexity: What is the time complexity of the above functions?
 * Insert, Retrieve, Remove: Constant, O(1)
 */


