var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    var currentNode = list.head;

    if (list.head === null && list.tail === null) {
      list.head = node;
      list.tail = node;
    } else {
      list.tail.next = node;
      list.tail = node;
    } 
  };

  list.removeHead = function() {
      // checks whether head is empty
      //because if is null, then nothing to delete and return
      if (list.head === null) {
        return null;
      }
      
      var holder = list.head.value;
      list.head = list.head.next;
      return holder;
  };

  list.contains = function(target) {
       var currentNode = list.head;

      //do this while currentNode is not null
      while(currentNode !== null){
          //checks whether the value of current node is equal to target
          if(currentNode.value === target){
              return true;
          }
          
          //if not, update the current node
          currentNode = currentNode.next;
      }
      

      return false; 
      
      
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
Complexity: What is the time complexity of the above functions?
 
Answer: 
For adding/removing: constant time (O(1))
For searching: linear time (O(n))
*/