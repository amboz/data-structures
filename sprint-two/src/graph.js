// Instantiate a new graph
var Graph = function() {
	this.nodes = {};
	this.edges = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = node;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
	return this.nodes[node] ? true : false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
	if (this.contains(node)) {
		delete this.nodes[node];
		delete this.edges[node];
	}
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
	if (_.indexOf(this.edges[fromNode], toNode) !== -1 || _.indexOf(this.edges[toNode], fromNode) !== -1) {
		return true;
	}

	return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges[fromNode] = [fromNode, toNode];
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
	if (this.hasEdge(fromNode, toNode)) {
		delete this.edges[fromNode];
	}
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
	_.each(this.nodes, function(node) {
		cb(node);
	})
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addNode: Constant, O(1)
 * contains: Constant, O(1)
 * removeNode: Constant, O(1)
 * hasEdge: Linear, O(n)
 * addEdge: Constant, O(1)
 * removeEdge: Linear, O(n)
 * forEachNode: Linear, O(n)
 */
