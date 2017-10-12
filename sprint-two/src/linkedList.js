var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
  	var added = Node(value);
  	var currentNode = list.head;

  	if (!currentNode && !list.tail) {
  		list.head = added;
  		list.tail = added
  	} else {
  		list.tail.next = added;
  		list.tail = added;
  	}
  };

  list.removeHead = function() {
  	var removed = list.head.value;

  	if (list.head === null) {
  		return null;
  	} else if (list.head.next === null) {
  		list.head = null;
  	} else {
  		list.head = list.head.next;
  	}

  	return removed;
  };

  list.contains = function(target) {
  	var output = false;
  	var current = list.head;

  	if (current.value === target || list.tail.value === target) {
  		output = true;
  	}

  	while (current.next) {
  		if (current.value === target) {
  			output = true;
  		}
  		current = current.next;
  	}

  	return output;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addToTail, removeHead: Constant, O(1)
 * constains: Linear, O(n)
 */
