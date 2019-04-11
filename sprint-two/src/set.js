var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
	var isCopy = false;
	for(var i in this.storage){
		if(this.storage[i] == item){
			isCopy = true;
		}
	}
	if(!isCopy){
		this.storage.push(item);		
	}
};

setPrototype.contains = function(item) {
	for(var i in this.storage){
		if(this.storage[i] == item){
			return true;
		}
	}
	return false;
};

setPrototype.remove = function(item) {
	for(var i in this.storage){
		if(this.storage[i] == item){
			this.storage.splice(i,1);
		}
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
