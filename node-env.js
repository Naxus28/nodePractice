// set node env via terminal: export NODE_ENV='<environment>' i.e. export NODE_ENV='development'
// check node env via terminal: echo $NODE_ENV

var environment = process.env.NODE_ENV;
var processEnv = process.env;
console.log(environment);
console.log('=============');
console.log(processEnv);
console.log(process.env.test);
