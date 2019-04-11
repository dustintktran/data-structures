class Queue {
  constructor() {
  	this.storage = {};
  	this.length = 0;
  	this.front = 0;
  }
  enqueue(value){
  	this.storage[this.length] = value;
  	this.length++;
  };
  dequeue(){
  	var popped = this.storage[this.front];
  	if(this.length > 0 && this.front !== this.length){
  		delete this.storage[this.front];
  		this.front++;
  	}
  	return popped;
  };
  size(){
  	return this.length - this.front;
  };
}
