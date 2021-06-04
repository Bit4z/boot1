var add(a,b)=>a+b;
{
	var c=a+b;
	console.log("sum is:"+c)
}
x=12;
y=3;
//add(x,y);
sub=function(a,b)
{
	console.log("sub is:",+(a-b));
}
sub(x,y);
mul= (a,b)=>{
	console.log("mul is:"+(a*b));
}
mul(x,y);\
exports.adder=add;