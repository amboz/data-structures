var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
	var added = Tree(value);
	this.children.push(added);
};

treeMethods.contains = function(target) {
	if (this.value === target) {
		return true;
	}


	return _.reduce(this.children, function(acc, item) {
		if (item.contains(target)) {
			return true;
		}

		return acc;
	}, false)
};



/*
 * Complexity: What is the time complexity of the above functions?
 * Adding: Constant, O(1)
 * Searching (DFS): Linear, O(n) 
 */

//Notes: Fxn Shared (using extend to add shared methods to nodes)
//Notes: Tree class with props:
	//.children (array with subtrees)
	//.addChild(value) method --> takes value, sets as target of a node, 
		//adds that node as a child of the tree
	//.contains(target) method --> bool if found in target node or any descendants nodes