class Stack {
  constructor() {
  	this.storage = {};
  	this.length = 0;
  }
  push(value){
  	this.storage[this.length] = value;
  	this.length++;
  };
  pop(){
  	if(this.length > 0){
  		var popped = this.storage[this.length - 1];
 		delete this.storage[this.length - 1];
 		this.length--;
 		return popped;
  	}
  };
  size(){	
  	return this.length;
  };
}