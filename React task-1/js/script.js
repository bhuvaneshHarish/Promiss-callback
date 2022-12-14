//CALLBACK FUNCTION//
function fun1(num,callback)
{
var i;
for(i=0; i<=num; i++){
	console.log(i);
}
callback(i)
} // passing a  function into another function like param and 
//process that function its called callback function

function fun2(value){
	console.log("The number is" + " " + value);
}
fun1(10,fun2);

//PROMISE//
let print = new Promise(function(resolve,reject){
setTimeout(function(){
	resolve("success");
},3000);
});
print.then(console.log);

let print2 = new Promise(function(resolve,reject){
setTimeout(function(){
	reject("error");
},1000);

});
print2.catch(console.log);