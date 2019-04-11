var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newTail = new Node(value);
    if(list.head === null) { //if empty list
      list.head = newTail;
      list.tail = newTail;
    } else { //if not an empty list
      var oldTail = list.tail; //store old tail
      list.tail = newTail;  //set newTail to be the tail
      oldTail.next = newTail; // set oldTails next node to be newtail;
    }

  };

  list.removeHead = function() {
    var oldHead = list.head;
    list.head = list.head.next;
    return oldHead.value;
  };

  list.contains = function(target) {
    if(list.head === null){ //if empty list
      return false;
    }
    if(list.tail.value == target){
      return true;
    }
    var currentNode = list.head; // start at head
    while(currentNode !== list.tail){ //while the current Node isnt the last Node
      if(currentNode.value == target){
        return true;
      }
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
 * Complexity: What is the time complexity of the above functions?
 */
