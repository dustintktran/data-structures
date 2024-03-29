

var HashTable = function() {
  this._limit = 8;
  this.size = 0;
  this._storage = LimitedArray(this._limit);
  this.finders = [];
  this.IsEmptySlot = function(index){
    if(this._storage.get(index) === undefined){
      return true;
    } else {
      return false;
    }
  }
  // this.finders = [];
};


HashTable.prototype.insert = function(finder, value) {
  var index = getIndexBelowMaxForKey(finder, this._limit);
  this.size = 1;
  for(var i in this.finders){
    if(this.finders[i] !== undefined){
      this.size++;
    }
  }
  if(this.size >= this._limit-1){
    this._limit = this._limit*2;
  }

  // var size = 0;
  // this._storage.each(function(){
  //   if(arguments[0] !== undefined){
  //      size++;   
  //    }
  // });
  // if(size >= this._limit){
  //   this._limit = this._limit*2;
  // }

  if(this.finders[index] !== finder && !this.IsEmptySlot(index)){ //if not the same finder for this index and not empty 
    // this._storage.set(index + 1, value);
    // this.finders[index+1] = finder;
    for(var i = 0; i < this._limit; i++){
      if(this.IsEmptySlot(i)){
        this._storage.set(i,value);
        this.finders[i] = finder;
        return;
      }
    }
  } else {
    this._storage.set(index,value);
    this.finders[index] = finder;
  }




  // if(this.index == null){ //if isEmptySlot {set this.index, set finders[index] = finder}
  //   this.index = value;
  //   this.finders[index] = finder;
  // } else { 
  //   if(this.finderFoundAtIndex(index, finder)){ //if IsntEmpty, but SameFinderUsed replace all values
  //     this.index = value;
  //     this.finders[index] = finder;
  //   } else if(!this.finderFoundAtIndex(index, finder)) { // If IsntEmpty and notTheSameFinder, find a new location
  //     for(var newLoc = 0; newLoc < this._limit; newLoc++){
  //       if(this.newLoc == null){  //empty slot found -> add values
  //         this.newLoc = value;
  //         this.finders.push(finder); //push to front
  //       }
  //     }
  //   }  
  // }
};

HashTable.prototype.retrieve = function(finder) {
  var index = getIndexBelowMaxForKey(finder, this._limit);
 // if(this.finders[index] !== finder){
    // return this._storage.get(index+1);
    for(var i = 0; i < this._limit; i++){
      if(this.finders[i] === finder){
        return this._storage.get(i);
      }
    }
  // }
  // return this._storage.get(index);



  //return this._storage.get(index);
  // if(this.index == null){ //if nothings there return 
  //   return;
  // } else { 
  //   if(this.finderFoundAtIndex(index, finder)){ //if SameFinderUsed return values
  //    return this.index;
  //   } else { // If notTheSameFinder, Start search
  //     for(var newLoc = index; newLoc < this._limit; newLoc++){
  //       if(this.finderFoundAtIndex(newLoc, finder)){ //ifFinderMatched
  //         return this.newLoc;
  //       }
  //     }
  //   }
  // }
  // return this.index;
};

HashTable.prototype.remove = function(finder) {
  var index = getIndexBelowMaxForKey(finder, this._limit);
  this._storage.set(index, undefined);
  this.finders[index] = undefined;
  this.size = 1;
  for(var i in this.finders){
    if(this.finders[i] !== undefined){
      this.size++;
    }
  }
  if(this.size < this._limit/2){
    this._limit = this._limit/2;
  }
};
// //  limitedArray.each = function(callback) {
//     for (var i = 0; i < storage.length; i++) {
//       callback(storage[i], i, storage);
//     }
//   };





/*
 * Complexity: What is the time complexity of the above functions?
 */


