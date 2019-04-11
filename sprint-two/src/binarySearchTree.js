var BinarySearchTree = function(value) {
	var tree = {};
	tree.value = value;
	tree.left = null;
	tree.right = null;
	_.extend(tree, binarySearchTreeMethods);
	return tree;
};

var binarySearchTreeMethods = {};

binarySearchTreeMethods.insert = function(value){
	if(this.value > value){ //input value less than thisTree.value
		if(this.left){ //if (hasLeftNode);
			this.left.insert(value);
		} else {
			this.left = new BinarySearchTree(value);
		}
	} else { //input value is greater than thisTree.value
		if(this.right){
			this.right.insert(value);
		} else {
			this.right = new BinarySearchTree(value);
		}
	}
};

binarySearchTreeMethods.contains = function(value){
	if(this.value == value){
		return true;
	} else if(this.value < value && this.right){
		return this.right.contains(value);
	} else if(this.value > value && this.left){
		return this.left.contains(value);
	}
	return false;
};

binarySearchTreeMethods.depthFirstLog = function(callback){
	callback(this.value);
	if(this.left){
		this.left.depthFirstLog(callback);
	}
	if(this.right){
		this.right.depthFirstLog(callback);
	}
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
