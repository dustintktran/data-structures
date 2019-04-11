var Queue = function() {
  this.storage = {};
  this.length = 0;
  this.front = 0;
};

Queue.prototype.enqueue = function(value){
	this.storage[this.length] = value;
	this.length++;
};

Queue.prototype.dequeue = function(){
	var popped = this.storage[this.front];
	if(this.length > 0 && this.front !== this.length){
		delete this.storage[this.front];
		this.front++;
	}
	return popped;
};

Queue.prototype.size = function(){
	return this.length-this.front;
};