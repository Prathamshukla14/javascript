var arr = [1,2,3,4];
arr.forEach(function(val){
    console.log(val + " hello")  ;
}
) 

var arrr= [3,4,5,6];
var newarr = arr.map(function(val){
   return val*3;
})
console.log(newarr);


var arrr= [3,4,5,6];
var newarr = arr.filter(function(val){
   if(val>2) {return true;}
   else return false;
})
console.log(newarr);

async function abcd(){
   var blob = await fetch(`https://randomuser.me/api/`);
   var ans = await blob.json();
   console.log(ans.results[0].name);
}
 
abcd();
