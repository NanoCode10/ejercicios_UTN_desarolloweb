var array = [1,2,3,4,5,6];
var arrayNew = array.map(function(x){
    return Math.pow(x,2);
});

console.log(arrayNew);