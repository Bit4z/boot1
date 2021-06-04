console.log("Hello World!");
//var obTimer;

function show()
{ var i=1;
	var obTimer= setInterval(()=>{if(i==5){
		clearInterval(obTimer);
	}
	console.log("Welcome",i);
i++;
},2000)
}
show();
//clearTimeout(obTimer);
//console.log("end here");