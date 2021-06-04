const os=require('os');
var type=os.type();
var hostname=os.hostname();
console.log("type: "+type);
console.log("hostname: "+hostname);
console.log(os.release());
console.log(os.userInfo());