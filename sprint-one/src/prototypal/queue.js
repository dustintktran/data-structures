var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  return newQueue;
};

var queueMethods = {
	'storage':{},
  	'length': 0,
  	'front':0,
	'enqueue': function(value){
		this.storage[this.length] = value;
		this.length++;
	},
	'dequeue': function(){
		var popped = this.storage[this.front];
		if(this.length > 0 && this.front !== this.length){
			delete this.storage[this.front];
			this.front++;
		}
		return popped;
	},
	'size': function(){
		return this.length-this.front;
	}
};


