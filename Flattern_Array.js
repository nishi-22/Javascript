// Code goes here
//flattern an array  (iterative method)
var res=[];
function flattern(arr){
  for(var i=0;i<arr.length;i++){
    var val= arr[i];
     //console.log(val);
    if(Array.isArray(val)){
      return flattern(val);
    }
    else
     res.push(val);
    }
  return res;
  
  
}

console.log(flattern([1,2,[3,[4,5]]]));
