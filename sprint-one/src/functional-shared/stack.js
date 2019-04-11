var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  	var stack = {};
  	_.extend(stack, stackMethods);
  	return stack;
};

var stackMethods = {
	'storage':{},
  	'length': 0,
	'push': function(value){
		this.storage[this.length] = value;
		this.length++;
	},
	'pop': function(){
		var popped = this.storage[this.length-1];
		if(this.length > 0){
			delete this.storage[this.length-1];
			this.length--;
		}
		return popped;
	},
	'size': function(){
		return this.length;
	}
};
