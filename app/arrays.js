exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    // var sum = 0;
    // $.each(arr, function(){
    //   sum += this;
    // });
    // return sum;
    return arr.reduce(function(a, b){
      return a+b;
    });
  },

  remove : function(arr, item) {
    return _.filter(arr, function(num){return num != item});
  },

  removeWithoutCopy : function(arr, item) {
    for (var i = arr.length; i--;){
      if (arr[i] === item) {
        arr.splice(i, 1);
      }
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    var bigun = arr1.concat(arr2);
    return bigun;
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var count = 0;
    _.each(arr, function(el){
      if (el === item){
        count++;
      }
    });
    return count;
  },

  duplicates : function(arr) {
    var dups = [];
    for (var i=0; i < arr.length; i++){
      if(arr.lastIndexOf(arr[i]) !== i && !dups.includes(arr[i])){
        dups.push(arr[i]);
      }
    }
    return dups;
  },

  square : function(arr) {
    var mappedArr = arr.map(function(el){
      return el*el;
    });
    return mappedArr;
  },

  findAllOccurrences : function(arr, target) {
    var findIdx = [];
    for (var i=0; i < arr.length; i++){
      if(arr[i] === target){
        findIdx.push(i);
      }
    }
    return findIdx;
  }
};
