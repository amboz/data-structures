//Specs do not use "new" keyword to instantiate BSTs; using protoypal obj inst here
var BinarySearchTree = function(val) {
	var node = Object.create(BinarySearchTree.prototype);

	node.value = val;
	node.left = null;
	node.right = null;

	return node;
};

BinarySearchTree.prototype.insert = function(val) {
	var inserted = BinarySearchTree(val);

	//recursively call insert on either L or R until we find correct place to insert
	if (val < this.value) {
		if (!this.left) {
			this.left = inserted;
		} else {
			this.left.insert(val);
		}
	} else {
		if (!this.right) {
			this.right = inserted;
		} else {
			this.right.insert(val);
		}
	}
};

BinarySearchTree.prototype.contains = function(target) {
	if (this.value === target) {
		return true;
	} else if (target < this.value) {
		if (!this.left) {
			return false;
		} else {
			return this.left.contains(target);
		}
	} else {
		if (!this.right) {
			return false;
		} else {
			return this.right.contains(target);
		}
	}
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {
	callback(this.value);

	if (this.left) {
		this.left.depthFirstLog(callback);
	}

	if (this.right) {
		this.right.depthFirstLog(callback);
	}
};


/*
 * Complexity: What is the time complexity of the above functions?
 * Insert, Contains: Logarithmic, O(log n)
 * depthFirstLog: Linear, O(n)
 */