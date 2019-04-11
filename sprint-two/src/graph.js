

// Instantiate a new graph
var Graph = function() {
	this.all = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value) {
	var newNode = Node(value);
	this.all.push(newNode);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(value) {
	for(var i in this.all){
		if(this.all[i].value == value){
			return true;
		}
	}
	return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(value) {
	for(var i in this.all){
		if(this.all[i].value == value){//find node with value 
			for(j in this.all[i].connections){ //loop through nodes connections
				var connect = this.all[i].connections[j];//connect = value of node
				for(var k in this.all){ // loop through all values
					if(connect == this.all[k].value){ //if connect == value
						this.removeEdge(value, connect);
					}
				}     //search for each connection and delete connections on them
			}
			delete this.all[i];
		}
	}
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
	for(var i in this.all){ //loop through list of all graphs
		if(this.all[i].value == fromNode){ //find fromNode
			for(var j in this.all[i].connections){ //loop through all of fromNodes connections
				if(this.all[i].connections[j]==toNode){ // if toNode is connected return true
					return true;
				}
			}
		}
	}
	return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
	for(var i in this.all){
		if(this.all[i].value == fromNode){
			this.all[i].connections.push(toNode);
		}
		if(this.all[i].value == toNode){
			this.all[i].connections.push(fromNode);
		}
	}

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
	var connected = false;
	var node1 = 0;
	var node2 = 0;
	for(var i in this.all){ //loop through all nodes
		if(this.all[i].value == fromNode){ //find fromNode save to node1;
			for(var j in this.all[i].connections){
				if(this.all[i].connections[j] == toNode){
					node1 = i;
					connected = true;
				}
			}
		}
	}
	for(var i in this.all) { //finding the toNode saving to node2
		if(this.all[i].value == toNode){
			node2 = i;
		}
	}
	if(connected){
		for(var i in this.all[node1].connections){ //remove toNode from fromNode
			if(this.all[node1].connections[j] == toNode){
				this.all[node1].connections.splice(i,1);
			}
		}
		for(var i in this.all[node2].connections){ //remove fromNode from toNode
			if(this.all[node2].connections[j] == fromNode){
				this.all[node2].connections.splice(i,1);
			}
		}
	}
	//check if they are connected
		//if yes: remove toNode from fromNodes.connections
		// remove fromNode from toNodes.connections
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(func) {
	for(var i in this.all){
		func(this.all[i].value);
	}
};

var Node = function(value){
	var node = {};
	node.value = value;
	node.connections = [];
	return node;
}

/*
 * Complexity: What is the time complexity of the above functions?
 */


