exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(this, arr);
  },

  speak : function(fn, obj) {
    return fn.apply(obj);
  },

  functionFunction : function(str) {
    return function (newStr){
      return str +', '+ newStr;
    };
  },

  makeClosures : function(arr, fn) {
    var newArr = [];
    var newFunc = function (el){
      return function(){return fn(el)}
    }
    _.each(arr, function(el){
      newArr.push(newFunc(el));
    });
    return newArr;
  },

  partial : function(fn, str1, str2) {
    var newVar = fn.bind(fn, str1, str2);
    return newVar;
  },

  useArguments : function() {
    // var args = Array.prototype.slice.call(arguments);
    // console.log(args);
    // return args;
    var integers = 0;
    for(var i = 0; i < arguments.length; i++){
      integers += arguments[i];
    }
    return integers;
  },

  callIt : function(fn) {
    var args = Array.prototype.splice.call(arguments, 1);
    fn.apply(null, args);
  },

  partialUsingArguments : function(fn) {
    var firstArgs = [].slice.call(arguments,1);
    function secondFunction() {
       var secondArgs = [].slice.call(arguments);
       var finalArgs = firstArgs.concat(secondArgs);
       return fn.apply(null,finalArgs);
    }
    return secondFunction;
  },

  curryIt : function(fn) {
    return function(x){
      return function(y){
        return function(z){
          return fn(x,y,z);
        }
      }
    }
  }
};
