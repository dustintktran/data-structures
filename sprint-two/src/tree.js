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
	var childNode = Tree(value);
	this.children.push(childNode);

};

treeMethods.contains = function(target) {

	var search = function(target, node){
		if(node.value == target){ //if value is found
			return true;
		} else if (node.children.length > 0){ // if there are children;
			for(var i in node.children){
				if(search(target, node.children[i])){
					return true;
				}
			}
		}
	return false;
	}

	return search(target, this);
};

//for each child. if value == target; 

/*
 * Complexity: What is the time complexity of the above functions?
 */
